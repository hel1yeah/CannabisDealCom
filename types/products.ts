export interface IFeaturedProducts {
	id: string;
	nameI18N: string;
	tasteI18N: string;
	descI18N: string[];
	image: string;
	pluses: string[];
	product_link: string;
	price: { max: number; min: number };
	select: {
		count: number;
		price: number;
	}[];
}
