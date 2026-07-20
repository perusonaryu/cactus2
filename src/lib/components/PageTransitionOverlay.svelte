<script lang="ts">
	/**
	 * @component PageTransitionOverlay
	 * @description LARGO 風の暗色オーバーレイと上部ローディングドットを表示する
	 */
	import { pageTransitionState } from '$lib/state/pageTransition.svelte';

	/** オーバーレイが操作中か */
	const isActive = $derived(
		pageTransitionState.phase === 'loadingIn' || pageTransitionState.phase === 'loadingOut'
	);

	/** ローディングドットを表示するか */
	const showLoader = $derived(pageTransitionState.phase === 'loadingIn');
</script>

<div
	class="page-transition"
	class:is-active={isActive}
	class:is-loading-in={pageTransitionState.phase === 'loadingIn'}
	class:is-loading-out={pageTransitionState.phase === 'loadingOut'}
	aria-hidden="true"
>
	<div class="page-loader" class:is-visible={showLoader}>
		<span class="page-loader-dot"></span>
		<span class="page-loader-dot"></span>
		<span class="page-loader-dot"></span>
	</div>
	<div class="page-transition-bg">
		<div class="page-transition-bg-inner"></div>
	</div>
</div>
