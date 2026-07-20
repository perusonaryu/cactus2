/**
 * @file ページ遷移アニメーションの共有状態
 * @description LARGO 風のローディングオーバーレイ表示を全コンポーネントで参照する
 */

/** 遷移フェーズ */
export type PageTransitionPhase = 'idle' | 'loadingIn' | 'loadingOut';

/** 遷移状態 */
export interface PageTransitionState {
	/** 現在のフェーズ */
	phase: PageTransitionPhase;
	/** ページ本体を表示するか */
	showContent: boolean;
}

/** 共有ステート */
export const pageTransitionState = $state<PageTransitionState>({
	phase: 'idle',
	showContent: true
});

/**
 * ページ遷移の開始処理
 * @returns void
 */
export function startPageTransition(): void {
	pageTransitionState.phase = 'loadingIn';
	pageTransitionState.showContent = false;
}

/**
 * ページ遷移の終了処理（コンテンツ表示開始）
 * @returns void
 */
export function finishPageTransition(): void {
	pageTransitionState.phase = 'loadingOut';
	pageTransitionState.showContent = true;
}

/**
 * オーバーレイを完全に非表示にする
 * @returns void
 */
export function resetPageTransition(): void {
	pageTransitionState.phase = 'idle';
	pageTransitionState.showContent = true;
}
