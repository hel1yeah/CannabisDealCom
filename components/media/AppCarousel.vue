<script setup lang="ts">
import { ref, onMounted } from 'vue';

import AppLoader from '@/components/common/AppLoader.vue';
import AppCard from '@/components/media/AppCard.vue';

import { ETypeCard } from '@/types/card';
import type { IFeaturedProducts } from '@/types/products';
import { FeaturedProducts } from '@/constants/product';

import Carousel from 'primevue/carousel';

onMounted(() => {
	products.value = FeaturedProducts.filter((item) => {
		return item.forSlider;
	}).slice(0, 4);
});

const products = ref<IFeaturedProducts[] | null>(null);

const productsIsMany = computed(() => {
	if (!products.value) return false;
	return products.value?.length > 1;
});

const compAutoPlayInterval = computed(() => {
	return productsIsMany.value ? 10000 : 0;
});

const isCircular = computed(() => {
	return productsIsMany.value;
});

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
			v-if="products"
			:value="products"
			:numVisible="1"
			:numScroll="1"
			:responsiveOptions="responsiveOptions"
			:autoplayInterval="compAutoPlayInterval"
			:circular="isCircular"
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
				<AppCard :type="ETypeCard.CarouselCard" :card="slotProps.data" />
				<!-- <div class="carousel-card">
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

					<AppButtonLink
						type="primary"
						:isLoading="false"
						:to="`/products/${slotProps.data.product_link}`"
						class="carousel-card__button"
					>
						<template #text>
							{{ $t('base.about') }}
						</template>
					</AppButtonLink>
				</div> -->
			</template>
		</Carousel>
		<div v-else class="loader-wrapper">
			<AppLoader />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.app-carousel {
	width: 100%;
	max-width: 430px;
	min-height: 688px;
	overflow: hidden;
}
.loader-wrapper {
	width: 100%;
	max-width: 430px;
	min-height: 688px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>

<style lang="scss"></style>
