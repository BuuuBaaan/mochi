import type { CSSProperties } from "react";

import { themeConfig } from "@/theme.config";
import { resolveThemeFontVariable } from "@/lib/theme/fonts";

type CssVariables = CSSProperties & Record<`--${string}`, string>;

export function buildThemeCssVariables(): CssVariables {
  const { colors, fonts, layout } = themeConfig;
  const brandSource = resolveThemeFontVariable(fonts.brandHero);
  const headingSource = resolveThemeFontVariable(fonts.heading);
  const bodySource = resolveThemeFontVariable(fonts.body);
  const uiSource = resolveThemeFontVariable(fonts.ui);
  const numericSource = resolveThemeFontVariable(fonts.monoOrNumeric);

  return {
    "--layout-max": layout.maxWidth,

    "--bg-canvas": colors.background.canvas,
    "--bg-canvas-deep": colors.background.canvasDeep,
    "--bg-canvas-mist": colors.background.canvasMist,
    "--bg-night-1": colors.background.night1,
    "--bg-night-2": colors.background.night2,
    "--bg-night-3": colors.background.night3,

    "--surface-base": colors.surface.base,
    "--surface-muted": colors.surface.muted,
    "--surface-elevated": colors.surface.elevated,
    "--surface-strong": colors.surface.strong,

    "--line-soft": colors.line.soft,
    "--line-strong": colors.line.strong,
    "--line-glass": colors.line.glass,

    "--text-strong": colors.text.strong,
    "--text-default": colors.text.default,
    "--text-muted": colors.text.muted,
    "--text-inverse": colors.text.inverse,
    "--text-selection": colors.text.selection,

    "--primary-500": colors.primary["500"],
    "--primary-600": colors.primary["600"],
    "--primary-700": colors.primary["700"],
    "--primary-ink": colors.primary.ink,

    "--accent-mint": colors.accent.mint,
    "--accent-foam": colors.accent.foam,
    "--accent-gold": colors.accent.gold,
    "--accent-violet": colors.accent.violet,
    "--logo-cyan": colors.accent.logoCyan,
    "--logo-yellow": colors.accent.logoYellow,
    "--logo-orange": colors.accent.logoOrange,
    "--logo-brown": colors.accent.logoBrown,

    "--shadow-soft": colors.shadow.soft,
    "--shadow-card": colors.shadow.card,

    "--font-brand": `var(${brandSource}), ${fonts.brandHero.fallback}`,
    "--font-heading": `var(${headingSource}), ${fonts.heading.fallback}`,
    "--font-body": `var(${bodySource}), ${fonts.body.fallback}`,
    "--font-ui": `var(${uiSource}), ${fonts.ui.fallback}`,
    "--font-numeric": `var(${numericSource}), ${fonts.monoOrNumeric.fallback}`,
    "--font-display": `var(${headingSource}), ${fonts.heading.fallback}`,

    "--cta-primary-border": colors.component.cta.primary.border,
    "--cta-primary-bg": colors.component.cta.primary.background,
    "--cta-primary-text": colors.component.cta.primary.text,
    "--cta-primary-ring": colors.component.cta.primary.ring,
    "--cta-primary-shadow": colors.component.cta.primary.shadow,

    "--cta-secondary-border": colors.component.cta.secondary.border,
    "--cta-secondary-bg": colors.component.cta.secondary.background,
    "--cta-secondary-text": colors.component.cta.secondary.text,
    "--cta-secondary-ring": colors.component.cta.secondary.ring,
    "--cta-secondary-shadow": colors.component.cta.secondary.shadow,

    "--cta-ghost-border": colors.component.cta.ghost.border,
    "--cta-ghost-bg": colors.component.cta.ghost.background,
    "--cta-ghost-text": colors.component.cta.ghost.text,
    "--cta-ghost-ring": colors.component.cta.ghost.ring,
    "--cta-ghost-shadow": colors.component.cta.ghost.shadow,

    "--badge-border": colors.component.badge.border,
    "--badge-bg": colors.component.badge.background,
    "--badge-text": colors.component.badge.text,
    "--badge-shadow": colors.component.badge.shadow,

    "--hero-badge-border": colors.component.heroBadge.border,
    "--hero-badge-bg": colors.component.heroBadge.background,
    "--hero-badge-text": colors.component.heroBadge.text,

    "--breadcrumb-border": colors.component.breadcrumb.border,
    "--breadcrumb-bg": colors.component.breadcrumb.background,
    "--breadcrumb-text": colors.component.breadcrumb.text,
    "--breadcrumb-shadow": colors.component.breadcrumb.shadow,
    "--breadcrumb-separator": colors.component.breadcrumb.separator,
    "--breadcrumb-link-hover": colors.component.breadcrumb.linkHover,
    "--breadcrumb-current": colors.component.breadcrumb.current,

    "--header-brand-subtext": colors.component.header.brandSubtext,
    "--header-nav-border": colors.component.header.navBorder,
    "--header-nav-bg": colors.component.header.navBackground,
    "--header-nav-text": colors.component.header.navText,
    "--header-nav-hover-bg": colors.component.header.navHoverBackground,
    "--header-nav-active-border": colors.component.header.navActiveBorder,
    "--header-nav-active-bg": colors.component.header.navActiveBackground,
    "--header-auction-border": colors.component.header.auctionBorder,
    "--header-auction-bg": colors.component.header.auctionBackground,
    "--header-auction-text": colors.component.header.auctionText,
    "--header-auction-shadow": colors.component.header.auctionShadow,
    "--header-auction-ring": colors.component.header.auctionRing,
    "--header-utility-border": colors.component.header.utilityBorder,
    "--header-utility-bg": colors.component.header.utilityBackground,
    "--header-utility-text": colors.component.header.utilityText,
    "--header-pending-text": colors.component.header.pendingText,

    "--logo-plate-border": colors.component.logoPlate.border,
    "--logo-plate-bg": colors.component.logoPlate.background,
    "--logo-plate-shine": colors.component.logoPlate.shine,
    "--logo-plate-shadow": colors.component.logoPlate.shadow,

    "--home-hero-capsule-border": colors.component.home.heroCapsuleBorder,
    "--home-hero-capsule-bg": colors.component.home.heroCapsuleBackground,
    "--home-hero-capsule-text": colors.component.home.heroCapsuleText,
    "--home-trust-dot": colors.component.home.trustDot,
    "--home-quick-panel-border": colors.component.home.quickPanelBorder,
    "--home-quick-panel-bg": colors.component.home.quickPanelBackground,
    "--home-quick-panel-kicker": colors.component.home.quickPanelKicker,
    "--home-action-kicker": colors.component.home.actionKicker,
    "--home-action-title": colors.component.home.actionTitle,
    "--home-action-body": colors.component.home.actionBody,
    "--home-action-move": colors.component.home.actionMove,
    "--home-action-movie-border": colors.component.home.actionMovieBorder,
    "--home-action-movie-bg": colors.component.home.actionMovieBackground,
    "--home-action-social-border": colors.component.home.actionSocialBorder,
    "--home-action-social-bg": colors.component.home.actionSocialBackground,
    "--home-action-auction-border": colors.component.home.actionAuctionBorder,
    "--home-action-auction-bg": colors.component.home.actionAuctionBackground,
    "--home-action-faq-border": colors.component.home.actionFaqBorder,
    "--home-action-faq-bg": colors.component.home.actionFaqBackground,
    "--home-goods-subtle-text": colors.component.home.goodsSubtleText,
  };
}
