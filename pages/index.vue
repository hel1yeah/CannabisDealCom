<template>
	<the-first-section />
	<the-why-choose />
</template>

<script setup lang="ts">
import TheFirstSection from '@/views/main/TheFirstSection.vue';
import TheWhyChoose from '@/views/main/TheWhyChoose.vue';
// import MainPageSlider from '@/views/MainPageSlider.vue';

definePageMeta({
	layout: 'default', // Використовуємо шаблон з хедером і футером
});
</script>
