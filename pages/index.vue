<template>
	<the-first-section />
	<the-why-choose />
	<the-about-us />
</template>

<script setup lang="ts">
import TheFirstSection from '@/views/main/TheFirstSection.vue';
import TheWhyChoose from '@/views/main/TheWhyChoose.vue';
import TheAboutUs from '@/views/main/TheAboutUs.vue';

definePageMeta({
	layout: 'default',
});
</script>
