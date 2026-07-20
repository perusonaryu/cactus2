<script lang="ts">
	/**
	 * @page お問い合わせ
	 */
	import ContactForm from '$lib/components/ContactForm.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
	import TextLink from '$lib/components/TextLink.svelte';
	import { companyInfoRows } from '$lib/data/site';
</script>

<svelte:head>
	<title>CONTACT | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
		<div>
			<PageHeading titleEn="CONTACT" subtitle="お問い合わせ" />
			<p class="max-w-md text-sm leading-[2] text-cactus-muted">
				設計・デザイン・施工のご相談、お見積もりなどお気軽にお問い合わせください。（ダミーフォーム）
			</p>
			<div class="mt-10 space-y-6">
				{#each companyInfoRows.slice(0, 2) as row (row.title)}
					<div>
						<p class="text-[10px] tracking-[0.2em] text-cactus-muted">{row.title}</p>
						<p class="mt-1 text-sm">{@html row.content}</p>
					</div>
				{/each}
			</div>
			<p class="mt-8 text-xs text-cactus-muted">
				<TextLink href="/contact/partner">協力会社・パートナー募集はこちら</TextLink>
			</p>
		</div>
		<div>
			<ContactForm formType="一般お問い合わせ" />
		</div>
	</div>
</div>
