import type { IFeaturedProducts } from '@/types/products';
export const FeaturedProducts: IFeaturedProducts[] = [
	{
		id: 'green_house',
		nameI18N: 'green_house',
		tasteI18N: 'green_house_taste',
		descI18N: ['green_house_desc', 'green_house_desc_2', 'green_house_desc_3'],
		image: 'green-house.jpeg',
		pluses: [
			'sativa_dominant_strain',
			'medium_low_in_thc',
			'fruity_citrus_taste',
		],
		product_link: 'green-house',
		price: {
			max: 1000,
			min: 80,
		},
		select: [
			{
				count: 1,
				price: 80,
			},
			{
				count: 5,
				price: 350,
			},
			{
				count: 10,
				price: 600,
			},
			{
				count: 20,
				price: 1000,
			},
		],
	},
	{
		id: 'mac-1',
		nameI18N: 'mac_1',
		tasteI18N: 'mac_1_taste',
		descI18N: ['mac_1_desc', 'mac_1_desc_2', 'mac_1_desc_3', 'mac_1_desc_4'],
		image: 'mac-1.jpeg',
		pluses: ['beautiful_nuggets', 'high_in_thc', 'toxic_sour_earthy_taste'],
		product_link: 'mac-1',
		price: {
			max: 220,
			min: 3500,
		},
		select: [
			{
				count: 1,
				price: 220,
			},
			{
				count: 5,
				price: 1050,
			},
			{
				count: 10,
				price: 2000,
			},
			{
				count: 20,
				price: 3500,
			},
		],
	},
];
