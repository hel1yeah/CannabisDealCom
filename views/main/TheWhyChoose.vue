<script setup lang="ts">
import IconDollar from '@/public/images/icons/icon-dollar.svg';
import IconCreditCard from '@/public/images/icons/icon-credit-card.svg';
import IconTop from '@/public/images/icons/icon-top.svg';
import IconPayment from '@/public/images/icons/icon-payment.svg';
import IconDelivery from '@/public/images/icons/icon-delivery.svg';
import IconGuide from '@/public/images/icons/icon-guide.svg';
import IconWorks from '@/public/images/icons/icon-works.svg';

const componentsObject = [
	IconTop,
	IconDollar,
	IconDelivery,
	IconCreditCard,
	IconGuide,
	IconWorks,
	IconPayment,
];
</script>

<template>
	<section class="why-choose container">
		<i18n-t keypath="why_choose.header" tag="h2" class="why-choose__title">
			<template #name>
				<span class="gold-text">{{ $t('base.cannabis_deal') }}</span>
			</template>
		</i18n-t>
		<p class="why-choose__desc">
			{{ $t('why_choose.desc') }}
		</p>
		<ul class="why-choose__list">
			<li
				v-for="(item, index) in componentsObject"
				:key="index"
				class="why-choose__list-item"
			>
				<div class="why-choose__list-decor">
					<component :is="item" class="why-choose__list-decor-img" />
				</div>
				<div class="why-choose__list-title">
					{{ $t(`why_choose.var${index}`) }}
				</div>
				<div class="why-choose__list-desc">
					{{ $t(`why_choose.desc_var${index}`) }}
				</div>
			</li>
		</ul>
	</section>
</template>

<style scoped lang="scss">
.why-choose {
	margin-top: 100px;
	margin-bottom: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1.2rem;
}

.why-choose__title {
	font-weight: 900;
	max-width: 500px;
	text-align: center;
}

.why-choose__desc {
	max-width: 500px;
	text-align: center;
}
.why-choose__list {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
}
.why-choose__list-item {
	width: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	text-align: center;
}

.why-choose__list-decor {
	width: 100px;
	height: 100px;
	background-color: var(--cannabis-secondary-color);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.why-choose__list-decor-img {
	width: 50px;
	height: 50px;
	fill: var(--cannabis-green-color);
}

.why-choose__list-title {
	font-weight: 900;
	font-size: 1.2rem;
}
.why-choose__list-desc {
	font-weight: 600;
	color: var(--text-secondary-color);
}
</style>
