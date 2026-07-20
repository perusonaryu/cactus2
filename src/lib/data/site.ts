/**
 * @file サイト共通データ
 * @description ナビゲーション・会社情報などのダミーコンテンツ
 */

import type { CategoryFilter, CompanyInfoRow, NavItem, ServiceSection } from '$lib/types/site';

/** サイト名 */
export const siteName = 'CACTUS design';

/** サイトのキャッチコピー */
export const siteTagline = '建築・インテリア・キッチン・グラフィック・プロダクトのトータルデザイン';

/** メタ情報用の説明文 */
export const defaultDescription =
	'ジャンルを問わずシームレスにデザインを請け負うデザインスタジオ。建築からグラフィックまで一貫したブランド構築を支援します。';

/** グローバルナビゲーション */
export const mainNavItems: NavItem[] = [
	{ label: '建築', labelEn: 'ARCHITECTURE', href: '/works/architecture' },
	{ label: 'インテリア', labelEn: 'INTERIOR', href: '/works/interior' },
	{ label: 'キッチン', labelEn: 'KITCHEN', href: '/works/kitchen' },
	{ label: 'ビジュアライゼーション', labelEn: 'GRAPHIC', href: '/works/graphic' },
	{ label: 'プロダクト', labelEn: 'PRODUCT', href: '/works/product' },
	{ label: '哲学', labelEn: 'PHILOSOPHY', href: '/philosophy' },
	{ label: 'お問い合わせ', labelEn: 'CONTACT', href: '/contact' }
];

/** 実績カテゴリフィルター */
export const categoryFilters: CategoryFilter[] = [
	{ label: 'ALL', href: '/works', id: 'all' },
	{ label: 'ARCHITECTURE', href: '/works/architecture', id: 'architecture' },
	{ label: 'INTERIOR', href: '/works/interior', id: 'interior' },
	{ label: 'KITCHEN', href: '/works/kitchen', id: 'kitchen' },
	{ label: 'GRAPHIC', href: '/works/graphic', id: 'graphic' },
	{ label: 'PRODUCT', href: '/works/product', id: 'product' }
];

/** トップのサービスセクション */
export const serviceSections: ServiceSection[] = [
	{
		id: 'architecture',
		titleEn: 'ARCHITECTURE',
		subtitle: '理想の暮らしの実現',
		description:
			'屋内と屋外を一体的に計画し、自然環境との繋がりを取り戻す。快適で幸せな暮らしをご提供します。',
		imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
		href: '/works/architecture'
	},
	{
		id: 'interior',
		titleEn: 'INTERIOR',
		subtitle: '快適で魅力的な環境の実現',
		description: 'ニーズ・好み・予算を考慮し、3Dモデリングや図面でデザイン案を視覚的に提案します。',
		imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
		href: '/works/interior'
	},
	{
		id: 'kitchen',
		titleEn: 'KITCHEN',
		subtitle: 'こだわりのキッチンの実現',
		description:
			'家族や友人が集い絆を深める空間として、機能性とデザイン性を両立したキッチンを設計します。',
		imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
		href: '/works/kitchen'
	},
	{
		id: 'graphic',
		titleEn: 'VISUALIZATION',
		subtitle: 'リアリズムのあるビジュアライゼーション',
		description: '3Dモデルを活用し、計画の初期段階からリアルな完成イメージを共有できます。',
		imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80',
		href: '/works/graphic'
	},
	{
		id: 'product',
		titleEn: 'PRODUCT',
		subtitle: '企画から実行まで',
		description: '創造的なビジョンを現実の成果に変えるための企画から実行までをサポートします。',
		imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
		href: '/works/product'
	}
];

/** 哲学ページのセクション */
export const philosophySections = [
	{
		title: 'デザインとは何か？',
		body: 'デザインとはセンスが良いというだけではありません。最終的な目的はお客様の利益に繋げることです。お客様からの情報を整理し、その過程で価値の本質を見極め、明快に表現することでお客様の利益に繋げます。'
	},
	{
		title: 'デザインの優位性',
		body: '同業他社との技術力やサービスの質に差が生じにくい時代、デザイン力の差がブランドの認知度や売上に直結します。今まさにデザインの質が問われているのです。'
	},
	{
		title: 'CACTUS design',
		body: '建築士、デザイナー、カメラマン、プログラマーを擁し、名刺からWEB・店舗・建築に至るまで一貫してデザインすることで統一されたイメージを構築します。'
	}
];

/** 会社情報（ダミー） */
export const companyInfoRows: CompanyInfoRow[] = [
	{ title: '会社名', content: 'CACTUS design（ダミー）' },
	{ title: '代表', content: 'サンプル 太郎 / デザイナー・ディレクター' },
	{
		title: '本社',
		content:
			'〒900-0000<br />沖縄県サンプル市サンプル町1-2-3<br />TEL: 090-0000-0000<br />MAIL: info@example.com'
	},
	{
		title: '東京事務所',
		content: '〒100-0000<br />東京都サンプル区サンプル1-2-3 101'
	},
	{
		title: '事業内容',
		content:
			'建築デザイン、インテリアデザイン、キッチンデザイン、3Dビジュアライゼーション、グラフィックデザイン、プロダクトデザイン'
	}
];

/** 採用情報（ダミー） */
export const careerJobs = [
	{
		open: true,
		titleJa: 'インテリアデザイナー',
		titleEn: 'Interior Designer',
		description:
			'住宅・店舗のインテリアデザイン業務。3Dモデリング、プレゼン資料作成、現場調整を担当していただきます。'
	},
	{
		open: false,
		titleJa: '建築設計',
		titleEn: 'Architect',
		description: '現在募集しておりません。'
	}
];
