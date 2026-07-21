/**
 * @file アプリ内パス解決ユーティリティ
 * @description kit.paths.base（GitHub Pages のサブパス等）を考慮した URL を生成する
 */

import { base } from '$app/paths';

/**
 * アプリ内の絶対パスを、base を付与した公開 URL に変換する
 * @param path - `/` から始まるアプリ内パス（例: `/works`, `/`）
 * @returns base 付きパス（trailingSlash=always に合わせて末尾スラッシュ付き）
 * @throws path が `/` 始まりでない場合
 */
export function appPath(path: string): string {
	if (!path.startsWith('/')) {
		throw new Error(`appPath: path は "/" から始まる必要があります（受け取った値: "${path}"）`);
	}

	/** 末尾スラッシュを除いた正規化パス（ルートは `/` のまま） */
	const normalized = path === '/' ? '/' : path.replace(/\/+$/, '');

	if (normalized === '/') {
		return `${base}/`;
	}

	return `${base}${normalized}/`;
}

/**
 * 現在の URL パスから base を除き、アプリ内パスとして比較しやすい形にする
 * @param pathname - `page.url.pathname` など
 * @returns base 除去後のパス（末尾スラッシュなし。ルートは `/`）
 */
export function stripBasePath(pathname: string): string {
	let path = pathname;

	if (base && path.startsWith(base)) {
		path = path.slice(base.length) || '/';
	}

	if (path !== '/' && path.endsWith('/')) {
		path = path.slice(0, -1);
	}

	return path || '/';
}
