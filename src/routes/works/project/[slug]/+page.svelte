<script lang="ts">
	/**
	 * @page 実績詳細
	 */
	import PageHeading from '$lib/components/PageHeading.svelte';
	import ProjectGallery from '$lib/components/ProjectGallery.svelte';
	import TextLink from '$lib/components/TextLink.svelte';

	let { data } = $props();
	const project = $derived(data.project);
</script>

<svelte:head>
	<title>{project.name} | WORKS | CACTUS design</title>
</svelte:head>

<article>
	<div class="relative h-[50vh] min-h-[360px] w-full overflow-hidden md:h-[70vh]">
		<img src={project.heroImageUrl} alt={project.name} class="h-full w-full object-cover" />
		<div class="absolute inset-0 bg-black/20"></div>
	</div>

	<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
		<TextLink href="/works" class="text-xs tracking-[0.2em] text-cactus-muted">← WORKS</TextLink>

		<div class="mt-8 grid gap-12 lg:grid-cols-[1fr_320px]">
			<div>
				<PageHeading titleEn={project.name} subtitle={project.categoryLabel} />
				<div class="prose-cactus max-w-2xl text-sm leading-[2] text-cactus-muted">
					{@html project.concept}
				</div>
			</div>
			<aside class="space-y-6 border-t border-cactus-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
				<div>
					<p class="text-[10px] tracking-[0.2em] text-cactus-muted">LOCATION</p>
					<p class="mt-1 text-sm">{project.location}</p>
				</div>
				<div>
					<p class="text-[10px] tracking-[0.2em] text-cactus-muted">AREA</p>
					<p class="mt-1 text-sm">{project.area}</p>
				</div>
				<div>
					<p class="text-[10px] tracking-[0.2em] text-cactus-muted">ROLE</p>
					<p class="mt-1 text-sm">{project.role}</p>
				</div>
				<div>
					<p class="text-[10px] tracking-[0.2em] text-cactus-muted">CREDITS</p>
					<p class="mt-1 text-sm">{project.credits}</p>
				</div>
			</aside>
		</div>

		<div class="mt-20">
			<ProjectGallery images={project.gallery} projectName={project.name} />
		</div>
	</div>
</article>
