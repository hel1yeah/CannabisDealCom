<script setup lang="ts">
import { ref, onMounted } from 'vue';

import AppCard from '~/components/media/AppCard.vue';
import { ETypeCard } from '@/types/card';
import type { IFeaturedProducts } from '@/types/products';
import { FeaturedProducts } from '@/constants/product';

const products = ref<IFeaturedProducts[] | null>(null);
onMounted(() => {
	products.value = FeaturedProducts;
});
</script>

<template>
	<div class="container shop">
		<h1 class="shop__title">
			{{ $t('header.shop') }}
		</h1>

		<div class="shop__cards">
			<AppCard
				:type="ETypeCard.ShopCard"
				isNeedShadow
				v-for="item in products"
				:key="item.id"
				:card="item"
			/>
		</div>
		<!-- <AppShopCard /> -->
	</div>
</template>

<style scoped lang="scss">
.shop {
}
.shop__title {
}
.shop__cards {
	display: grid;
	grid-template-columns: (repeat(3, minmax(250px, 1fr)));
	gap: 2rem;
}
</style>
