<script lang="ts">
	/**
	 * @component SiteHeader
	 * @description 固定ヘッダー。ロゴ・グローバルナビ・メニュートグルを表示する
	 */
	import { page } from '$app/state';
	import TextLink from '$lib/components/TextLink.svelte';
	import { mainNavItems, siteName } from '$lib/data/site';
	import { pageTransitionState } from '$lib/state/pageTransition.svelte';

	/** ページ遷移中はヘッダー操作を無効化 */
	const isPageLoading = $derived(pageTransitionState.phase !== 'idle');

	/** メニュー開閉状態 */
	let menuOpen = $state(false);

	/**
	 * ナビ項目がアクティブか判定する
	 * @param href - リンク先パス
	 * @returns アクティブなら true
	 */
	function isNavActive(href: string): boolean {
		return page.url.pathname === href || page.url.pathname.startsWith(`${href}/`);
	}

	/**
	 * ナビリンク用のクラス名を返す
	 * @param href - リンク先パス
	 * @param variant - 表示バリアント（desktop / mobile）
	 * @returns クラス文字列
	 */
	function navLinkClass(href: string, variant: 'desktop' | 'mobile'): string {
		const classes = ['nav-text-link', variant === 'mobile' ? 'nav-text-link--mobile' : ''];
		if (isNavActive(href)) {
			classes.push('is-active');
		}
		return classes.filter(Boolean).join(' ');
	}

	/** メニューを開閉する */
	function toggleMenu(): void {
		menuOpen = !menuOpen;
	}

	/** メニューを閉じる */
	function closeMenu(): void {
		menuOpen = false;
	}
</script>

<header
	class="fixed top-0 right-0 left-0 z-50 border-b border-cactus-line/60 bg-cactus-bg/90 backdrop-blur-md transition-opacity duration-300"
	class:pointer-events-none={isPageLoading}
	class:opacity-60={isPageLoading}
>
	<div class="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
		<a href="/" class="group flex flex-col" onclick={closeMenu}>
			<span class="font-serif text-lg tracking-[0.2em] text-cactus-ink transition group-hover:text-cactus-accent md:text-xl">
				{siteName}
			</span>
		</a>

		<nav class="hidden items-center gap-8 lg:flex" aria-label="メインナビゲーション">
			{#each mainNavItems as item (item.href)}
				<TextLink href={item.href} class={navLinkClass(item.href, 'desktop')}>
					{item.labelEn}
				</TextLink>
			{/each}
		</nav>

		<button
			type="button"
			class="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
			onclick={toggleMenu}
			aria-expanded={menuOpen}
			aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
		>
			<span class="menu-bar block h-px w-6 bg-cactus-ink {menuOpen ? 'translate-y-[7px] rotate-45' : ''}"></span>
			<span class="menu-bar block h-px w-6 bg-cactus-ink {menuOpen ? 'opacity-0' : ''}"></span>
			<span class="menu-bar block h-px w-6 bg-cactus-ink {menuOpen ? '-translate-y-[7px] -rotate-45' : ''}"></span>
		</button>
	</div>
</header>

{#if menuOpen}
	<div
		class="fixed inset-0 z-40 bg-cactus-bg/98 pt-20 lg:hidden"
		role="dialog"
		aria-modal="true"
		aria-label="モバイルメニュー"
	>
		<nav class="flex flex-col gap-6 px-10 py-8">
			{#each mainNavItems as item (item.href)}
				<TextLink
					href={item.href}
					class={navLinkClass(item.href, 'mobile')}
					onclick={closeMenu}
				>
					{item.labelEn}
				</TextLink>
			{/each}
			<TextLink href="/works" class="{navLinkClass('/works', 'mobile')} mt-2" onclick={closeMenu}>
				WORKS
			</TextLink>
		</nav>
	</div>
{/if}
