/**
 * @file 実績詳細の load 関数とエントリ生成
 * @description スラッグに応じたプロジェクトデータを返し、静的ビルド時に全詳細ページをプリレンダする
 */
import { error } from '@sveltejs/kit';
import { getProjectBySlug, projects } from '$lib/data/projects';
import type { EntryGenerator, PageLoad } from './$types';

/**
 * プリレンダ対象のプロジェクト詳細パスを返す
 * @returns スラッグのエントリ一覧
 */
export const entries: EntryGenerator = () => {
	return projects.map((project) => ({ slug: project.slug }));
};

/**
 * スラッグからプロジェクトデータを読み込む
 * @param params - ルートパラメータ（slug）
 * @returns プロジェクトデータ
 */
export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		error(404, `getProjectBySlug: スラッグ "${params.slug}" のプロジェクトが見つかりません`);
	}
	return { project };
};
