<script lang="ts">
	/**
	 * @component SiteFooter
	 * @description サイトフッター。著作権と主要リンクを表示する
	 */
	import { mainNavItems, siteName } from '$lib/data/site';
	import { appPath } from '$lib/utils/appPath';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-t border-cactus-line bg-cactus-surface">
	<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-20">
		<div class="flex flex-col gap-12 md:flex-row md:justify-between">
			<div>
				<p class="font-serif text-xl tracking-[0.2em]">{siteName}</p>
				<p class="mt-3 max-w-sm text-sm leading-relaxed text-cactus-muted">
					建築・インテリア・キッチン・グラフィック・プロダクトのトータルデザイン（ダミーサイト）
				</p>
			</div>
			<nav class="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3" aria-label="フッターナビゲーション">
				{#each mainNavItems as item (item.href)}
					<a href={appPath(item.href)} class="text-xs tracking-widest text-cactus-muted transition hover:text-cactus-accent">
						{item.labelEn}
					</a>
				{/each}
				<a href={appPath('/works')} class="text-xs tracking-widest text-cactus-muted transition hover:text-cactus-accent">WORKS</a>
				<a href={appPath('/career')} class="text-xs tracking-widest text-cactus-muted transition hover:text-cactus-accent">CAREER</a>
			</nav>
		</div>
		<p class="mt-12 text-xs tracking-wider text-cactus-muted">© {currentYear} {siteName}</p>
	</div>
</footer>
