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

/** カバーが画面を覆うまでの時間（ms）— LARGO のカバーイン相当 */
const COVER_IN_MS = 900;

/** カバーが退場するまでの時間（ms） */
const COVER_OUT_MS = 750;

/** 初回ロードかどうか */
let isFirstNavigation = true;

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

		isFirstNavigation = false;
		startPageTransition();
	});

	afterNavigate(() => {
		if (isFirstNavigation) {
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
