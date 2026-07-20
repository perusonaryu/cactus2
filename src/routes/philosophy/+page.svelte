<script lang="ts">
	/**
	 * @page 哲学・会社概要
	 */
	import PageHeading from '$lib/components/PageHeading.svelte';
	import { companyInfoRows, philosophySections } from '$lib/data/site';
</script>

<svelte:head>
	<title>PHILOSOPHY | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<PageHeading titleEn="PHILOSOPHY" subtitle="私たちの考え" />

	<div class="flex flex-col gap-20 md:gap-28">
		{#each philosophySections as section, index (section.title)}
			<section class="grid gap-8 md:grid-cols-[120px_1fr] md:gap-16">
				<span class="font-serif text-4xl text-cactus-line md:text-5xl">{String(index + 1).padStart(2, '0')}</span>
				<div>
					<h2 class="font-serif text-xl tracking-wider text-cactus-ink md:text-2xl">{section.title}</h2>
					<p class="mt-6 text-sm leading-[2.2] text-cactus-muted md:text-base">{section.body}</p>
				</div>
			</section>
		{/each}
	</div>

	<section class="mt-28 border-t border-cactus-line pt-20">
		<h2 class="mb-12 font-serif text-xl tracking-[0.2em]">CONTACT</h2>
		<dl class="grid gap-8 md:grid-cols-2">
			{#each companyInfoRows as row (row.title)}
				<div>
					<dt class="text-[10px] tracking-[0.2em] text-cactus-muted">{row.title}</dt>
					<dd class="mt-2 text-sm leading-relaxed text-cactus-ink">{@html row.content}</dd>
				</div>
			{/each}
		</dl>
	</section>
</div>
