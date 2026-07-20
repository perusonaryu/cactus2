<script lang="ts">
	/**
	 * @page パートナー募集
	 */
	import ContactForm from '$lib/components/ContactForm.svelte';
	import PageHeading from '$lib/components/PageHeading.svelte';
</script>

<svelte:head>
	<title>PARTNER | CONTACT | CACTUS design</title>
</svelte:head>

<div class="mx-auto max-w-[1400px] px-6 py-16 md:px-10 md:py-24">
	<div class="grid gap-16 lg:grid-cols-2 lg:gap-24">
		<div>
			<PageHeading titleEn="PARTNER" subtitle="協力会社募集" />
			<p class="max-w-md text-sm leading-[2] text-cactus-muted">
				事業拡大に伴い、施工・設備・素材など各分野の協力会社様を随時募集しております。（ダミーコンテンツ）
			</p>
		</div>
		<div>
			<ContactForm formType="パートナー・協力会社のご応募" />
		</div>
	</div>
</div>
