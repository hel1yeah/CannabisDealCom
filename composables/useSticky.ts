import { ref, onMounted, onUnmounted } from 'vue';
export function useSticky(targetRef: Ref<HTMLElement | null>) {
	const isSticky = ref(false);
	let observer: IntersectionObserver | null = null;
	const options = {
		rootMargin: '0px',
		threshold: 0,
	};
	function useObserver(
		entries: IntersectionObserverEntry[],
		observer: IntersectionObserver
	) {
		if (process.client && 'IntersectionObserver' in window && targetRef.value) {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) {
					isSticky.value = true;
				} else {
					isSticky.value = false;
				}
			});
		}
	}
	onMounted(() => {
		observer = new IntersectionObserver(useObserver, options);
		if (process.client && 'IntersectionObserver' in window && targetRef.value)
			observer.observe(targetRef.value);
	});
	onUnmounted(() => {
		if (targetRef.value && observer) {
			observer.unobserve(targetRef.value);
		}
	});

	return { isSticky };
}
