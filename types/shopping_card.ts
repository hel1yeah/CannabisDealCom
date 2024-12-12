import type { TYPE_PRODUCT } from '@/types/products';

export interface IShoppingCardProducts {
	id: string;
	staticName: string;
	nameI18N: string;
	count?: number;
	weight?: number;
	price: number;
	main_image: string;
	product_link: string;
	typeProduct: TYPE_PRODUCT;
	counterProduct: number;
}
