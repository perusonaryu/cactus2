/**
 * @file SvelteKit 設定
 * @description 静的 HTML 出力（adapter-static）。BASE_PATH で GitHub Pages のサブパスにも対応
 */
import adapter from '@sveltejs/adapter-static';

/**
 * 公開時のベースパス
 * @description 空文字 = ドメイン直下（レンタルサーバー等）。GitHub Pages では `/リポジトリ名`
 */
const basePath = process.env.BASE_PATH ?? '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		paths: {
			base: basePath
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
