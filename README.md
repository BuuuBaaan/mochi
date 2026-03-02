# もちめだか 公式サイト兼集客エンジン

ラメ系・ダルマ系メダカブランド「もちめだか」の公式サイトです。  
目的は **集客・信用・導線最適化**。生体はヤフオク/BASE、物販（餌・グリーンウォーター）はAmazonへ送客する構成です。

## 現状把握メモ（作業前）

- 初期モデルはページ数と導線は揃っていたが、トップ〜下層のデザイン言語が弱く、ブランド体験が薄かった
- ロゴが本番資産に未統合（ヘッダー/フッター/OGP/favicon/app iconで未活用）
- 物販導線が未実装（`/goods`系ページ、Amazon URL一元管理、未設定時フォールバックが未整備）
- 設定値の集中管理は一部のみで、物販関連の価格・CTA・URL運用を統合する余地があった

## 改善計画メモ（実行）

1. `site.config.ts`にロゴ/物販/Amazon URL/価格表示/CTA文言を集約  
2. ロゴを`public/brand/logo.png`に正規配置し、ヘッダー/フッター/OGP/Twitter/icon/apple-iconへ統合  
3. UI基盤（色・余白・タイポ・カード・ボタン・ヒーロー）を再設計  
4. `/goods` と `/goods/[slug]` を実装し、Amazon URL未設定時は自動で「準備中 + 問い合わせ」に切替  
5. ホームに物販セクションを追加し、全体の導線を再整理  
6. SEO/品質を最終検証（`lint`/`typecheck`/`build`）

## 実装済みページ

- `/` ホーム（物販セクション追加済み）
- `/goods` 物販一覧（新規）
- `/goods/[slug]` 商品詳細（新規・2商品）
- `/about` `/shop` `/auctions` `/varieties` `/varieties/[slug]`
- `/blog` `/blog/[slug]` `/faq` `/contact`
- `/privacy` `/terms` `/tokusho`
- `/sitemap.xml` `/robots.txt` `/rss.xml`

## 主な改善内容

- UI/UX刷新
  - 深い青緑〜群青系を軸にしたブランド配色へ再設計
  - ヒーロー、カード、ボタン、余白、見出しの一貫性を強化
  - ページ全体の視線誘導（次アクションCTA）を再配置
- ロゴ統合
  - `public/brand/logo.png`に統一管理
  - ヘッダー左上、フッター、OG/Twitter、favicon、apple iconに適用
- 物販実装（Amazon送客）
  - `/goods` + `/goods/[slug]`（餌 / グリーンウォーター）
  - URL未設定時の自動フォールバック（disabled表現 + 問い合わせ）
  - 商品情報（特徴/対象/使い方/注意事項/保存方法/FAQ）を定義済み
- SEO/信頼
  - Metadata（Title/Description/Canonical/OG/Twitter）整備
  - JSON-LD（Organization/Breadcrumb/FAQ/Product）整備
  - sitemap/robots/rss更新（goodsルート追加）

## 設定値の一元管理

主要設定は `site.config.ts` に集約しています。

- 外部導線: YouTube / Instagram / ヤフオク / BASE
- 物販導線: `amazonStoreUrl`, `amazonProductUrlFeed`, `amazonProductUrlGreenWater`
- CTA文言: `primaryCtaLabel`, `pendingCtaLabel`, `fallbackContactLabel`
- 商品情報: `commerce.products[]`（価格表示・画像・説明・FAQ含む）
- ロゴ情報: `logo.src`, `logo.alt`

## 環境変数

`.env.example` をコピーして `.env.local` を作成してください。

| 変数名 | 用途 | 例 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 公開URL（canonical/sitemap用） | `https://example.com` |
| `NEXT_PUBLIC_GA_ID` | GA4測定ID（任意） | `G-XXXXXXXXXX` |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausibleドメイン（任意） | `mochimedaka.example` |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | フォーム送信先（任意） | `https://formspree.io/f/xxxxxx` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | メール問い合わせ先 | `support@example.com` |
| `NEXT_PUBLIC_FEATURED_VIDEO_ID` | ホーム埋め込み動画ID（任意） | `dQw4w9WgXcQ` |
| `NEXT_PUBLIC_AMAZON_STORE_URL` | Amazon店舗/まとめページ | `https://www.amazon.co.jp/...` |
| `NEXT_PUBLIC_AMAZON_PRODUCT_URL_FEED` | 餌の商品URL | `https://www.amazon.co.jp/...` |
| `NEXT_PUBLIC_AMAZON_PRODUCT_URL_GREENWATER` | グリーンウォーター商品URL | `https://www.amazon.co.jp/...` |

