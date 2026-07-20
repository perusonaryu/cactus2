<script lang="ts">
	/**
	 * @layout ルートレイアウト
	 * @description 全ページ共通のヘッダー・フッター、LARGO 風ページ遷移アニメーション
	 */
	import '../app.css';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import PageTransitionOverlay from '$lib/components/PageTransitionOverlay.svelte';
	import SiteFooter from '$lib/components/SiteFooter.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { siteName, defaultDescription } from '$lib/data/site';
	import { pageTransitionState } from '$lib/state/pageTransition.svelte';
	import { registerPageTransitionNavigation } from '$lib/utils/pageTransitionNav';

	let { children } = $props();

	registerPageTransitionNavigation();

	/** ページ遷移中か */
	const isPageLoading = $derived(pageTransitionState.phase !== 'idle');
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500&family=Noto+Serif+JP:wght@300;400;600&display=swap"
		rel="stylesheet"
	/>
	<meta name="description" content={defaultDescription} />
	<title>{siteName}</title>
</svelte:head>

<svelte:body class:is-page-loading={isPageLoading} />

<PageTransitionOverlay />
<SiteHeader />
<main class="min-h-screen pt-16 md:pt-20">
	{#key page.url.pathname}
		<div class="page-main" class:is-show={pageTransitionState.showContent}>
			{@render children()}
		</div>
	{/key}
</main>
<SiteFooter />
