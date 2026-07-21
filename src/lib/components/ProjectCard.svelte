<script lang="ts">
	/**
	 * @component ProjectCard
	 * @description 実績一覧用のカード。ホバーで情報を表示する
	 */
	import type { Project } from '$lib/types/project';
	import { appPath } from '$lib/utils/appPath';

	interface Props {
		/** プロジェクトデータ */
		project: Project;
	}

	let { project }: Props = $props();
</script>

<a
	href={appPath(`/works/project/${project.slug}`)}
	class="group relative block aspect-[4/5] overflow-hidden bg-cactus-line"
>
	<img
		src={project.listImageUrl}
		alt="{project.name} のサムネイル"
		class="h-full w-full object-cover transition duration-700 group-hover:scale-105"
		loading="lazy"
	/>
	<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100"></div>
	<div class="absolute right-0 bottom-0 left-0 p-5 translate-y-2 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
		<p class="text-[10px] tracking-[0.2em] text-white/80">{project.categoryLabel}</p>
		<p class="mt-1 font-serif text-lg tracking-wide text-white">{project.name}</p>
		<p class="mt-1 text-xs text-white/70">{project.location} · {project.area}</p>
	</div>
</a>
