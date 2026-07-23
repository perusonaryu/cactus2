<script lang="ts">
	/**
	 * @component PageHeading
	 * @description 下層ページ用の英語タイトル（LARGO 風のマスクリvealアニメーション付き）
	 * @description イントロはマウント時に一度だけ再生し、subtitle の更新では再実行しない
	 */
	import { onMount } from 'svelte';

	interface Props {
		/** 英語タイトル */
		titleEn: string;
		/** 日本語サブタイトル */
		subtitle?: string;
	}

	let { titleEn, subtitle }: Props = $props();

	/** イントロアニメーション表示済みか（マウント中は維持） */
	let isVisible = $state(false);

	/** イントロ完了後は transition を切り、テキスト更新で再アニメしない */
	let isIntroDone = $state(false);

	onMount(() => {
		requestAnimationFrame(() => {
			isVisible = true;
			window.setTimeout(() => {
				isIntroDone = true;
			}, 2000);
		});
	});
</script>

<div class="mb-12 md:mb-16">
	<h1
		class="intro-title font-serif text-4xl tracking-[0.25em] text-cactus-ink md:text-5xl lg:text-6xl"
		class:is-visible={isVisible}
		class:is-intro-done={isIntroDone}
	>
		<span class="intro-line">
			<span class="intro-line-inner">{titleEn}</span>
		</span>
	</h1>
	{#if subtitle}
		<p
			class="intro-subtitle mt-4 text-sm tracking-wider text-cactus-muted"
			class:is-visible={isVisible}
			class:is-intro-done={isIntroDone}
		>
			{subtitle}
		</p>
	{/if}
</div>
