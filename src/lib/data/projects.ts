/**
 * @file プロジェクト実績データ
 * @description 一覧・詳細ページ用のダミー実績データ（画像は Unsplash プレースホルダー）
 */

import type { Project } from '$lib/types/project';
import type { ProjectCategoryId } from '$lib/types/site';

/** カテゴリIDから表示ラベルを取得する */
export function getCategoryLabel(categoryId: ProjectCategoryId): string {
	const labels: Record<ProjectCategoryId, string> = {
		all: 'ALL',
		architecture: 'ARCHITECTURE',
		interior: 'INTERIOR',
		kitchen: 'KITCHEN',
		graphic: 'GRAPHIC',
		product: 'PRODUCT'
	};
	return labels[categoryId];
}

/** ダミー実績一覧 */
export const projects: Project[] = [
	{
		slug: 'house-north-terrace',
		name: 'House North Terrace',
		category: 'architecture',
		categoryLabel: 'ARCHITECTURE',
		location: '沖縄県',
		area: '120.5㎡ / 36.5坪',
		listImageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=80',
		concept:
			'中庭を中心に配置した平屋の住宅。風と光が通り抜ける開放的なリビングで、屋内と屋外の境界を曖昧にしました。',
		role: 'Planning / Design',
		credits: 'Sample A. / Sample B.',
		featured: true,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80', size: 'large' },
			{ type: 'portrait', leftImageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe41c20aa?w=800&q=80', rightImageUrl: null },
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80', size: 'small' }
		]
	},
	{
		slug: 'atelier-shima',
		name: 'Atelier Shima',
		category: 'interior',
		categoryLabel: 'INTERIOR',
		location: '東京都',
		area: '85.0㎡ / 25.7坪',
		listImageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1618221197215-72b461c0f2d0?w=1600&q=80',
		concept: '素材の質感を活かしたミニマルなインテリア。グレーとウォールナットで落ち着いた空間を構成しました。',
		role: 'Planning / Design',
		credits: 'Sample C. / Sample D.',
		featured: true,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80', size: 'small' },
			{ type: 'portrait', leftImageUrl: null, rightImageUrl: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=800&q=80' }
		]
	},
	{
		slug: 'kitchen-studio-m',
		name: 'Kitchen Studio M',
		category: 'kitchen',
		categoryLabel: 'KITCHEN',
		location: '神奈川県',
		area: '18.2㎡ / 5.5坪',
		listImageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&q=80',
		concept: '対面キッチンとダイニングを一体とした家族の中心空間。収納と動線を整理し、使いやすさを追求しました。',
		role: 'Planning / Design / Production',
		credits: 'Sample E.',
		featured: true,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80', size: 'large' }
		]
	},
	{
		slug: 'visual-residence-k',
		name: 'Visual Residence K',
		category: 'graphic',
		categoryLabel: 'GRAPHIC',
		location: '東京都',
		area: '—',
		listImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80',
		concept: '建築計画段階の3Dビジュアライゼーション。光の変化を複数パターンで提案し、施主様の意思決定を支援しました。',
		role: '3D Visualization',
		credits: 'Sample F.',
		featured: false,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80', size: 'large' }
		]
	},
	{
		slug: 'product-line-sora',
		name: 'Product Line SORA',
		category: 'product',
		categoryLabel: 'PRODUCT',
		location: '—',
		area: '—',
		listImageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1600&q=80',
		concept: '沖縄の素材を活かした家具シリーズの企画・デザイン。製造パートナーとのマッチングから販売資料まで一貫対応。',
		role: 'Planning / Design / Coordination',
		credits: 'Sample G. / Sample H.',
		featured: false,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80', size: 'small' }
		]
	},
	{
		slug: 'cafe-harbor',
		name: 'Café Harbor',
		category: 'interior',
		categoryLabel: 'INTERIOR',
		location: '沖縄県',
		area: '55.3㎡ / 16.8坪',
		listImageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600&q=80',
		concept: '海を望むカフェの店舗デザイン。自然光を最大限に取り入れた開放的な席配置と、地域素材の什器で統一感を演出。',
		role: 'Planning / Design',
		credits: 'Sample I.',
		featured: true,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80', size: 'large' },
			{ type: 'portrait', leftImageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', rightImageUrl: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80' }
		]
	},
	{
		slug: 'office-green-lobby',
		name: 'Office Green Lobby',
		category: 'interior',
		categoryLabel: 'INTERIOR',
		location: '東京都',
		area: '210.0㎡ / 63.5坪',
		listImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80',
		concept: 'グリーンをアクセントにしたオフィスロビー。来訪者の印象を高めるエントランス空間を設計しました。',
		role: 'Planning / Design',
		credits: 'Sample J.',
		featured: false,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80', size: 'small' }
		]
	},
	{
		slug: 'villa-south-wind',
		name: 'Villa South Wind',
		category: 'architecture',
		categoryLabel: 'ARCHITECTURE',
		location: '沖縄県',
		area: '185.0㎡ / 56.0坪',
		listImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
		heroImageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80',
		concept: '南国の風を感じるヴィラ。深い軒とラウンジテラスで、屋外生活を楽しめるプランを提案しました。',
		role: 'Planning / Design',
		credits: 'Sample K.',
		featured: false,
		gallery: [
			{ type: 'landscape', imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80', size: 'large' }
		]
	}
];

/**
 * スラッグからプロジェクトを取得する
 * @param slug - プロジェクトのURLスラッグ
 * @returns プロジェクト、見つからない場合は undefined
 */
export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

/**
 * カテゴリでプロジェクトをフィルタする
 * @param categoryId - カテゴリID（all の場合は全件）
 * @returns フィルタ後のプロジェクト配列
 */
export function getProjectsByCategory(categoryId: ProjectCategoryId): Project[] {
	if (categoryId === 'all') {
		return projects;
	}
	return projects.filter((project) => project.category === categoryId);
}

/** フィーチャー表示用プロジェクト */
export function getFeaturedProjects(): Project[] {
	return projects.filter((project) => project.featured);
}
