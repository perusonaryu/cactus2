# CACTUS design（ダミーサイト）

[LARGO](https://largo.studio) のサイト構成を参考に、[CACTUS design](https://cactusdesign.jp/) の雰囲気で再構築した SvelteKit + Tailwind CSS プロジェクトです。

## 技術スタック

- SvelteKit 2 / Svelte 5
- Tailwind CSS v4
- TypeScript
- `@sveltejs/adapter-static`（静的 HTML 出力）

## 開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

## 静的ビルド（レンタルサーバー向け）

```bash
npm run build
```

出力は `build/` ディレクトリです。中身をそのままレンタルサーバーの公開ディレクトリ（例: `public_html`）へアップロードしてください。

ローカルでビルド結果を確認する場合:

```bash
npm run preview
```

- 全ページはビルド時にプリレンダされます（サーバーサイド実行は不要）
- URL は末尾スラッシュ付き（例: `/works/architecture/`）で、各パスに `index.html` が置かれます

## GitHub Pages で公開する

同じリポジトリから GitHub Actions で自動デプロイできます（`.github/workflows/deploy-github-pages.yml`）。

1. リポジトリの **Settings → Pages → Build and deployment → Source** を **GitHub Actions** にする
2. この変更を `main` にマージする（または Actions タブから workflow を手動実行する）
3. 公開 URL: `https://<user>.github.io/<repo>/`（例: `https://perusonaryu.github.io/cactus2/`）

GitHub Pages 用にローカルで確認する場合（サブパス付きビルド）:

```bash
BASE_PATH=/cactus2 npm run build
BASE_PATH=/cactus2 npm run preview
```

レンタルサーバー向け（ドメイン直下）は従来どおり `BASE_PATH` なしの `npm run build` で問題ありません。

## ページ構成

| パス | 内容 |
|------|------|
| `/` | トップ（ヒーロースライダー・サービスタイル・実績抜粋） |
| `/works` | 実績一覧 |
| `/works/architecture` など | カテゴリ別一覧 |
| `/works/project/[slug]` | 実績詳細 |
| `/philosophy` | 哲学・会社情報 |
| `/contact` | お問い合わせ（ダミーフォーム） |
| `/contact/partner` | パートナー募集 |
| `/career` | 採用情報 |

## アニメーション（LARGO 準拠）

- **ページ遷移**: 暗色オーバーレイのスライドイン／アウト + 上部3ドットローダー
- **コンテンツ表示**: フェードイン（`prefers-reduced-motion` 対応）
- **ボタン**: `ButtonPrimary` — ホバー時のテキストスライド＋背景反転
- **リンク**: `TextLink` — 下線の scaleX ホバー

## 備考

- テキスト・画像はすべてダミーデータです
- 画像は Unsplash のプレースホルダーを使用しています
