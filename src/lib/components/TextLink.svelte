<script lang="ts">
	/**
	 * @component TextLink
	 * @description LARGO 風の下線スケールホバーを持つテキストリンク
	 */
	import type { Snippet } from 'svelte';

	interface Props {
		/** リンク先 */
		href: string;
		/** 追加クラス */
		class?: string;
		/** クリック時コールバック */
		onclick?: (event: MouseEvent) => void;
		/** 子要素 */
		children: Snippet;
	}

	let { href, class: className = '', onclick, children }: Props = $props();
</script>

<a {href} class="text-link {className}" {onclick}>
	<span class="text-link-label">
		{@render children()}
	</span>
</a>
