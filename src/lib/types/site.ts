/**
 * @file サイト共通の型定義
 * @description ナビゲーション・会社情報などのデータ構造を定義する
 */

/** プロジェクトカテゴリの識別子 */
export type ProjectCategoryId =
	| 'all'
	| 'architecture'
	| 'interior'
	| 'kitchen'
	| 'graphic'
	| 'product';

/** カテゴリフィルター項目 */
export interface CategoryFilter {
	/** 表示ラベル（英語） */
	label: string;
	/** ルートパス */
	href: string;
	/** カテゴリID */
	id: ProjectCategoryId;
}

/** ナビゲーション項目 */
export interface NavItem {
	/** 表示ラベル */
	label: string;
	/** 英語ラベル */
	labelEn: string;
	/** リンク先 */
	href: string;
}

/** 会社情報の行 */
export interface CompanyInfoRow {
	/** 項目名 */
	title: string;
	/** 内容（HTML可） */
	content: string;
}

/** サービス紹介セクション */
export interface ServiceSection {
	/** 識別子 */
	id: string;
	/** 英語タイトル */
	titleEn: string;
	/** 日本語サブタイトル */
	subtitle: string;
	/** 説明文 */
	description: string;
	/** 背景画像URL */
	imageUrl: string;
	/** リンク先 */
	href: string;
}
