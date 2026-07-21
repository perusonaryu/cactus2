<script lang="ts">
	/**
	 * @component ButtonPrimary
	 * @description LARGO 風のテキストスライド＋背景反転ホバーを持つボタン／リンク
	 */
	import type { Snippet } from 'svelte';
	import { appPath } from '$lib/utils/appPath';

	interface Props {
		/** ボタンラベル */
		label: string;
		/** リンク先（指定時は a 要素として描画。アプリ内パスは base を自動付与） */
		href?: string;
		/** ボタン種別 */
		type?: 'button' | 'submit' | 'reset';
		/** 無効状態 */
		disabled?: boolean;
		/** クリックハンドラ */
		onclick?: (event: MouseEvent) => void;
		/** 追加クラス */
		class?: string;
		/** 子要素（未使用時は label を表示） */
		children?: Snippet;
	}

	let {
		label,
		href,
		type = 'button',
		disabled = false,
		onclick,
		class: className = '',
		children
	}: Props = $props();

	/** base を考慮した実際の href */
	const resolvedHref = $derived(
		href && href.startsWith('/') && !href.startsWith('//') ? appPath(href) : href
	);
</script>

{#snippet innerContent()}
	<span class="hover-slide-inner">
		<span class="hover-slide-text">
			{#if children}
				{@render children()}
			{:else}
				{label}
			{/if}
		</span>
		<span class="hover-slide-text-hover" aria-hidden="true">
			{#if children}
				{@render children()}
			{:else}
				{label}
			{/if}
		</span>
	</span>
{/snippet}

{#if resolvedHref}
	<a href={resolvedHref} class="hover-slide btn-primary {className}" class:is-disabled={disabled}>
		{@render innerContent()}
	</a>
{:else}
	<button {type} {disabled} class="hover-slide btn-primary {className}" {onclick}>
		{@render innerContent()}
	</button>
{/if}

<style>
	.btn-primary.is-disabled {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
