/**
 * @file ページ遷移ナビゲーションユーティリティ
 * @description SvelteKit のナビゲーションと LARGO 風アニメーションを連携する
 */

import { afterNavigate, beforeNavigate } from '$app/navigation';
import {
	finishPageTransition,
	resetPageTransition,
	startPageTransition
} from '$lib/state/pageTransition.svelte';
import { stripBasePath } from '$lib/utils/appPath';

/** カバーが画面を覆うまでの時間（ms）— LARGO のカバーイン相当 */
const COVER_IN_MS = 900;

/** カバーが退場するまでの時間（ms） */
const COVER_OUT_MS = 750;

/** 初回ロードかどうか */
let isFirstNavigation = true;

/** 次の afterNavigate で遷移アニメーションをスキップするか */
let skipNextTransition = false;

/**
 * 実績一覧のフィルター用パスかどうかを判定する
 * @description `/works` および `/works/[category]` は対象。詳細 `/works/project/...` は対象外
 * @param pathname - URL の pathname（base 付きでも可）
 * @returns フィルター一覧ページなら true
 */
export function isWorksListPath(pathname: string): boolean {
	const path = stripBasePath(pathname);

	if (path === '/works') {
		return true;
	}

	if (path.startsWith('/works/project')) {
		return false;
	}

	return path.startsWith('/works/');
}

/**
 * 実績フィルター同士の遷移かどうかを判定する
 * @param fromPathname - 遷移元 pathname
 * @param toPathname - 遷移先 pathname
 * @returns フィルター切替のみの遷移なら true
 */
export function isWorksFilterNavigation(fromPathname: string, toPathname: string): boolean {
	return isWorksListPath(fromPathname) && isWorksListPath(toPathname);
}

/**
 * ページ本体の `{#key}` 用キーを返す
 * @description フィルター切替では同じキーを返し、page-main の再マウント（フェード）を防ぐ
 * @param pathname - URL の pathname
 * @returns キー文字列
 */
export function getPageTransitionKey(pathname: string): string {
	if (isWorksListPath(pathname)) {
		return 'works-list';
	}

	return stripBasePath(pathname);
}

/**
 * ページ遷移アニメーションを登録する
 * @description ルートレイアウトの onMount 相当で一度だけ呼び出す
 * @returns void
 */
export function registerPageTransitionNavigation(): void {
	beforeNavigate((navigation) => {
		if (!navigation.to || !navigation.from) {
			return;
		}

		const fromPath = navigation.from.url.pathname;
		const toPath = navigation.to.url.pathname;

		if (fromPath === toPath) {
			return;
		}

		/** 実績カテゴリフィルターの切替は画面遷移アニメーションを入れない */
		if (isWorksFilterNavigation(fromPath, toPath)) {
			skipNextTransition = true;
			return;
		}

		skipNextTransition = false;
		isFirstNavigation = false;
		startPageTransition();
	});

	afterNavigate(() => {
		if (isFirstNavigation) {
			resetPageTransition();
			return;
		}

		if (skipNextTransition) {
			skipNextTransition = false;
			resetPageTransition();
			return;
		}

		window.setTimeout(() => {
			finishPageTransition();

			window.setTimeout(() => {
				resetPageTransition();
			}, COVER_OUT_MS);
		}, COVER_IN_MS);
	});
}
