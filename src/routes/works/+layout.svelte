<script lang="ts">
	/**
	 * @layout 実績セクション共通レイアウト
	 * @description カテゴリ一覧ではカテゴリ名を見出しにし、詳細ページでは子ページのみ描画する
	 */
	import { page } from '$app/state';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import {
		getCategoryLabel,
		getProjectsByCategory,
		projects
	} from '$lib/data/projects';
	import { isWorksListPath } from '$lib/utils/pageTransitionNav';
	import { resolveCategoryFromPath } from '$lib/utils/projects';

	let { children } = $props();

	/** 実績一覧ページかどうか */
	const isListPage = $derived(isWorksListPath(page.url.pathname));

	/** 現在のカテゴリID */
	const categoryId = $derived(resolveCategoryFromPath(page.params.category));

	/** カテゴリ別一覧かどうか（ALL /works ではない） */
	const isCategoryPage = $derived(categoryId !== 'all');

	/** 一覧の件数 */
	const filteredCount = $derived(getProjectsByCategory(categoryId).length);

	/** カテゴリページの見出し（英語カテゴリ名） */
	const headingTitleEn = $derived(getCategoryLabel(categoryId));

	/** カテゴリページのサブタイトル */
	const subtitle = $derived(`実績一覧（${filteredCount} 件）`);

	/** ブラウザタイトル用（WORKS は付けない） */
	const documentTitle = $derived(
		isCategoryPage
			? `${getCategoryLabel(categoryId)} | CACTUS design`
			: `実績一覧（全 ${projects.length} 件） | CACTUS design`
	);
</script>

<svelte:head>
	{#if isListPage}
		<title>{documentTitle}</title>
	{/if}
</svelte:head>

{#if isListPage}
	<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
		{#if isCategoryPage}
			<PageHeading titleEn={headingTitleEn} {subtitle} />
		{/if}
		{@render children()}
	</div>
{:else}
	{@render children()}
{/if}
