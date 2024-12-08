<template>
	<the-first-section />
</template>

<script setup lang="ts">
import TheFirstSection from '@/views/main/TheFirstSection.vue';
// import MainPageSlider from '@/views/MainPageSlider.vue';

definePageMeta({
	layout: 'default', // Використовуємо шаблон з хедером і футером
});
</script>
