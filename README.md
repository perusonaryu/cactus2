# CACTUS design（ダミーサイト）

[LARGO](https://largo.studio) のサイト構成を参考に、[CACTUS design](https://cactusdesign.jp/) の雰囲気で再構築した SvelteKit + Tailwind CSS プロジェクトです。

## 技術スタック

- SvelteKit 2 / Svelte 5
- Tailwind CSS v4
- TypeScript

## 開発

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開いてください。

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
