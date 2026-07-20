<script lang="ts">
	/**
	 * @component PageHeading
	 * @description 下層ページ用の英語タイトル（LARGO 風のマスクリvealアニメーション付き）
	 */
	import { onMount } from 'svelte';

	interface Props {
		/** 英語タイトル */
		titleEn: string;
		/** 日本語サブタイトル */
		subtitle?: string;
	}

	let { titleEn, subtitle }: Props = $props();

	/** イントロアニメーション表示済みか */
	let isVisible = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			isVisible = true;
		});
	});
</script>

<div class="mb-12 md:mb-16">
	<h1 class="intro-title font-serif text-4xl tracking-[0.25em] text-cactus-ink md:text-5xl lg:text-6xl" class:is-visible={isVisible}>
		<span class="intro-line">
			<span class="intro-line-inner">{titleEn}</span>
		</span>
	</h1>
	{#if subtitle}
		<p class="intro-subtitle mt-4 text-sm tracking-wider text-cactus-muted" class:is-visible={isVisible}>{subtitle}</p>
	{/if}
</div>
