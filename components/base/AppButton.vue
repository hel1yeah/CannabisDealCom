<script setup lang="ts">
interface IProps {
	type: string;
	isLoading?: boolean;
	isDisabled?: boolean;
}
const { type = null, isLoading = false } = defineProps<IProps>();
</script>

<template>
	<button :class="['base-button', type]" :disabled="isDisabled">
		<slot name="icon"></slot>
		<slot name="text"></slot>
	</button>
</template>

<style lang="scss" scoped>
.base-button {
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
	transition: opacity 0.4s ease-in-out;
	opacity: 0.8;

	&:hover {
		opacity: 1;
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
}
</style>
