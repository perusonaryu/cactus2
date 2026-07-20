<script lang="ts">
	/**
	 * @page 実績一覧（全カテゴリ）
	 */
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjectsByCategory, projects } from '$lib/data/projects';

	const currentCategory = 'all';
	const filteredProjects = getProjectsByCategory(currentCategory);
</script>

<svelte:head>
	<title>WORKS | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<PageHeading titleEn="WORKS" subtitle="実績一覧（全 {projects.length} 件・ダミーデータ）" />
	<CategoryFilter {currentCategory} />
	<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
		{#each filteredProjects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</div>
