<script lang="ts">
	/**
	 * @component ContactForm
	 * @description お問い合わせフォーム（送信はダミー処理）
	 */
	import ButtonPrimary from '$lib/components/ButtonPrimary.svelte';

	interface Props {
		/** フォーム種別の表示名 */
		formType?: string;
	}

	let { formType = 'お問い合わせ' }: Props = $props();

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitted = $state(false);
	let errorMessage = $state('');

	/**
	 * フォーム送信ハンドラ（ダミー）
	 * @param event - フォームイベント
	 */
	function handleSubmit(event: SubmitEvent): void {
		event.preventDefault();
		errorMessage = '';

		if (!name.trim() || !email.trim() || !message.trim()) {
			errorMessage = 'handleSubmit: すべての必須項目（name, email, message）を入力してください。';
			return;
		}

		submitted = true;
	}
</script>

{#if submitted}
	<div class="rounded border border-cactus-accent/30 bg-cactus-accent/5 p-8 text-center" role="status">
		<p class="font-serif text-xl tracking-wider text-cactus-accent">送信完了（デモ）</p>
		<p class="mt-3 text-sm text-cactus-muted">
			これはダミーフォームです。実際の送信は行われていません。
		</p>
	</div>
{:else}
	<form class="flex flex-col gap-6" onsubmit={handleSubmit}>
		<p class="text-sm text-cactus-muted">{formType}</p>

		{#if errorMessage}
			<p class="text-sm text-red-700" role="alert">{errorMessage}</p>
		{/if}

		<label class="flex flex-col gap-2">
			<span class="text-xs tracking-wider text-cactus-muted">お名前 <span class="text-cactus-accent">*</span></span>
			<input
				type="text"
				name="name"
				bind:value={name}
				required
				class="border-b border-cactus-line bg-transparent py-3 text-cactus-ink outline-none transition focus:border-cactus-accent"
			/>
		</label>

		<label class="flex flex-col gap-2">
			<span class="text-xs tracking-wider text-cactus-muted">メールアドレス <span class="text-cactus-accent">*</span></span>
			<input
				type="email"
				name="email"
				bind:value={email}
				required
				class="border-b border-cactus-line bg-transparent py-3 text-cactus-ink outline-none transition focus:border-cactus-accent"
			/>
		</label>

		<label class="flex flex-col gap-2">
			<span class="text-xs tracking-wider text-cactus-muted">お問い合わせ内容 <span class="text-cactus-accent">*</span></span>
			<textarea
				name="message"
				bind:value={message}
				required
				rows="6"
				class="resize-y border border-cactus-line bg-transparent p-4 text-cactus-ink outline-none transition focus:border-cactus-accent"
			></textarea>
		</label>

		<ButtonPrimary type="submit" label="SEND" class="mt-4 self-start" />
	</form>
{/if}
