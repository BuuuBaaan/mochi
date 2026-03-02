const amazonStoreUrl = "https://www.amazon.co.jp/stores/page/D6098CA6-CD20-4219-BDA8-EC49A72D94BE";
const amazonProductUrlFeed = "https://www.amazon.co.jp/dp/B0D8YJXRZ8";
const amazonProductUrlGreenWater = "https://www.amazon.co.jp/dp/B0DJMBBRM5";

export const siteConfig = {
  name: "もちめだか",
  shortName: "もちめだか",
  description:
    "ラメ系・ダルマ系を中心に、雨ざらし飼育で鍛えた強い個体を目指すメダカブランド。ヤフオク・BASE・Amazon・Instagram・YouTubeへの最短導線を案内します。",
  locale: "ja_JP",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "support@example.com",
  heroTagline: "雨ざらしで磨いた、強く美しいメダカ。",
  logo: {
    src: "/brand/logo.png",
    alt: "もちめだか ロゴ",
  },
  social: {
    youtube: "https://www.youtube.com/@%E3%82%82%E3%81%A1%E3%82%81%E3%81%A0%E3%81%8B",
    instagram: "https://www.instagram.com/mochi_medaka/",
    yahooAuctions:
      "https://auctions.yahoo.co.jp/seller/5oBqYmLxFDsRhrsCP6SWtVgW4SKZT",
    baseShop: "https://mochimedaka.base.shop/",
  },
  featuredVideoId: process.env.NEXT_PUBLIC_FEATURED_VIDEO_ID ?? "YOUTUBE_VIDEO_ID",
  navigation: [
    { label: "ホーム", href: "/" },
    { label: "物販", href: "/goods" },
    { label: "買う", href: "/shop" },
    { label: "品種", href: "/varieties" },
    { label: "ブログ", href: "/blog" },
    { label: "飼育方針", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "問い合わせ", href: "/contact" },
  ],
  commerce: {
    amazonStoreUrl,
    amazonProductUrlFeed,
    amazonProductUrlGreenWater,
    primaryCtaLabel: "Amazonで購入",
    storeCtaLabel: "Amazonページへ",
    pendingCtaLabel: "Amazon準備中",
    fallbackContactLabel: "入荷通知を問い合わせる",
    fallbackContactHref: "/contact",
    products: [
      {
        slug: "feed",
        name: "もちめだか 育成バランス餌",
        shortCatch: "食いつきと体型づくりを両立する、毎日使える主力フード。",
        summary:
          "若魚から親魚まで使いやすい、もちめだか基準の配合バランス。水を汚しにくく、屋外飼育でも扱いやすいことを重視しました。",
        image: "/images/products/feed.jpg",
        priceLabel: "Amazonで表示",
        amazonProductUrl: amazonProductUrlFeed,
        features: [
          "高い嗜好性で食べムラを減らす設計",
          "ラメ系の体づくりを意識した日常給餌向け",
          "顆粒サイズを揃え、食べ残しを抑えやすい",
          "屋外容器でも扱いやすい沈降バランス",
        ],
        recommendedFor: [
          "稚魚期を抜けた若魚から親魚まで",
          "給餌量の管理をシンプルにしたい方",
          "ラメ系・ダルマ系を混在管理している方",
        ],
        usage: [
          "1日2〜3回、1〜2分で食べ切る量を目安に与えてください。",
          "低水温期は回数を減らし、食べ残しが出ない量に調整してください。",
          "針子には粉餌を優先し、本品は口サイズに合ってから使用してください。",
        ],
        cautions: [
          "与えすぎは水質悪化の原因になります。",
          "体調不良個体への過給餌は避けてください。",
          "生体の状態や水温に応じて給餌量を調整してください。",
        ],
        storage: [
          "高温多湿と直射日光を避け、密閉して保管してください。",
          "開封後はなるべく早く使い切る運用を推奨します。",
        ],
        faq: [
          {
            q: "1日何回与えるのが適切ですか？",
            a: "目安は1日2〜3回です。水温が低い時期は1日1回以下に抑えてください。",
          },
          {
            q: "稚魚にも使えますか？",
            a: "針子初期には粉餌が適しています。本品は口に入るサイズになってから切り替えてください。",
          },
          {
            q: "ラメ系以外にも使えますか？",
            a: "はい。一般的なメダカ飼育全般で使えます。",
          },
        ],
      },
      {
        slug: "greenwater",
        name: "もちめだか 究極のグリーンウォーター",
        shortCatch: "立ち上げと稚魚管理を安定させる、透明感のある培養水。",
        summary:
          "水づくりの初速を上げたい方向けのグリーンウォーター。立ち上げ時の不安定さを和らげ、稚魚管理の土台づくりをサポートします。",
        image: "/images/products/greenwater.jpg",
        priceLabel: "Amazonで表示",
        amazonProductUrl: amazonProductUrlGreenWater,
        features: [
          "立ち上げ初期の水質変動を穏やかにしやすい",
          "稚魚飼育時の環境安定に使いやすい濃度設計",
          "屋外・屋内どちらの容器にも投入しやすい",
          "単体利用と既存飼育水への添加の両方に対応",
        ],
        recommendedFor: [
          "立ち上げ直後の容器を安定させたい方",
          "針子〜稚魚期の管理に不安がある方",
          "季節の変わり目で水が崩れやすい環境の方",
        ],
        usage: [
          "新規立ち上げ時は飼育水全体の10〜20%を目安に添加してください。",
          "既存容器へは状態を見ながら少量ずつ追加してください。",
          "濁りが強い場合は換水比率を上げて調整してください。",
        ],
        cautions: [
          "保存状態によって濃度変化するため、使用前によく振ってください。",
          "異臭や極端な変色がある場合は使用を中止してください。",
          "急激な全量置換は避け、段階的に添加してください。",
        ],
        storage: [
          "冷暗所で保管し、開封後は早めに使用してください。",
          "長期保管時は容器内圧上昇を避けるため定期的に状態確認してください。",
        ],
        faq: [
          {
            q: "どのくらいの頻度で追加すべきですか？",
            a: "容器状態に応じますが、週1回の少量補充から始めると調整しやすくなります。",
          },
          {
            q: "透明な水槽でも使えますか？",
            a: "使用可能です。見た目を優先する場合は添加量を控えめにしてください。",
          },
          {
            q: "冬場も有効ですか？",
            a: "有効ですが、水温が低い時期は変化が緩やかなため少量運用を推奨します。",
          },
        ],
      },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;

