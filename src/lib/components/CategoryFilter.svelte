<script lang="ts">
	/**
	 * @component CategoryFilter
	 * @description 実績カテゴリのフィルタータブ（ヘッダーと同系の下線ホバー／選択時は下線維持）
	 */
	import TextLink from '$lib/components/TextLink.svelte';
	import { categoryFilters } from '$lib/data/site';
	import type { ProjectCategoryId } from '$lib/types/site';

	interface Props {
		/** 現在のカテゴリID */
		currentCategory: ProjectCategoryId;
	}

	let { currentCategory }: Props = $props();

	/**
	 * フィルターリンク用のクラス名を返す
	 * @param filterId - カテゴリID
	 * @returns クラス文字列
	 */
	function filterLinkClass(filterId: ProjectCategoryId): string {
		const classes = ['filter-text-link'];
		if (currentCategory === filterId) {
			classes.push('is-active');
		}
		return classes.join(' ');
	}
</script>

<nav class="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-cactus-line pb-6" aria-label="カテゴリフィルター">
	{#each categoryFilters as filter (filter.id)}
		<TextLink
			href={filter.href}
			class={filterLinkClass(filter.id)}
			aria-current={currentCategory === filter.id ? 'page' : undefined}
		>
			{filter.label}
		</TextLink>
	{/each}
</nav>
