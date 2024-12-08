<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
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
	flex: 1 1 100vh;
	max-height: 1200px;
}

.footer {
	flex: 0 0 auto;
}
</style>
