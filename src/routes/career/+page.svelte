<script lang="ts">
	/**
	 * @page 採用情報
	 */
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import { careerJobs } from '$lib/data/site';
</script>

<svelte:head>
	<title>CAREER | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<PageHeading titleEn="CAREER" subtitle="採用情報（ダミー）" />

	<div class="flex flex-col gap-12">
		{#each careerJobs as job (job.titleEn)}
			<article class="border border-cactus-line p-8 md:p-10 {job.open ? '' : 'opacity-60'}">
				<div class="flex flex-wrap items-start justify-between gap-4">
					<div>
						<h2 class="font-serif text-xl tracking-wider">{job.titleJa}</h2>
						<p class="mt-1 text-xs tracking-[0.2em] text-cactus-muted">{job.titleEn}</p>
					</div>
					<span
						class="text-[10px] tracking-[0.2em] {job.open ? 'text-cactus-accent' : 'text-cactus-muted'}"
					>
						{job.open ? 'RECRUITING' : 'CLOSED'}
					</span>
				</div>
				<p class="mt-6 text-sm leading-[2] text-cactus-muted">{job.description}</p>
				{#if job.open}
					<ButtonPrimary href="/contact" label="応募する" class="mt-8" />
				{/if}
			</article>
		{/each}
	</div>
</div>
