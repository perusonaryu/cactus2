<script lang="ts">
	/**
	 * @page トップページ
	 * @description ヒーロースライダー・サービスタイル・実績抜粋
	 */
	import HeroSlider from '$lib/components/HeroSlider.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ServicePanels from '$lib/components/ServicePanels.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import { getFeaturedProjects } from '$lib/data/projects';
	import { serviceSections, siteName, siteTagline } from '$lib/data/site';

	const featuredProjects = getFeaturedProjects();
	const previewProjects = featuredProjects.slice(0, 4);
</script>

<svelte:head>
	<title>{siteName} | トータルデザインスタジオ</title>
</svelte:head>

<HeroSlider projects={featuredProjects} />

<section class="mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
	<div class="max-w-2xl">
		<h2 class="font-serif text-2xl tracking-[0.2em] text-cactus-ink md:text-3xl">PHILOSOPHY</h2>
		<p class="mt-6 text-sm leading-loose text-cactus-muted md:text-base">
			{siteTagline}。私たちはジャンルを問わずシームレスにデザインを請け負い、お客様の利益に繋がる明快な表現を追求します。
		</p>
		<TextLink href="/philosophy" class="mt-8 text-xs tracking-[0.25em] text-cactus-accent">
			READ MORE
		</TextLink>
	</div>
</section>

<ServicePanels sections={serviceSections} />

<section class="mx-auto max-w-350 px-6 py-20 md:px-10 md:py-28">
	<div class="mb-10 flex items-end justify-between">
		<h2 class="font-serif text-2xl tracking-[0.25em]">WORKS</h2>
		<TextLink href="/works" class="text-xs tracking-[0.25em] text-cactus-muted">
			VIEW ALL →
		</TextLink>
	</div>
	<div class="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
		{#each previewProjects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</section>
