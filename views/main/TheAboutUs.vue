<script setup lang="ts">
// import CannabisArtDecor from '@/public/images/about/cannabis-art-decorative.webp';
// import CannabisScenery from '@/public/images/about/cannabis-scenery-1.webp';

import AppButtonLink from '@/components/base/AppButtonLink.vue';

interface ICannabisInfo {
	title: string;
	sub_title?: string;
	desc: string;
	image: string;
	isButton?: boolean;
}
const arrInfo = [
	{
		title: 'about_us.buy_cannabis_anywhere',
		desc: 'about_us.experience_the_convenience',
		image: '/images/about/cannabis-scenery-1.webp',
		isButton: false,
	},
	{
		title: 'about_us.our_knowledgeable_team_stats',
		sub_title: 'about_us.expert_guidance_and_fast_cannabis_delivery',
		desc: 'about_us.our_team_is_here_to_help_you_find_the_perfect_strain',
		image: '/images/about/cannabis-art-decorative.webp',
		isButton: true,
	},
];
</script>

<template>
	<section class="container wrapper">
		<div
			v-for="(item, index) in arrInfo"
			:class="['item', { reverse: index % 2 }]"
			:key="index"
		>
			<div class="text">
				<div class="title">{{ $t(item.title) }}</div>
				<div v-if="item?.sub_title" class="sub-title">
					{{ $t(item.sub_title) }}
				</div>
				<div class="desc">
					{{ $t(item.desc) }}
				</div>
				<app-button-link
					controlClass="button"
					type="primary"
					:isLoading="false"
					:to="'/about-us'"
					class="button"
				>
					<template #text>
						{{ $t('header.about_us') }}
					</template>
				</app-button-link>
			</div>
			<NuxtImg
				class="image"
				:src="item.image"
				loading="lazy"
				alt="item.title"
				format="webp,png"
			/>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	row-gap: 5rem;
}
.item {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 5rem;

	&.reverse {
		flex-direction: row-reverse;
	}
}
.text {
	display: flex;
	flex-direction: column;
	gap: 1rem;
	flex: 1;
}
.title {
	font-size: 2rem;
	line-height: 44px;
	font-weight: 900;
}
.sub-title {
	color: var(--text-secondary-color);
	font-size: 1.2rem;
	font-weight: 700;
}
.desc {
	color: var(--text-secondary-color);
}
.button {
	max-width: 125px;
	padding: 0.5rem !important;
}
.image {
	flex: 1;
	width: 100%;
	max-width: 580px;
}
</style>
