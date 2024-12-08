<script setup lang="ts">
interface IProps {
	type: string;
	isLoading: boolean;
	to: string;
	controlClass?: string;
}
const { type = null, isLoading = false, to = '/' } = defineProps<IProps>();
</script>

<template>
	<NuxtLink :to="to" :class="['base-link', type, controlClass]">
		<slot name="icon"></slot>
		<slot name="text"></slot>
	</NuxtLink>
</template>

<style lang="scss" scoped>
.base-link {
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	padding: 1rem 1.3rem;
	border: none;
	border-radius: 3.125rem;
	background-color: var(--cannabis-primary-color);
	color: var(--text-color);
	font-weight: 600;
	transition: all 0.4s ease-in-out;
}
</style>
