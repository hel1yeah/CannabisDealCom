<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { IFeaturedProducts } from '@/types/products';
import { FeaturedProducts } from '@/constants/product';

import Carousel from 'primevue/carousel';
import ScrollPanel from 'primevue/scrollpanel';

onMounted(() => {
	products.value = FeaturedProducts;
});

const products = ref<IFeaturedProducts[] | null>(null);
interface responsiveOptions {
	breakpoint: string;
	numVisible: number;
	numScroll: number;
}
const responsiveOptions = ref<responsiveOptions[]>([
	{
		breakpoint: '1400px',
		numVisible: 1,
		numScroll: 1,
	},
	{
		breakpoint: '1199px',
		numVisible: 1,
		numScroll: 1,
	},
	{
		breakpoint: '767px',
		numVisible: 1,
		numScroll: 1,
	},
	{
		breakpoint: '575px',
		numVisible: 1,
		numScroll: 1,
	},
]);
</script>

<template>
	<div class="app-carousel">
		<Carousel
			:value="products"
			:numVisible="1"
			:numScroll="1"
			:responsiveOptions="responsiveOptions"
			:autoplayInterval="10000"
			circular
			contentClass="carousel-content"
			containerClass="carousel-container"
			indicatorsContentClass="custom-indicator"
			:prevButtonProps="{
				class: 'custom-prev-button',
				'aria-label': 'Previous',
			}"
			:nextButtonProps="{ class: 'custom-next-button', 'aria-label': 'Next' }"
		>
			<template #item="slotProps">
				<div class="carousel-card">
					<NuxtImg
						class="carousel-card__img"
						:src="`/images/products/${slotProps.data.image}`"
						loading="lazy"
						alt="slotProps.data.nameI18N"
					/>
					<strong class="carousel-card__title">
						{{ $t('base.featured_products') }}
					</strong>
					<strong class="carousel-card__name">
						{{ $t(`products.${slotProps.data.nameI18N}`) }}
					</strong>
					<ScrollPanel style="height: 150px; width: 100%">
						<p class="carousel-card__desc">
							{{ $t(`products.${slotProps.data.descI18N[0]}`) }}
						</p>
					</ScrollPanel>

					<ul class="carousel-card__pluses">
						<li
							v-for="(plus, i) in slotProps.data.pluses"
							:key="i"
							class="carousel-card__pluses-item"
						>
							<div class="carousel-card__pluses-wrap">
								<i
									class="pi pi-check"
									style="color: 'var(--text-color)'; font-size: 0.8rem"
								></i>
							</div>
							{{ $t(`products.${plus}`) }}
						</li>
					</ul>
				</div>
			</template>
		</Carousel>
	</div>
</template>

<style lang="scss" scoped>
.app-carousel {
	width: 100%;
	max-width: 430px;
	overflow: hidden;
}

.carousel-card {
	width: 100%;
	margin: 0 auto;
	max-width: 380px;
	background-color: var(--background-color);
	padding: 1.25rem;
	border-radius: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 1rem;

	// transition: transform 0.3s ease;
	// transform: scale(0.9);
}

// .p-carousel-item-active > .carousel-card {
// 	transform: scale(1);
// }

.carousel-card__pluses-item {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: flex-start;
}

.carousel-card__pluses-wrap {
	width: 1.25rem;
	height: 1.25rem;
	padding: 2px;
	background-color: var(--cannabis-primary-color);
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel-card__img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 10px;
	max-width: 340px;
	max-height: 180px;
}

.carousel-card__desc {
	height: 150px;
}
</style>

<style lang="scss">
.carousel-container {
	position: relative;
	padding-bottom: 50px;
	flex-direction: column-reverse;
	& > .p-carousel-item {
		transform: scale(0.7);
	}
}
.custom-indicator {
	padding: 10px;
}
.custom-prev-button,
.custom-next-button {
	height: 25px;
	width: 55px;
	position: absolute;
	bottom: 0px;
	overflow: visible;
	border-radius: 20px;
}

.custom-prev-button:hover,
.custom-next-button:hover {
	background-color: #fbebc8;
}

/* Зміна положення кнопок */
.custom-prev-button {
	right: 115px;
	// left: -60px;
}

.custom-next-button {
	right: 25px;
	// right: -60px;
}
</style>
