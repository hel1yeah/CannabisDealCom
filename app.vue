<script lang="ts" setup>
import ScrollTop from 'primevue/scrolltop';
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
	<ScrollTop class="scrolltop" />
</template>

<style lang="scss">
.main-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-height: 100vh;
}

.header {
	flex: 0 0 auto;
}

.main {
	flex: 1 1 auto;
}

.footer {
	flex: 0 0 auto;
}

.scrolltop {
	background-color: var(--cannabis-primary-color);
}
</style>
