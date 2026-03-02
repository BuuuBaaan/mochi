# CHANGELOG

## 0.2.1 - 2026-03-02

- 配色基盤を再設計し、サイト全体を「淡い水色〜青緑〜群青」のレイヤー表現へ統一
- 白ベタ背景を削減し、カード/入力/リンク/見出しのコントラストを改善
- ヘッダーロゴを拡大（クリック領域拡張・余白最適化）し、ヒーローにもロゴロックアップを追加
- 物販導線に商品タブ（大/中）を追加し、hover時の軽量バブルエフェクトを実装
- `もちメダカ` 表記を全ページ・メタデータ・本文・リンク文言で `もちめだか` に統一
- OGP/Twitter/icon/apple-icon の背景トーンとロゴプレートを統一
- `README.md` の `Design References` を再調査結果で更新（10件）
- フィードバック反映: 背景をさらに青系へ寄せて白さを抑制し、水槽感を強化
- フィードバック反映: トップヒーローの背景ロゴ透かしとカプセル型ロゴ要素を削除
- フィードバック反映: 泡エフェクトを物販商品カードの説明エリアにも適用
- フィードバック反映: `max-w-6xl + mx-auto` 固定を廃止し、ワイド + オフセットレイアウトへ再設計

## 0.2.0 - 2026-03-02

- デザイン全面刷新（配色/余白/タイポ/カード/CTA/ヒーローの統一）
- 公式ロゴを `public/brand/logo.png` に統合
- ロゴ適用範囲を拡張
  - ヘッダー左上
  - フッター
  - OGP（`/opengraph-image`, `/api/og`）
  - Twitter画像（`/twitter-image`）
  - favicon（`/icon`）
  - apple icon（`/apple-icon`）
- 物販導線を新規実装
  - `/goods`（一覧）
  - `/goods/[slug]`（詳細）
  - ホーム物販セクション
- 物販商品の定義を追加
  - 餌（`feed`）
  - グリーンウォーター（`greenwater`）
- Amazon送客ロジックを実装
  - `site.config.ts` でURL/CTA/価格表示を一元管理
  - URL未設定時は「Amazon準備中 + 問い合わせ」へ自動フォールバック
- 商品画像を追加
  - `public/images/products/feed.jpg`
  - `public/images/products/greenwater.jpg`
- SEO更新
  - goodsページのmetadata/JSON-LD追加
  - sitemapにgoodsルート追加
- フッターと各詳細ページの導線を強化（次アクションの明確化）
- `.env.example` にAmazon用環境変数を追加
- 品質ゲート確認
  - `npm run lint` 成功
  - `npm run typecheck` 成功
  - `npm run build` 成功

## 0.1.0 - 2026-02-27

- Next.js 16 + TypeScript + Tailwind CSS で新規サイト構築
- 公式サイトの必須ページ群を実装（home/about/shop/auctions/varieties/blog/faq/contact/privacy/terms/tokusho）
- MDXコンテンツ基盤を実装（`content/blog` / `content/varieties`）
- ブログ記事8本を追加
- 品種図鑑12エントリを追加（碧、龍鱗、ネプチューンダルマ、王華ダルマ、五式typeR 含む）
- 外部導線（YouTube/Instagram/ヤフオク/BASE）を全域に配置
- クライアント検索（タイトル・タグ）とページネーションを実装
- SEO実装（metadata、canonical、OG/Twitter、JSON-LD）
- `sitemap.xml` / `robots.txt` / `rss.xml` を追加
- 動的OG画像生成（`/api/og`）を実装
- GA4/Plausibleの任意計測導線を実装（未設定時は無効）
- 問い合わせフォームにFormspree任意設定 + mailtoフォールバックを実装
- READMEを運用手順・デプロイ手順付きで更新
- 品質ゲート確認: `lint` / `typecheck` / `build` 成功





