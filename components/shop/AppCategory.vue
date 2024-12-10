<script setup lang="ts">
const categoryArr = [
	{
		local: 'base.cannabis',
		link: '/shop/category/cannabis',
		img: '/images/category/category-cannabis.webp',
	},
	{
		local: 'base.accessories',
		link: '/shop/category/accessories',
		img: '/images/category/category-accessories.webp',
	},
];
</script>
<template>
	<div class="shop__category">
		<div
			class="card__category-item card__shadow"
			v-for="item in categoryArr"
			:key="item.local"
		>
			<NuxtLink class="card__category-link" :to="item.link">
				<NuxtImg
					class="card__category-img"
					:src="item.img"
					loading="lazy"
					:alt="$t(item.local)"
				/>
				<div class="card__category-name">
					{{ $t(item.local) }}
				</div>
			</NuxtLink>
		</div>
	</div>
</template>

<style scoped lang="scss">
.shop__category {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
}
.card__category-item {
	border-radius: 20px;
	overflow: hidden;
	width: 100%;
	max-width: 250px;
	background-color: var(--background-color);
}
.card__category-link {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.card__category-img {
	width: 100%;
	max-width: 250px;
	height: 200px;
	object-fit: cover;
}
.card__category-name {
	text-align: center;
	padding: 1rem 0;
	font-size: 1.2rem;
	line-height: 1.5rem;
	color: black;
}
</style>
