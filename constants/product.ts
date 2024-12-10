import type { IFeaturedProducts } from '@/types/products';
export const FeaturedProducts: IFeaturedProducts[] = [
	{
		id: 'green_house',
		forSlider: true,
		typeProduct: 'cannabis',
		staticName: 'Green House',
		nameI18N: 'green_house',
		tasteI18N: 'green_house_taste',
		descI18N: ['green_house_desc', 'green_house_desc_2', 'green_house_desc_3'],
		main_image: 'green-house.jpeg',
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
		rating: 5,
	},
	{
		id: 'mac-1',
		forSlider: true,
		typeProduct: 'cannabis',
		staticName: 'Mac 1',
		nameI18N: 'mac_1',
		tasteI18N: 'mac_1_taste',
		descI18N: ['mac_1_desc', 'mac_1_desc_2', 'mac_1_desc_3', 'mac_1_desc_4'],
		main_image: 'mac-1.jpeg',
		pluses: ['beautiful_nuggets', 'high_in_thc', 'toxic_sour_earthy_taste'],
		product_link: 'mac-1',
		price: {
			max: 3500,
			min: 220,
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
		rating: 4,
	},
	{
		id: 'grinder_60mm',
		forSlider: false,
		typeProduct: 'accessories',
		staticName: 'Grinder 60mm',
		nameI18N: 'grinder_60mm',
		tasteI18N: 'mac_1_taste',
		descI18N: ['grinder_60mm_desc_1', 'grinder_60mm_desc_2'],
		main_image: 'grinder-60mm.jpeg',
		// pluses: ['beautiful_nuggets', 'high_in_thc', 'toxic_sour_earthy_taste'],
		product_link: 'grinder-60mm',
		price: {
			max: 3500,
			min: 220,
			one: 15,
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
		rating: 5,
	},
	{
		id: 'smoking_papers',
		forSlider: false,
		typeProduct: 'accessories',
		staticName: 'Smoking Papers',
		nameI18N: 'smoking_papers',
		// tasteI18N: 'mac_1_taste',
		descI18N: [
			'smoking_papers_desc_1',
			'smoking_papers_desc_2',
			'smoking_papers_desc_3',
		],
		main_image: 'papers-front-side.jpeg',
		pluses: [
			'premium_quality_materials',
			'consistent_even_burn',
			'rolling_easy',
			'perfect_thickness',
			'reliable_performance',
			'unbeatable_prices',
			'custom_branded_quality',
		],
		product_link: 'smoking-papers',
		price: {
			max: 3500,
			min: 220,
			one: 15,
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
		rating: 5,
	},
];
