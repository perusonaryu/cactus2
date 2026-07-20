<script lang="ts">
	/**
	 * @component ServicePanels
	 * @description トップページ中央のサービス紹介。横スクロールではなくタイル状に敷き詰めて表示する
	 */
	import type { ServiceSection } from '$lib/types/site';

	interface Props {
		/** サービスセクション一覧 */
		sections: ServiceSection[];
	}

	let { sections }: Props = $props();

	/**
	 * タイルのグリッド配置クラスを返す
	 * @param index - タイルのインデックス
	 * @returns CSS クラス名
	 */
	function tileSpanClass(index: number): string {
		const spanClasses = [
			'service-tile--a',
			'service-tile--b',
			'service-tile--c',
			'service-tile--d',
			'service-tile--e'
		];
		return spanClasses[index] ?? '';
	}
</script>

<section class="service-tile-grid border-t border-cactus-line" aria-label="サービス紹介">
	{#each sections as section, index (section.id)}
		<a href={section.href} class="service-tile group {tileSpanClass(index)}">
			<img
				src={section.imageUrl}
				alt={section.titleEn}
				class="service-tile-image"
				loading="lazy"
			/>
			<div class="service-tile-overlay" aria-hidden="true"></div>
			<div class="service-tile-caption">
				<h3 class="service-tile-title">{section.titleEn}</h3>
				<p class="service-tile-subtitle">{section.subtitle}</p>
				<p class="service-tile-description">{section.description}</p>
			</div>
		</a>
	{/each}
</section>

<style>
	.service-tile-grid {
		display: grid;
		width: 100%;
		gap: 3px;
		background-color: #e0ddd6;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: minmax(200px, 28vw);
	}

	.service-tile {
		position: relative;
		display: block;
		overflow: hidden;
		background-color: #d8d5ce;
		min-height: 200px;
	}

	.service-tile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.9s cubic-bezier(0.37, 0.16, 0.12, 1);
	}

	.service-tile-overlay {
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.15) 45%, transparent 100%);
		transition: background 0.5s cubic-bezier(0.37, 0.16, 0.12, 1);
	}

	.service-tile-caption {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 1.25rem 1.5rem;
	}

	.service-tile-title {
		font-family: 'Noto Serif JP', 'Yu Mincho', serif;
		font-size: 1.25rem;
		letter-spacing: 0.25em;
		color: #ffffff;
	}

	.service-tile-subtitle {
		margin-top: 0.35rem;
		font-size: 0.8125rem;
		color: rgba(255, 255, 255, 0.9);
	}

	.service-tile-description {
		margin-top: 0.75rem;
		max-width: 28rem;
		font-size: 0.6875rem;
		line-height: 1.8;
		color: rgba(255, 255, 255, 0.75);
		display: none;
	}

	@media (hover: hover) {
		.service-tile:hover .service-tile-image {
			transform: scale(1.05);
		}

		.service-tile:hover .service-tile-overlay {
			background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.25) 50%, transparent 100%);
		}
	}

	/* モバイル: 2列のシンプルグリッド */
	.service-tile--a {
		grid-column: span 2;
	}

	/* タブレット以上: 6列グリッドで非対称タイル */
	@media (min-width: 768px) {
		.service-tile-grid {
			grid-template-columns: repeat(6, 1fr);
			grid-auto-rows: minmax(220px, 18vw);
		}

		.service-tile--a {
			grid-column: 1 / span 3;
			grid-row: span 2;
		}

		.service-tile--b {
			grid-column: 4 / span 1;
			grid-row: 1;
		}

		.service-tile--c {
			grid-column: 5 / span 2;
			grid-row: 1;
		}

		.service-tile--d {
			grid-column: 4 / span 2;
			grid-row: 2;
		}

		.service-tile--e {
			grid-column: 6;
			grid-row: 2;
		}

		.service-tile-title {
			font-size: 1.5rem;
		}

		.service-tile-description {
			display: block;
		}
	}

	@media (min-width: 1024px) {
		.service-tile-grid {
			grid-auto-rows: minmax(240px, 16vw);
		}

		.service-tile-caption {
			padding: 2rem 2.5rem;
		}

		.service-tile-title {
			font-size: 1.75rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.service-tile-image {
			transition: none;
		}
	}
</style>
