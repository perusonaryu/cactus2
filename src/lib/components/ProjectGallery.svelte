<script lang="ts">
	/**
	 * @component ProjectGallery
	 * @description 実績詳細の画像ギャラリー（横長・縦長ペアレイアウト）
	 */
	import type { GalleryImage } from '$lib/types/project';

	interface Props {
		/** ギャラリー画像配列 */
		images: GalleryImage[];
		/** プロジェクト名（alt用） */
		projectName: string;
	}

	let { images, projectName }: Props = $props();
</script>

<div class="flex flex-col gap-4 md:gap-6">
	{#each images as image, index (index)}
		{#if image.type === 'landscape'}
			<figure class="overflow-hidden {image.size === 'large' ? '' : 'max-w-4xl mx-auto w-full'}">
				<img
					src={image.imageUrl}
					alt="{projectName} ギャラリー {index + 1}"
					class="w-full object-cover {image.size === 'large' ? 'aspect-[16/10]' : 'aspect-[4/3]'}"
					loading="lazy"
				/>
			</figure>
		{:else}
			<div class="grid gap-4 md:grid-cols-2 md:gap-6">
				{#if image.leftImageUrl}
					<figure class="overflow-hidden">
						<img
							src={image.leftImageUrl}
							alt="{projectName} ギャラリー左 {index + 1}"
							class="aspect-[3/4] w-full object-cover"
							loading="lazy"
						/>
					</figure>
				{/if}
				{#if image.rightImageUrl}
					<figure class="overflow-hidden">
						<img
							src={image.rightImageUrl}
							alt="{projectName} ギャラリー右 {index + 1}"
							class="aspect-[3/4] w-full object-cover"
							loading="lazy"
						/>
					</figure>
				{/if}
			</div>
		{/if}
	{/each}
</div>
