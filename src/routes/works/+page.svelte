<script lang="ts">
	/**
	 * @page 実績一覧（全カテゴリ）
	 * @description 見出しは works/+layout.svelte 側で維持する
	 */
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { getProjectsByCategory } from '$lib/data/projects';

	const filteredProjects = getProjectsByCategory('all');
</script>

<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
	{#each filteredProjects as project (project.slug)}
		<ProjectCard {project} />
	{/each}
</div>
