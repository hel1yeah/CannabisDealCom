import type { TYPE_PRODUCT } from '@/types/products';
import type { IFeaturedProducts } from '@/types/products';

export function useFilterCategories() {
	function filterCategoriesByType(
		arr: IFeaturedProducts[],
		type: TYPE_PRODUCT
	) {
		return arr.filter((item) => item.typeProduct === type);
	}

	return {
		filterCategoriesByType,
	};
}
