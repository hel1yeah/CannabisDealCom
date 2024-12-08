<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const arrList = [
	{
		desc: t('header.home'),
		link: '/',
	},
	{
		desc: t('header.about_us'),
		link: '/about-us',
	},
];
</script>

<template>
	<header class="header">
		<NuxtLink class="header__logo-link" to="/about-us">
			<NuxtImg
				class="header__logo"
				src="/images/top-logo-txt.webp"
				loading="lazy"
				alt="top-logo-txt"
			/>
		</NuxtLink>

		<nav class="header__nav">
			<ul class="header__menu">
				<li v-for="item in arrList" :key="item.link" class="header__menu-item">
					<NuxtLink :to="item.link">{{ item.desc }}</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
.header {
	z-index: 2;
	position: relative;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 3.125rem;
	padding: 0.8rem 1rem;
	margin-top: 1rem;
	background-color: var(--cannabis-secondary-color);
	font-weight: 800;
	// color: var(--cannabis-primary-color);
}
.header__logo-link {
}
.header__logo {
	max-width: 300px;
	min-width: 100px;
}
.header__nav {
}
.header__menu {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	justify-content: center;
}
.header__menu-item {
	& a {
		color: var(--text-secondary-color);
	}
}
</style>
