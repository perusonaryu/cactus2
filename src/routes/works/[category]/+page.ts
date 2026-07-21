/**
 * @file カテゴリ別実績一覧のエントリ生成
 * @description 静的ビルド時に各カテゴリページをプリレンダする
 */

import { categoryFilters } from '$lib/data/site';
import type { EntryGenerator } from './$types';

/**
 * プリレンダ対象のカテゴリパスを返す
 * @returns カテゴリIDのエントリ一覧（ALL は /works/ 側で扱うため除外）
 */
export const entries: EntryGenerator = () => {
	return categoryFilters
		.filter((filter) => filter.id !== 'all')
		.map((filter) => ({ category: filter.id }));
};
