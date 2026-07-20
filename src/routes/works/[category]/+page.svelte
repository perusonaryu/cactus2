<script lang="ts">
	/**
	 * @page カテゴリ別実績一覧
	 */
	import { page } from '$app/stores';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjectsByCategory } from '$lib/data/projects';
	import { getCategoryLabel } from '$lib/data/projects';
	import { resolveCategoryFromPath } from '$lib/utils/projects';

	const categoryId = $derived(resolveCategoryFromPath($page.params.category));
	const filteredProjects = $derived(getProjectsByCategory(categoryId));
	const titleEn = $derived(getCategoryLabel(categoryId));
</script>

<svelte:head>
	<title>{titleEn} | WORKS | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<PageHeading titleEn="WORKS" subtitle="{titleEn}（{filteredProjects.length} 件）" />
	<CategoryFilter currentCategory={categoryId} />
	{#if filteredProjects.length === 0}
		<p class="py-20 text-center text-sm text-cactus-muted">該当する実績はありません。</p>
	{:else}
		<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
			{#each filteredProjects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	{/if}
</div>
