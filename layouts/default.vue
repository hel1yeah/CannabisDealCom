<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<template>
	<div class="main-wrapper">
		<the-header class="header container" />
		<main class="main">
			<NuxtPage />
		</main>
		<the-footer class="footer" />
	</div>
</template>

<style scoped lang="scss"></style>
