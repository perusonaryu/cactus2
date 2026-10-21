<script lang="ts">
	/**
	 * @page カテゴリ別実績一覧
	 * @description 見出しは works/+layout.svelte 側で維持する
	 */
	import { page } from '$app/state';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjectsByCategory } from '$lib/data/projects';
	import { resolveCategoryFromPath } from '$lib/utils/projects';

	const categoryId = $derived(resolveCategoryFromPath(page.params.category));
	const filteredProjects = $derived(getProjectsByCategory(categoryId));
</script>

{#if filteredProjects.length === 0}
	<p class="py-20 text-center text-sm text-cactus-muted">該当する実績はありません。</p>
{:else}
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
		{#each filteredProjects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
{/if}
