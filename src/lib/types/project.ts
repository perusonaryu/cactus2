/**
 * @file プロジェクト（実績）の型定義
 * @description 一覧・詳細ページで利用するプロジェクトデータ構造
 */

import type { ProjectCategoryId } from './site';

/** ギャラリー画像（横長） */
export interface GalleryLandscape {
	type: 'landscape';
	/** 画像URL */
	imageUrl: string;
	/** サイズ */
	size: 'small' | 'large';
}

/** ギャラリー画像（縦長ペア） */
export interface GalleryPortrait {
	type: 'portrait';
	/** 左画像URL */
	leftImageUrl: string | null;
	/** 右画像URL */
	rightImageUrl: string | null;
}

/** ギャラリー画像のユニオン型 */
export type GalleryImage = GalleryLandscape | GalleryPortrait;

/** プロジェクト実績 */
export interface Project {
	/** URLスラッグ */
	slug: string;
	/** プロジェクト名 */
	name: string;
	/** カテゴリID */
	category: ProjectCategoryId;
	/** カテゴリ表示名 */
	categoryLabel: string;
	/** 所在地 */
	location: string;
	/** 面積 */
	area: string;
	/** 一覧用サムネイル */
	listImageUrl: string;
	/** PC用メインビジュアル */
	heroImageUrl: string;
	/** コンセプト文 */
	concept: string;
	/** 担当範囲 */
	role: string;
	/** クレジット */
	credits: string;
	/** ギャラリー画像 */
	gallery: GalleryImage[];
	/** トップのフィーチャー表示 */
	featured: boolean;
}
