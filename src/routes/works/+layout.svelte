<script lang="ts">
	/**
	 * @layout 実績セクション共通レイアウト
	 * @description 一覧フィルター時は見出し・タブを維持し、詳細ページでは子ページのみ描画する
	 */
	import { page } from '$app/state';
	import CategoryFilter from '$lib/components/CategoryFilter.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import {
		getCategoryLabel,
		getProjectsByCategory,
		projects
	} from '$lib/data/projects';
	import { isWorksListPath } from '$lib/utils/pageTransitionNav';
	import { resolveCategoryFromPath } from '$lib/utils/projects';

	let { children } = $props();

	/** 実績一覧（フィルター）ページかどうか */
	const isListPage = $derived(isWorksListPath(page.url.pathname));

	/** 現在のカテゴリID */
	const categoryId = $derived(resolveCategoryFromPath(page.params.category));

	/** フィルター後の件数 */
	const filteredCount = $derived(getProjectsByCategory(categoryId).length);

	/** 見出し下のサブタイトル（テキスト更新のみ。イントロ再アニメはしない） */
	const subtitle = $derived(
		categoryId === 'all'
			? `実績一覧（全 ${projects.length} 件・ダミーデータ）`
			: `${getCategoryLabel(categoryId)}（${filteredCount} 件）`
	);

	/** ブラウザタイトル用 */
	const documentTitle = $derived(
		categoryId === 'all'
			? 'WORKS | CACTUS design'
			: `${getCategoryLabel(categoryId)} | WORKS | CACTUS design`
	);
</script>

<svelte:head>
	{#if isListPage}
		<title>{documentTitle}</title>
	{/if}
</svelte:head>

{#if isListPage}
	<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
		<PageHeading titleEn="WORKS" {subtitle} />
		<CategoryFilter currentCategory={categoryId} />
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}
