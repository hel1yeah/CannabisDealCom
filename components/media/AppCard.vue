<script setup lang="ts">
import AppButtonLink from '@/components/base/AppButtonLink.vue';
import AppButton from '@/components/base/AppButton.vue';
import Rating from 'primevue/rating';
import Select from 'primevue/select';
import { useToast } from 'primevue/usetoast';
import { useI18n } from 'vue-i18n';
import type { IShoppingCardProducts } from '@/types/shopping_card';
import { useShoppingCartStore } from '@/store/useShoppingCartStore';

const { addItemInList } = useShoppingCartStore();
const { t } = useI18n();

import type { IFeaturedProducts } from '@/types/products';
import { ETypeProduct } from '@/types/products';
import type { TypeCard } from '@/types/card';
import { ETypeCard } from '@/types/card';
interface IProps {
	card: IFeaturedProducts | null;
	type: TypeCard;
	isNeedShadow?: boolean;
}
const {
	card = null,
	type = ETypeCard.CarouselCard,
	isNeedShadow = false,
} = defineProps<IProps>();

const isKindOfCarouselCard = ref<boolean>(type === ETypeCard.CarouselCard);
const isKindOfShopCard = ref<boolean>(type === ETypeCard.ShopCard);

const shadowClass = ref({ card__shadow: isNeedShadow });

const selectedPrice = ref<{
	weight: number;
	price: number;
} | null>(null);

// function checkTypeOfProduct() {
// 	if (card?.price?.one) {
// 		selectedPrice.value = 1;
// 	}
// }

// checkTypeOfProduct();

const isNeedSelected = computed(() => {
	return card?.typeProduct === ETypeProduct.Cannabis;
});

const isDisabledButton = computed(() => {
	return isNeedSelected.value ? !selectedPrice.value : false;
});

const toast = useToast();

