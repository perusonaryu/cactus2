<script lang="ts">
	/**
	 * @component CategoryFilter
	 * @description 実績カテゴリのフィルタータブ
	 */
	import { categoryFilters } from '$lib/data/site';
	import type { ProjectCategoryId } from '$lib/types/site';

	interface Props {
		/** 現在のカテゴリID */
		currentCategory: ProjectCategoryId;
	}

	let { currentCategory }: Props = $props();
</script>

<nav class="mb-10 flex flex-wrap gap-x-6 gap-y-2 border-b border-cactus-line pb-6" aria-label="カテゴリフィルター">
	{#each categoryFilters as filter (filter.id)}
		<a
			href={filter.href}
			class="text-xs tracking-[0.2em] transition {currentCategory === filter.id
				? 'text-cactus-accent'
				: 'text-cactus-muted hover:text-cactus-ink'}"
			aria-current={currentCategory === filter.id ? 'page' : undefined}
		>
			{filter.label}
		</a>
	{/each}
</nav>