## 起動方法

```bash
npm install
npm run dev
```

## scripts

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm run start`

## デプロイ（Vercel推奨）

1. GitHubへpush
2. VercelでImport
3. 環境変数を設定
4. Deploy
5. 公開後に `NEXT_PUBLIC_SITE_URL` を本番URLへ更新して再Deploy

## 画像差し替え手順（1分）

### ロゴ差し替え

1. `public/brand/logo.png` を新ロゴで上書き
2. `npm run build` でOG/icon生成が通ることを確認

### 商品画像差し替え

1. `public/images/products/feed.jpg` を餌画像で上書き
2. `public/images/products/greenwater.jpg` をグリーンウォーター画像で上書き
3. 必要なら `site.config.ts` の商品名/説明も更新

## Amazon URL差し替え手順

`site.config.ts` は環境変数経由でURLを読んでいます。  
`.env.local` の以下3項目を書き換えるだけで全ページに反映されます。

- `NEXT_PUBLIC_AMAZON_STORE_URL`
- `NEXT_PUBLIC_AMAZON_PRODUCT_URL_FEED`
- `NEXT_PUBLIC_AMAZON_PRODUCT_URL_GREENWATER`

URL未設定（空文字）の場合は、自動で「Amazon準備中 + 問い合わせ導線」に切り替わります。

## 文言・価格差し替え箇所

`site.config.ts` の `commerce.products[]` を編集してください。

- `priceLabel`（例: `Amazonで表示` / `近日公開` / `¥---`）
- `shortCatch`, `summary`
- `features`, `recommendedFor`, `usage`, `cautions`, `storage`, `faq`

## Design References

確認日: **2026-03-02**

- https://linear.app/ - 暗色グラデーション上でも情報密度を崩さない余白設計
- https://stripe.com/ - ヒーローで価値訴求とCTAを同時に成立させるレイアウト
- https://www.notion.com/ - 長文コンテンツを読み疲れさせないタイポグラフィ階層
- https://www.framer.com/ - 透明レイヤーと微細なモーションの上品な使い方
- https://webflow.com/ - SaaSの導線設計（Primary/Secondary CTAの役割分離）
- https://www.shopify.com/ - セクションごとの行動喚起を明快にするカード設計
- https://www.allbirds.com/ - D2Cの商品カード情報を短く強く見せる情報圧縮
- https://www.aesop.com/ - ブランド主張を強くしつつ読みやすさを優先する配色トーン
- https://www.adana.co.jp/en/ - アクアリウム領域の余白と写真訴求の静かな世界観
- https://www.aquariumcoop.com/ - 飼育用品導線とFAQ系コンテンツの実用的な配置

## Assets & Credits

- `public/brand/logo.png`
  - 元画像: `mochi_medaka Logo.png`（プロジェクト提供ロゴ）
- `public/images/products/feed.jpg`
- `public/images/products/greenwater.jpg`
  - いずれも本リポジトリ内で生成した自作プレースホルダー（権利安全）
- `public/illustrations/fish-placeholder.svg`
  - 既存の自作SVGアセット

## Build検証ログ（2026-03-02）

実行コマンド:

```bash
npm run lint
npm run typecheck
npm run build
```

結果:

- `lint`: 成功（warning 0）
- `typecheck`: 成功
- `build`: 成功（静的生成完了）

主要出力（要点）:

- Static: `/`, `/goods`, `/shop`, `/about`, `/auctions`, `/blog`, `/varieties`, `/faq`, `/contact`, `/privacy`, `/terms`, `/tokusho`
- SSG Dynamic: `/goods/[slug]`, `/blog/[slug]`, `/varieties/[slug]`
- SEO/Feed: `/sitemap.xml`, `/robots.txt`, `/rss.xml`



