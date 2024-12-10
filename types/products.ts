export type TYPE_PRODUCT = 'cannabis' | 'accessories';

export interface IFeaturedProducts {
	id: string;
	forSlider: boolean;
	typeProduct: TYPE_PRODUCT;
	staticName: string;
	nameI18N: string;
	tasteI18N?: string;
	descI18N: string[];
	main_image: string;
	pluses?: string[];
	product_link: string;
	price: { max: number; min: number; one?: number };
	select: {
		count: number;
		price: number;
	}[];
	rating: 5 | 4 | 3 | 2 | 1;
}
