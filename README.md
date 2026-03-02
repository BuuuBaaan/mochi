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

## テーマ変更手順（フォント/色）

テーマは **`theme.config.ts` だけ** を編集すれば変更できます。  
実行時は `app/layout.tsx` が `lib/theme/*` 経由でテーマを読み込み、CSS変数へ反映します。

### どこを編集すると何が変わるか

- `theme.config.ts > fonts.brandHero`
  - ブランド名やヒーロー大見出し（例: TOPのメインコピー）
- `theme.config.ts > fonts.heading`
  - セクション見出し、カード見出し
- `theme.config.ts > fonts.body`
  - 本文全般
- `theme.config.ts > fonts.ui`
  - ナビ、ボタン、ラベル
- `theme.config.ts > fonts.monoOrNumeric`
  - 数字系表示（`.numeral`）
- `theme.config.ts > colors.background`
  - ページ背景層（昼背景/夜背景）
- `theme.config.ts > colors.surface`
  - カードや帯の面色
- `theme.config.ts > colors.text`
  - 強調/標準/補助テキスト
- `theme.config.ts > colors.primary`
  - CTA主系色
- `theme.config.ts > colors.accent`
  - 演出色（泡・光など）
- `theme.config.ts > colors.component.*`
  - ボタン、ヘッダー、バッジなどUI部品の詳細色

### フォント変更例（Google Font）

`fonts.heading` を差し替える例:

```ts
heading: {
  provider: "google",
  family: "shipporiMincho",
  fallback: "\"Yu Mincho\", \"Hiragino Mincho ProN\", serif",
},
```

### フォント変更例（ローカルフォント）

`next/font/local` に切り替える例:

```ts
brandHero: {
  provider: "local",
  family: "localSans",
  fallback: "\"Yu Mincho\", \"Hiragino Mincho ProN\", serif",
},
```

ローカルフォントの実ファイル差し替えは、以下を同名で上書きすれば反映されます。

- `public/fonts/theme-placeholder/geist-latin.woff2`
- `public/fonts/theme-placeholder/geist-mono-latin.woff2`

### 背景変更例

ページ全体の雰囲気を明るくする例:

```ts
colors: {
  background: {
    canvas: "#f3fbff",
    canvasDeep: "#e4f2fb",
    canvasMist: "#fbfeff",
    night1: "#072340",
    night2: "#0d3e68",
    night3: "#176688",
  },
  // ...
}
```

## テーマ反映の内部構成

- `theme.config.ts`
  - 型安全なテーマ本体
- `lib/theme/types.ts`
  - テーマ型定義（Google/localフォント両対応）
- `lib/theme/fonts.ts`
  - `next/font` ローダー（最適化込み）
- `lib/theme/css-variables.ts`
  - テーマ値をCSS変数へ変換
- `app/layout.tsx`
  - CSS変数とフォント変数を適用

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

- https://personacentral.com/persona-5-panel-concept-development-ui/ - CEDEC+KYUSHU 2017のUI講演要約。P5 UIを「主張するUI」に振り切った背景、赤基調、視線誘導線、角度変化による可読性確保を確認
- https://personacentral.com/persona-5-interview-ui-design-sound-music/ - P5開発者インタビュー（UI/サウンド）。UIが作品の印象形成に直結するという設計姿勢の確認
- https://personacentral.com/persona-5-honkai-star-rail-interview/ - Hashino氏が「JRPGはメニュー滞在時間が長く、UI自体がゲーム体験の一部」と説明している点を参照
- https://www.theverge.com/2024/10/7/24262357/persona-metaphor-menu-design - 美しさと実用性の両立には個別メニュー単位の調整が必要、初期P5で可読性チューニングを重ねたという示唆を反映
- https://www.theverge.com/games/636243/metaphor-refantazio-ui-menu-interview-koji-ise - “emotional accelerator”の考え方を参照し、感情を上げる演出と操作性の同居を設計要件化
- https://schedule.gdconf.com/session/from-persona-to-metaphor-refantazio-creating-a-visual-identity-for-a-new-series/908317 - Koji Ise氏セッション。UIをゲーム世界に接続する表現設計と差別化プロセスを参照
- https://persona.atlus.com/p5r/sp/ - 公式キービジュアル/情報密度のトーン確認（大胆構図・高コントラスト・ラベル強調）
- https://store.playstation.com/en-us/concept/10002771 - 公式販促面のビジュアルトーン確認（P5Rのコア配色・タイポ圧・アイキャッチ構図）
- https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html - 読めるUIの下限を明文化（本文/CTAのコントラスト基準）
- https://www.refactoringui.com/previews/building-your-color-palette - 色数を絞り、階調で世界観を作る実務的パレット設計
- https://atlassian.design/foundations/color/ - 役割ベースの色分類（information/success/warning）と運用性
- https://tailwindcss.com/docs/customizing-colors - トークン化して再利用する設計（場当たり色の増殖防止）
- https://web.dev/articles/building/a-color-scheme - 背景層と前景色の関係を体系化して破綻を防ぐ設計
- https://www.nngroup.com/articles/visual-hierarchy-ux-definition/ - タイポと余白で視線誘導する情報設計
- https://www.adana.co.jp/en/ - アクアリウム表現の静かな高級感（余白・光・透明感）
- https://stripe.com/ - ヒーローで価値訴求とCTAを両立するレイヤー構成
- https://linear.app/ - 情報密度が高くても崩れないタイポ/スペーシングバランス
- https://www.shopify.com/ - D2Cの導線設計（比較→納得→行動を短距離で繋ぐ）

## P5 UI再構成メモ

- 構図: 斜めカット・切り抜き・大きなラベルで第一視線を固定し、2手目のCTAへ強制的に視線を送る
- 配色: 深い紺を土台に、アクアを情報層、赤を決裁アクションのみに限定して強調ノイズを抑える
- ラベル: “主張するUI”として、見出し・バッジ・CTAをステッカー化し、情報階層を形状でも区別する
- 動き: ホバー/フォーカスの短い線形演出と泡演出でテンポを作り、長尺アニメは避ける
- 情報密度: ヒーローで主導線を先出ししつつ、FAQ・購入手順・注意事項・問い合わせ導線を近接配置して信頼へ着地させる

## Color Notes

- カラーは `Base / Primary / Accent / Text` の4系統に固定し、ページ単位で色を増やさない方針を採用
- 背景は `#041124`〜`#020b1a` の濃紺レイヤーで統一し、水槽の奥行きを暗部の階調で表現
- CTAはレッド系 `#ef3354` を主導線に限定使用し、二次導線はアクア系で役割分離
- Accentはミント `#5edce1` とシャンパン `#ffd26c` を小面積で使用し、泡/反射光だけに担当範囲を絞る
- 本文は `#d7e8fa`、見出しは `#f6fbff` に分離し、暗背景でも可読性を最優先

## Layout Fix Notes

- 原因:
  - `app/globals.css` の `@media (min-width: 1280px)` で `.layout-shell-bleed` に `margin-left` が固定付与されており、超横幅で全体が左寄りにずれる構造だった
- 対策:
  - `layout-shell` 系を共通化し、`width: min(calc(100% - gutter), maxWidth)` + `margin-inline: auto` へ統一
  - `layout-shell-bleed` の片側マージンを完全撤去し、ページ側の使用クラスも `layout-shell` に統一
- 再発防止:
  - 幅制御は `globals.css` のレイアウトトークン（`--layout-max`）で一元管理
  - ページ個別で左右オフセットを直接持たせず、共通ラッパーのみで中央寄せを担保

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



