<script lang="ts">
	/**
	 * @component HeroSlider
	 * @description トップページのフィーチャー実績スライダー
	 */
	import { onMount } from 'svelte';
	import type { Project } from '$lib/types/project';
	import { appPath } from '$lib/utils/appPath';

	interface Props {
		/** スライドに表示するプロジェクト */
		projects: Project[];
	}

	let { projects }: Props = $props();

	/** 現在のスライドインデックス */
	let currentIndex = $state(0);

	/** 自動再生のインターバルID */
	let intervalId: ReturnType<typeof setInterval> | undefined;

	onMount(() => {
		if (projects.length <= 1) {
			return;
		}
		intervalId = setInterval(() => {
			currentIndex = (currentIndex + 1) % projects.length;
		}, 6000);
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});

	/**
	 * 指定インデックスのスライドへ移動する
	 * @param index - スライドインデックス
	 */
	function goToSlide(index: number): void {
		currentIndex = index;
	}
</script>

<section class="relative h-[70vh] min-h-[480px] w-full overflow-hidden md:h-[85vh]" aria-label="フィーチャー実績">
	{#each projects as project, index (project.slug)}
		<a
			href={appPath(`/works/project/${project.slug}`)}
			class="absolute inset-0 transition-opacity duration-1000 {index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}"
			aria-hidden={index !== currentIndex}
		>
			<img
				src={project.heroImageUrl}
				alt="{project.name}"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 bg-black/25"></div>
			<div class="absolute right-0 bottom-0 left-0 p-8 md:p-14">
				<p class="text-[11px] tracking-[0.3em] text-white/80">{project.categoryLabel}</p>
				<h2 class="mt-2 font-serif text-3xl tracking-[0.15em] text-white md:text-5xl">{project.name}</h2>
				<p class="mt-2 text-sm text-white/70">{project.location}</p>
			</div>
		</a>
	{/each}

	<div class="absolute right-6 bottom-8 z-20 flex gap-2 md:right-14">
		{#each projects as _, index (index)}
			<button
				type="button"
				class="h-8 w-px transition {index === currentIndex ? 'bg-white' : 'bg-white/40'}"
				onclick={() => goToSlide(index)}
				aria-label="スライド {index + 1} へ"
			></button>
		{/each}
	</div>

	<p class="absolute bottom-8 left-6 z-20 hidden text-[10px] tracking-[0.4em] text-white/60 md:left-14 md:block">
		SCROLL
	</p>
</section>
