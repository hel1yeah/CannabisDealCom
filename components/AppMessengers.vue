<script setup lang="ts">
import { MESSENGERS_LINKS } from '@/constants/social_media';

interface IMessegers {
	link: string;
	icon: string;
	primeIcon?: string;
}

const arrMessengers: IMessegers[] = [
	{
		link: MESSENGERS_LINKS.LINE,
		icon: 'line',
	},
	{
		link: MESSENGERS_LINKS.WHATSAPP,
		icon: 'whatsapp',
		primeIcon: 'pi pi-whatsapp',
	},
	{
		link: MESSENGERS_LINKS.TELEGRAM,
		icon: 'telegram',
		primeIcon: 'pi pi-telegram',
	},
];
</script>

<template>
	<ul class="messengers">
		<li
			v-for="messenger in arrMessengers"
			:key="messenger.link"
			class="messengers__item"
		>
			<NuxtLink
				:class="['messengers__link', `messengers__link-${messenger.icon}`]"
				:to="messenger.link"
				target="_blank"
			>
				<i
					v-if="messenger?.primeIcon"
					:class="['messengers__icon', messenger.primeIcon]"
					style="font-size: 25px; color: var(--light-icons-color)"
				></i>
				<span v-else class="messengers__icon-line">
					{{ messenger.icon }}
				</span>
				<!-- <span class="messengers__icon-name">{{ messenger.icon }}</span> -->
			</NuxtLink>
		</li>
	</ul>
</template>

<style scoped lang="scss">
.messengers {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	width: max-content;
}
// .messengers__item {
// }
.messengers__link {
	width: 50px;
	height: 50px;
	display: grid;
	place-items: center;
	opacity: 0.9;
	border-radius: 50%;
	transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;

	&-line {
		background-color: #009100;
	}
	&-whatsapp {
		background-color: #01c101;
	}
	&-telegram {
		background-color: #0080ff;
	}

	&:hover {
		opacity: 1;
		transform: translateY(-5px);
	}
}
.messengers__icon-line {
	color: var(--light-icons-color);
}
// .messengers__icon-name {
// }
</style>
