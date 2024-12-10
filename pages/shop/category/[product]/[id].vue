<script setup lang="ts">
definePageMeta({
	layout: 'default',
});

import { useRoute } from 'vue-router';

const route = useRoute();
const productId = route.params.id;
</script>

<template>
	<div>
		<h1>Товар #{{ productId }}</h1>
		<p>Детальна інформація про товар {{ productId }}.</p>
	</div>
</template>

<style scoped lang="scss"></style>
