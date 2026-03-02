export type CssVariableName = `--${string}`;

export type ThemeGoogleFontFamily = "notoSansJp" | "shipporiMincho" | "outfit";
export type ThemeLocalFontFamily = "localSans" | "localMono";

export type ThemeFontSlot =
  | {
      provider: "google";
      family: ThemeGoogleFontFamily;
      fallback: string;
    }
  | {
      provider: "local";
      family: ThemeLocalFontFamily;
      fallback: string;
    };

export type ThemeColorTokens = {
  background: {
    canvas: string;
    canvasDeep: string;
    canvasMist: string;
    night1: string;
    night2: string;
    night3: string;
  };
  surface: {
    base: string;
    muted: string;
    elevated: string;
    strong: string;
  };
  text: {
    strong: string;
    default: string;
    muted: string;
    inverse: string;
    selection: string;
  };
  primary: {
    "500": string;
    "600": string;
    "700": string;
    ink: string;
  };
  accent: {
    mint: string;
    foam: string;
    gold: string;
    violet: string;
    logoCyan: string;
    logoYellow: string;
    logoOrange: string;
    logoBrown: string;
  };
  line: {
    soft: string;
    strong: string;
    glass: string;
  };
  shadow: {
    soft: string;
    card: string;
  };
  component: {
    cta: {
      primary: {
        border: string;
        background: string;
        text: string;
        ring: string;
        shadow: string;
      };
      secondary: {
        border: string;
        background: string;
        text: string;
        ring: string;
        shadow: string;
      };
      ghost: {
        border: string;
        background: string;
        text: string;
        ring: string;
        shadow: string;
      };
    };
    badge: {
      border: string;
      background: string;
      text: string;
      shadow: string;
    };
    heroBadge: {
      border: string;
      background: string;
      text: string;
    };
    breadcrumb: {
      border: string;
      background: string;
      text: string;
      shadow: string;
      separator: string;
      linkHover: string;
      current: string;
    };
    header: {
      brandSubtext: string;
      navBorder: string;
      navBackground: string;
      navText: string;
      navHoverBackground: string;
      navActiveBorder: string;
      navActiveBackground: string;
      auctionBorder: string;
      auctionBackground: string;
      auctionText: string;
      auctionShadow: string;
      auctionRing: string;
      utilityBorder: string;
      utilityBackground: string;
      utilityText: string;
      pendingText: string;
    };
    logoPlate: {
      border: string;
      background: string;
      shine: string;
      shadow: string;
    };
    home: {
      heroCapsuleBorder: string;
      heroCapsuleBackground: string;
      heroCapsuleText: string;
      trustDot: string;
      quickPanelBorder: string;
      quickPanelBackground: string;
      quickPanelKicker: string;
      actionKicker: string;
      actionTitle: string;
      actionBody: string;
      actionMove: string;
      actionMovieBorder: string;
      actionMovieBackground: string;
      actionSocialBorder: string;
      actionSocialBackground: string;
      actionAuctionBorder: string;
      actionAuctionBackground: string;
      actionFaqBorder: string;
      actionFaqBackground: string;
      goodsSubtleText: string;
    };
  };
};

export type ThemeConfig = {
  fonts: {
    brandHero: ThemeFontSlot;
    heading: ThemeFontSlot;
    body: ThemeFontSlot;
    ui: ThemeFontSlot;
    monoOrNumeric: ThemeFontSlot;
  };
  colors: ThemeColorTokens;
  layout: {
    maxWidth: string;
  };
};
