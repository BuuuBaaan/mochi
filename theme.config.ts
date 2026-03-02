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
      canvas: "#e9f4fb",
      canvasDeep: "#d7e9f6",
      canvasMist: "#f4fbff",
      night1: "#061d37",
      night2: "#0b355d",
      night3: "#14557b",
    },
    surface: {
      base: "rgb(246 251 255 / 0.92)",
      muted: "rgb(235 246 254 / 0.93)",
      elevated: "rgb(255 255 255 / 0.78)",
      strong: "rgb(7 38 64 / 0.78)",
    },
    text: {
      strong: "#0e2842",
      default: "#173e5f",
      muted: "#4d708c",
      inverse: "#f3fbff",
      selection: "#082136",
    },
    primary: {
      "500": "#19639e",
      "600": "#114f82",
      "700": "#0a3d65",
      ink: "#f3f9ff",
    },
    accent: {
      mint: "#80def0",
      foam: "#caf1ff",
      gold: "#f5dc9d",
      violet: "#6b58b5",
      logoCyan: "#52d3d2",
      logoYellow: "#f4c617",
      logoOrange: "#ea8617",
      logoBrown: "#5c360f",
    },
    line: {
      soft: "rgb(144 177 205 / 0.55)",
      strong: "rgb(89 134 167 / 0.66)",
      glass: "rgb(255 255 255 / 0.62)",
    },
    shadow: {
      soft: "0 18px 42px rgb(11 37 64 / 0.14)",
      card: "0 22px 52px rgb(8 31 54 / 0.16)",
    },
    component: {
      cta: {
        primary: {
          border: "rgb(142 197 230 / 0.45)",
          background: "linear-gradient(136deg,#0a3860,#115284 52%,#1870a0)",
          text: "#f4faff",
          ring: "rgb(162 223 240 / 0.8)",
          shadow: "0 14px 28px rgba(11,46,79,0.34)",
        },
        secondary: {
          border: "rgb(241 194 110 / 0.72)",
          background: "linear-gradient(136deg,#7e4608,#9d5b10 44%,#be7618)",
          text: "#f4faff",
          ring: "rgb(243 207 132 / 0.8)",
          shadow: "0 12px 24px rgba(74,42,10,0.34)",
        },
        ghost: {
          border: "rgb(140 200 230 / 0.56)",
          background: "linear-gradient(136deg,rgba(9,45,73,0.92),rgba(13,69,105,0.9) 55%,rgba(18,90,127,0.88))",
          text: "#f4faff",
          ring: "rgb(164 223 240 / 0.85)",
          shadow: "0 10px 22px rgba(8,39,67,0.3)",
        },
      },
      badge: {
        border: "rgb(159 198 224 / 0.85)",
        background: "rgb(255 255 255 / 0.75)",
        text: "#16486f",
        shadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
      },
      heroBadge: {
        border: "rgb(249 207 100 / 0.45)",
        background: "rgb(247 201 65 / 0.15)",
        text: "#fff1c6",
      },
      breadcrumb: {
        border: "rgb(158 194 218 / 0.8)",
        background: "rgb(255 255 255 / 0.68)",
        text: "#315a7b",
        shadow: "0 10px 24px rgba(8,33,57,0.08)",
        separator: "#6f8ea7",
        linkHover: "#143f64",
        current: "#103d62",
      },
      header: {
        brandSubtext: "#ffe7a1",
        navBorder: "rgb(255 255 255 / 0.28)",
        navBackground: "rgb(255 255 255 / 0.78)",
        navText: "#4f2f10",
        navHoverBackground: "rgb(255 255 255 / 0.92)",
        navActiveBorder: "rgb(242 200 84 / 0.7)",
        navActiveBackground: "#fff1cb",
        auctionBorder: "rgb(246 203 97 / 0.7)",
        auctionBackground: "linear-gradient(136deg,#f6d447,#f2bb21 45%,#e78717)",
        auctionText: "#4f2f10",
        auctionShadow: "0 12px 24px rgba(104,70,13,0.34)",
        auctionRing: "rgb(244 206 114 / 0.8)",
        utilityBorder: "rgb(255 255 255 / 0.34)",
        utilityBackground: "rgb(255 255 255 / 0.8)",
        utilityText: "#4f2f10",
        pendingText: "rgb(79 47 16 / 0.75)",
      },
      logoPlate: {
        border: "rgb(120 204 232 / 0.6)",
        background: "linear-gradient(164deg, rgb(8 41 67 / 0.74) 0%, rgb(13 69 101 / 0.64) 100%)",
        shine: "radial-gradient(circle at 30% 26%, rgb(216 244 255 / 0.32), transparent 58%)",
        shadow: "0 12px 30px rgb(8 35 61 / 0.32)",
      },
      home: {
        heroCapsuleBorder: "rgb(243 200 91 / 0.55)",
        heroCapsuleBackground: "rgb(246 201 61 / 0.14)",
        heroCapsuleText: "#ffe7a1",
        trustDot: "#ffd15c",
        quickPanelBorder: "rgb(162 201 225 / 0.7)",
        quickPanelBackground: "linear-gradient(155deg,rgba(251,255,255,0.88),rgba(238,248,255,0.9) 52%,rgba(233,246,255,0.88))",
        quickPanelKicker: "#2e6f96",
        actionKicker: "#32678d",
        actionTitle: "#102f4b",
        actionBody: "#2b506d",
        actionMove: "#4f2f10",
        actionMovieBorder: "rgb(102 216 220 / 0.6)",
        actionMovieBackground: "linear-gradient(155deg,rgba(234,252,255,0.9),rgba(214,243,250,0.88) 58%,rgba(220,235,255,0.9))",
        actionSocialBorder: "rgb(141 175 233 / 0.6)",
        actionSocialBackground: "linear-gradient(155deg,rgba(241,247,255,0.92),rgba(226,236,255,0.9) 56%,rgba(236,232,255,0.88))",
        actionAuctionBorder: "rgb(243 199 95 / 0.65)",
        actionAuctionBackground: "linear-gradient(155deg,rgba(255,248,226,0.92),rgba(255,239,197,0.9) 54%,rgba(255,231,178,0.88))",
        actionFaqBorder: "rgb(143 135 209 / 0.55)",
        actionFaqBackground: "linear-gradient(155deg,rgba(245,243,255,0.92),rgba(232,236,255,0.9) 56%,rgba(227,242,255,0.9))",
        goodsSubtleText: "#edf9ff",
      },
    },
  },
  layout: {
    maxWidth: "84rem",
  },
};

export type AppThemeConfig = typeof themeConfig;
