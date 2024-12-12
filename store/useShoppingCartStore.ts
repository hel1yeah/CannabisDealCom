import { defineStore } from 'pinia';
import type { IShoppingCardProducts } from '@/types/shopping_card';
import { ETypeProduct } from '@/types/products';

export const useShoppingCartStore = defineStore('shopping_cart', () => {
	const userList = ref<IShoppingCardProducts[]>([]);
	const isLoading = ref<boolean>(false);

	const getUserList = computed(() => userList.value);

	function addItemInList(item: IShoppingCardProducts) {
		isLoading.value = true;
		let existingItem;
		if (item.typeProduct === ETypeProduct.Cannabis)
			existingItem = userList.value.find(
				(product) => product.id === item.id && product.weight === item.weight
			);
		else
			existingItem = userList.value.find(
				(product) =>
					product.id === item.id &&
					product.weight === item.weight &&
					product.price === item.price
			);

		if (existingItem) existingItem.counterProduct += item.counterProduct;
		else userList.value.push({ ...item });

		isLoading.value = false;
	}

	function removeItemFromList(itemId: string) {
		userList.value = userList.value.filter((product) => product.id !== itemId);
	}

	function increaseItemCount(itemId: string) {
		const item = userList.value.find((product) => product.id === itemId);
		if (item) item.counterProduct += 1;
	}

	function decreaseItemCount(itemId: string) {
		const item = userList.value.find((product) => product.id === itemId);
		if (item && item.counterProduct > 1) item.counterProduct -= 1;
		else removeItemFromList(itemId);
	}

	function clearCart() {
		userList.value = [];
	}

	const totalAmount = computed(() =>
		userList.value.reduce(
			(total, product) => total + product.price * product.counterProduct,
			0
		)
	);

	return {
		getUserList,
		addItemInList,
		removeItemFromList,
		increaseItemCount,
		decreaseItemCount,
		clearCart,
		totalAmount,
		isLoading,
	};
});
