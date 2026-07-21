<script lang="ts">
	/**
	 * @component TextLink
	 * @description LARGO 風の下線スケールホバーを持つテキストリンク
	 */
	import type { Snippet } from 'svelte';
	import { appPath } from '$lib/utils/appPath';

	interface Props {
		/** リンク先（アプリ内パスは `/` 始まり。base を自動付与） */
		href: string;
		/** 追加クラス */
		class?: string;
		/** クリック時コールバック */
		onclick?: (event: MouseEvent) => void;
		/** 子要素 */
		children: Snippet;
	}

	let { href, class: className = '', onclick, children }: Props = $props();

	/** base を考慮した実際の href */
	const resolvedHref = $derived(href.startsWith('/') && !href.startsWith('//') ? appPath(href) : href);
</script>

<a href={resolvedHref} class="text-link {className}" {onclick}>
	<span class="text-link-label">
		{@render children()}
	</span>
</a>
