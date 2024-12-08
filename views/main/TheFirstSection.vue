<script setup lang="ts">
import AppButton from '@/components/base/AppButton.vue';
import AppCarousel from '@/components/media/AppCarousel.vue';
import AppMessengers from '~/components/AppMessengers.vue';
</script>

<template>
	<section class="first-section">
		<NuxtPicture
			class="first-section__img-leaf-1"
			src="/images/decor/top-leaf1-1.webp"
			loading="lazy"
			alt="top-leaf1-1"
			format="webp,png"
		/>
		<NuxtPicture
			class="first-section__img-leaf-2"
			src="/images/decor/top-leaf2-22.webp"
			loading="lazy"
			alt="top-leaf1-1"
			format="webp,png"
		/>
		<div class="container first-section__inner">
			<div class="first-section__content-left">
				<h1 class="first-section__title">
					<span class="gold-text">{{ $t('base.cannabis_deal') }}</span>
					<br />
					{{ $t('base.buy_cannabis_in_thailand') }}
				</h1>

				<h2 class="first-section__subtitle">
					{{ $t('base.order_cannabis') }}
				</h2>

				<p class="first-section__desc">
					{{ $t('base.looking_to_buy_cannabis') }}
				</p>

				<app-button
					type="primary"
					:isLoading="false"
					class="first-section__btn"
				>
					<template #text>
						{{ $t('buttons.buy_cannabis_now') }}
					</template>
				</app-button>

				<p class="first-section__desc">
					<span class="bold-text">
						{{ $t('base.need_assistance') }}
					</span>
					{{ $t('base.contact_us_daily') }}
				</p>

				<app-messengers />
			</div>
			<div class="first-section__content-right">
				<app-carousel />
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.first-section {
	height: 100%;
	max-height: 1200px;
	z-index: 1;
	margin: -100px 0 0 0;
	padding: 115px 0 0;
	background: linear-gradient(
		to right,
		white 0%,
		white 50%,
		#041f1b 50%,
		#041f1b 100%
	);
	background-color: #041f1b;
	position: relative;
}
.first-section__inner {
	display: flex;
	align-items: center;
}
.first-section__content-left {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	flex: 1;
}
.first-section__content-left,
.first-section__content-right {
	padding: 40px 0;
	position: relative;
}

.first-section__title {
	max-width: 25rem;
}
.first-section__subtitle {
	font-size: 24px;
	color: var(--text-secondary-color);
}
.first-section__desc {
	color: var(--text-secondary-color);
	max-width: 450px;
}

.first-section__btn {
	max-width: 180px;
}

.first-section__content-right {
	flex: 1;
	display: grid;
	place-items: center;
}

.first-section__img-leaf-1 {
	position: absolute;
	top: 0;
	left: 50%;
	max-width: 10rem;
}

.first-section__img-leaf-2 {
	position: absolute;
	bottom: -5px;
	right: 31rem;
	max-width: 30rem;
}
</style>