const showSuccess = () => {
	toast.add({
		severity: 'success',
		summary: t('base.product_added_to_cart', {
			product: t(`products.${card?.nameI18N}`),
		}),
		detail: t('base.enjoy_shopping'),
		life: 4000,
	});
};
function onAddToCart(card: IFeaturedProducts) {
	const product: IShoppingCardProducts = {
		id: card?.id,
		staticName: card?.staticName,
		nameI18N: card?.nameI18N,
		// price: selectedPrice.value.price,
		main_image: card?.main_image,
		product_link: card?.product_link,
		typeProduct: card?.typeProduct,
		counterProduct: 1,
	};

	if (ETypeProduct.Accessories === card?.typeProduct) product.count = 1;
	else product.weight = selectedPrice.value.weight;

	if (!isNeedSelected.value) product.price = card.price.one;
	else product.price = selectedPrice.value.price;

	addItemInList(product);
	showSuccess();
}
</script>
<template>
	<div :class="['card', shadowClass]">
		<template v-if="card">
			<NuxtImg
				class="card__img"
				:src="`/images/products/${card.main_image}`"
				loading="lazy"
				:alt="$t(`products.${card.nameI18N}`)"
			/>
			<template v-if="isKindOfCarouselCard">
				<strong class="card__title">
					{{ $t('base.featured_products') }}
				</strong>
				<strong class="card__name">
					{{ $t(`products.${card.nameI18N}`) }}
				</strong>
				<ScrollPanel style="height: 150px; width: 100%">
					<p class="card__desc">
						{{ $t(`products.${card.descI18N[0]}`) }}
					</p>
				</ScrollPanel>
				<ul class="card__pluses">
					<li
						v-for="(plus, i) in card.pluses"
						:key="i"
						class="card__pluses-item"
					>
						<div class="card__pluses-wrap">
							<i
								class="pi pi-check"
								style="color: 'var(--text-color)'; font-size: 0.8rem"
							></i>
						</div>
						{{ $t(`products.${plus}`) }}
					</li>
				</ul>
			</template>

			<template v-else-if="isKindOfShopCard">
				<strong class="card__shop__title">
					{{ $t(`products.${card.nameI18N}`) }}
				</strong>
				<p class="card__shop__desc">
					{{ $t(`products.${card.descI18N[0]}`) }}
				</p>

				<Rating
					:modelValue="card.rating"
					:readonly="true"
					:cancel="false"
					class="card__shop__rating"
				/>

				<div v-if="card.price?.one" class="card__shop__price">
					{{ card.price.one }}฿
				</div>
				<div v-else class="card__shop__price">
					{{ card.price.min }}฿ - {{ card.price.max }}฿
				</div>

				<Select
					v-if="!card.price?.one"
					v-model="selectedPrice"
					:options="card.select"
					showClear
					size="large"
					:placeholder="$t('base.select_an_option')"
					class="card__shop__select"
				>
					<template #value="slotProps">
						<div v-if="slotProps.value" class="card__shop__select-value">
							<div>{{ slotProps.value.weight }}-gram</div>
							<div>฿{{ slotProps.value.price }}</div>
						</div>
					</template>
					<template #option="slotProps">
						<div class="card__shop__select-option">
							<div>{{ slotProps.option.weight }}-gram</div>
							<div>฿{{ slotProps.option.price }}</div>
						</div>
					</template>
					<template #header>
						<div class="card__shop__select-header">
							{{ $t('base.available_options') }}
						</div>
					</template>
				</Select>

				<div v-else class="card__shop__price plug"></div>

				<!-- <Select
					:options="card.select"
					optionLabel="name"
					optionValue="id"
					class="card__shop__select"
				></Select> -->
			</template>
			<div class="card__buttons">
				<AppButtonLink
					type="primary"
					:isLoading="false"
					:to="`/shop/category/${card.typeProduct}/${card.product_link}`"
					class="card__button"
				>
					<template #text>
						{{ $t('base.about') }}
					</template>
				</AppButtonLink>
				<app-button
					@click="onAddToCart(card)"
					label
					v-if="isKindOfShopCard"
					type="primary"
					:disabled="isDisabledButton"
					:isLoading="false"
					class="card__button"
				>
					<template #text>
						{{ $t('base.add_to_cart') }}
					</template>
				</app-button>
			</div>
		</template>
		<template v-else>
			<h3 class="card__title">
				{{ $t('error.sorry_something_went_wrong') }}
			</h3>
			<p class="card__desc">
				{{ $t('error.try_again_later') }}
			</p>
			<p class="card__desc">
				{{ $t('error.our_programmers_all_ready_working_on_it') }}
			</p>
		</template>
	</div>
</template>

<style scoped lang="scss">
.card {
	width: 100%;
	margin: 0 auto;
	max-width: 380px;
	background-color: var(--background-color);
	padding: 1rem;
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 0.7rem;

	// transition: transform 0.3s ease;
	// transform: scale(0.9);
}

.card__pluses-item {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
}

.card__pluses-wrap {
	width: 1.25rem;
	height: 1.25rem;
	padding: 2px;
	background-color: var(--cannabis-primary-color);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.card__img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	// max-width: 340px;
	max-height: 180px;
}
.card__shop__title {
	text-align: center;
	font-size: 1.625rem;
}

.card__desc {
	height: 150px;
}

.card__shop__price {
	font-size: 1.25rem;
	font-weight: 900;
	text-align: center;

	&.plug {
		height: 40px;
	}
}

.card__shop__rating {
	font-size: 1rem;
	color: var(--cannabis-primary-color);
}

.card__shop__desc {
	display: -webkit-box;
	-webkit-line-clamp: 3; /* Кількість рядків */
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis; /* Додає "..." в кінці тексту */
}

.card__shop__select-value {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
}
.card__shop__select-option {
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
}
.card__shop__select-header {
}

.card__buttons {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 0.5rem;
}
.card__button {
	flex: 1;
	max-width: 120px;
	min-height: 40px;
	padding: 0.5rem;
}
</style>
