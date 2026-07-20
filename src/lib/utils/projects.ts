/**
 * @file プロジェクト関連ユーティリティ
 * @description カテゴリパスの解決など
 */

import { categoryFilters } from '$lib/data/site';
import type { ProjectCategoryId } from '$lib/types/site';

/**
 * URLパスからカテゴリIDを解決する
 * @param pathSegment - ルートのカテゴリセグメント（undefined の場合は all）
 * @returns カテゴリID
 */
export function resolveCategoryFromPath(pathSegment: string | undefined): ProjectCategoryId {
	if (!pathSegment) {
		return 'all';
	}
	const found = categoryFilters.find((filter) => filter.id === pathSegment);
	return found?.id ?? 'all';
}
