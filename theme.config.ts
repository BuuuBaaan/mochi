import type { ThemeConfig } from "@/lib/theme/types";

export const themeConfig: ThemeConfig = {
  fonts: {
    // Brand lockup and hero headlines.
    brandHero: {
      provider: "google",
      family: "shipporiMincho",
      fallback: "\"Yu Mincho\", \"Hiragino Mincho ProN\", serif",
    },
    // Section and card headings.
    heading: {
      provider: "google",
      family: "shipporiMincho",
      fallback: "\"Yu Mincho\", \"Hiragino Mincho ProN\", serif",
    },
    // Long-form body copy.
    body: {
      provider: "google",
      family: "notoSansJp",
      fallback: "\"Hiragino Kaku Gothic ProN\", \"Yu Gothic UI\", \"Meiryo\", sans-serif",
    },
    // UI labels, navigation and buttons.
    ui: {
      provider: "google",
      family: "outfit",
      fallback: "\"Hiragino Kaku Gothic ProN\", \"Yu Gothic UI\", \"Meiryo\", sans-serif",
    },
    // Numeric emphasis / table-like numerals.
    monoOrNumeric: {
      provider: "google",
      family: "outfit",
      fallback: "\"Hiragino Kaku Gothic ProN\", \"Yu Gothic UI\", \"Meiryo\", sans-serif",
    },
  },
  colors: {
    background: {
      canvas: "#041124",
      canvasDeep: "#020b1a",
      canvasMist: "#0b1c39",
      night1: "#02050e",
      night2: "#071738",
      night3: "#12356d",
    },
    surface: {
      base: "rgb(11 25 48 / 0.84)",
      muted: "rgb(9 20 40 / 0.88)",
      elevated: "rgb(18 42 78 / 0.76)",
      strong: "rgb(4 12 25 / 0.9)",
    },
    text: {
      strong: "#f6fbff",
      default: "#d7e8fa",
      muted: "#9fb7d3",
      inverse: "#f8fbff",
      selection: "#0b1020",
    },
    primary: {
      "500": "#ef3354",
      "600": "#cf1f43",
      "700": "#a61233",
      ink: "#fff7fa",
    },
    accent: {
      mint: "#5edce1",
      foam: "#b8f5ff",
      gold: "#ffd26c",
      violet: "#5668d8",
      logoCyan: "#51d8d8",
      logoYellow: "#ffd24b",
      logoOrange: "#ff8a2b",
      logoBrown: "#5f3414",
    },
    line: {
      soft: "rgb(105 158 209 / 0.34)",
      strong: "rgb(130 198 236 / 0.58)",
      glass: "rgb(225 248 255 / 0.42)",
    },
    shadow: {
      soft: "0 16px 36px rgb(2 8 20 / 0.44)",
      card: "0 24px 56px rgb(1 7 19 / 0.55)",
    },
    component: {
      cta: {
        primary: {
          border: "rgb(255 111 140 / 0.72)",
          background: "linear-gradient(138deg,#cf1f43,#ef3354 52%,#ff5079)",
          text: "#fff8fb",
          ring: "rgb(255 136 163 / 0.82)",
          shadow: "0 16px 30px rgba(115,8,31,0.42)",
        },
        secondary: {
          border: "rgb(129 234 247 / 0.62)",
          background: "linear-gradient(136deg,#0d4f74,#1177a0 54%,#19a8be)",
          text: "#f5fdff",
          ring: "rgb(133 233 247 / 0.86)",
          shadow: "0 14px 28px rgba(3,36,57,0.4)",
        },
        ghost: {
          border: "rgb(116 170 228 / 0.5)",
          background: "linear-gradient(138deg,rgba(8,24,45,0.96),rgba(12,36,69,0.92) 56%,rgba(14,56,88,0.9))",
          text: "#eaf5ff",
          ring: "rgb(151 206 255 / 0.84)",
          shadow: "0 12px 26px rgba(1,12,27,0.48)",
        },
      },
      badge: {
        border: "rgb(123 196 242 / 0.62)",
        background: "rgb(8 30 58 / 0.68)",
        text: "#d9f2ff",
        shadow: "inset 0 1px 0 rgba(255,255,255,0.18)",
      },
      heroBadge: {
        border: "rgb(255 110 142 / 0.64)",
        background: "rgb(228 43 82 / 0.2)",
        text: "#ffe3eb",
      },
      breadcrumb: {
        border: "rgb(94 150 211 / 0.58)",
        background: "rgb(7 24 46 / 0.74)",
        text: "#cde5ff",
        shadow: "0 12px 24px rgba(1,10,25,0.42)",
        separator: "#7eb7e6",
        linkHover: "#ffffff",
        current: "#ffdc7f",
      },
      header: {
        brandSubtext: "#a9f2ff",
        navBorder: "rgb(132 193 240 / 0.42)",
        navBackground: "rgb(9 30 58 / 0.74)",
        navText: "#dbeeff",
        navHoverBackground: "rgb(16 47 87 / 0.92)",
        navActiveBorder: "rgb(255 102 137 / 0.68)",
        navActiveBackground: "linear-gradient(138deg,rgba(179,22,56,0.88),rgba(226,48,82,0.86))",
        auctionBorder: "rgb(255 120 148 / 0.78)",
        auctionBackground: "linear-gradient(138deg,#ca2145,#ef3354 52%,#ff4f7a)",
        auctionText: "#fff7fb",
        auctionShadow: "0 14px 26px rgba(111,8,33,0.48)",
        auctionRing: "rgb(255 154 177 / 0.86)",
        utilityBorder: "rgb(128 187 240 / 0.52)",
        utilityBackground: "rgb(10 34 62 / 0.74)",
        utilityText: "#d6ebff",
        pendingText: "rgb(179 206 230 / 0.9)",
      },
      logoPlate: {
        border: "rgb(146 221 250 / 0.58)",
        background: "linear-gradient(164deg, rgb(8 31 58 / 0.86) 0%, rgb(12 50 89 / 0.74) 100%)",
        shine: "radial-gradient(circle at 30% 22%, rgb(217 247 255 / 0.45), transparent 58%)",
        shadow: "0 16px 34px rgb(1 10 23 / 0.46)",
      },
      home: {
        heroCapsuleBorder: "rgb(255 118 145 / 0.56)",
        heroCapsuleBackground: "rgb(233 38 78 / 0.16)",
        heroCapsuleText: "#ffdbe7",
        trustDot: "#67dcf1",
        quickPanelBorder: "rgb(117 182 235 / 0.56)",
        quickPanelBackground: "linear-gradient(152deg,rgba(7,22,44,0.84),rgba(11,35,69,0.86) 48%,rgba(13,54,89,0.84))",
        quickPanelKicker: "#8fdcff",
        actionKicker: "#8cd9ff",
        actionTitle: "#f5fbff",
        actionBody: "#c4ddf8",
        actionMove: "#ffcfde",
        actionMovieBorder: "rgb(103 229 238 / 0.54)",
        actionMovieBackground: "linear-gradient(156deg,rgba(5,39,66,0.88),rgba(7,61,91,0.84) 56%,rgba(8,80,112,0.82))",
        actionSocialBorder: "rgb(112 162 240 / 0.56)",
        actionSocialBackground: "linear-gradient(156deg,rgba(16,33,72,0.88),rgba(26,47,97,0.84) 56%,rgba(35,67,122,0.82))",
        actionAuctionBorder: "rgb(255 121 150 / 0.58)",
        actionAuctionBackground: "linear-gradient(156deg,rgba(95,12,33,0.84),rgba(133,19,48,0.84) 54%,rgba(173,31,67,0.82))",
        actionFaqBorder: "rgb(159 126 236 / 0.5)",
        actionFaqBackground: "linear-gradient(156deg,rgba(35,26,79,0.84),rgba(45,35,93,0.82) 56%,rgba(26,56,107,0.82))",
        goodsSubtleText: "#e4f5ff",
      },
    },
  },
  layout: {
    maxWidth: "84rem",
  },
};

export type AppThemeConfig = typeof themeConfig;
