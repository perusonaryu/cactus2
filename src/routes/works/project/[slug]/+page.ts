/**
 * @file 実績詳細の load 関数
 * @description スラッグに応じたプロジェクトデータを返す
 */
import { error } from '@sveltejs/kit';
import { getProjectBySlug } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const project = getProjectBySlug(params.slug);
	if (!project) {
		error(404, `getProjectBySlug: スラッグ "${params.slug}" のプロジェクトが見つかりません`);
	}
	return { project };
};
