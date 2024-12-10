export interface IFeaturedProducts {
	id: string;
	forSlider: boolean;
	staticName: string;
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
	rating: 5 | 4 | 3 | 2 | 1;
}
