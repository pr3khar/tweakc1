import { ThemePreset } from "./types";

// Common custom CSS for Grok theme
const commonCustomCss = `
.crayon-shell-thread-composer__input {
  width: 100%;
}
  
.crayon-card {
  border: none;
  background: transparent;
}

.crayon-shell-thread-message-assistant__logo {
  opacity: 0;
}

.crayon-shell-thread-message-user__content {
  border-radius: 16px 0px 16px 16px;
}
`;

const lightCustomCss = `${commonCustomCss}
.crayon-shell-thread-composer__input-wrapper {
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.03);
}
`;

const darkCustomCss = `${commonCustomCss}
.crayon-shell-thread-composer__input-wrapper {
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255,0.05);
}
`;

export const twitterPreset: ThemePreset = {
  name: "Grok",
  config: {
    light: {
      fills: {},
      text: {},
      interactive: {},
      colors: {
        background: "oklch(0.985 0 0)",
        container: "oklch(1 0 0)",
        primary: "oklch(0.64 0.19 234)",
        textPrimary: "oklch(0.15 0.01 250)",
        textSecondary: "oklch(0.43 0.01 250)",
        linkText: "oklch(0.64 0.19 234)",
        danger: "oklch(0.52 0.24 25)",
        success: "oklch(0.50 0.13 155)",
        info: "oklch(0.64 0.19 234)",
        alert: "oklch(0.70 0.14 75)",
      },
      chartColors: {
        primary: "oklch(0.64 0.19 234)",
      },
      strokeColors: {
        default: "rgba(38,38,38,0.08)",
        interactiveEl: "rgba(38,38,38,0.16)",
        interactiveElHover: "rgba(38,38,38,0.24)",
        interactiveElSelected: "rgba(38,38,38,0.32)",
        emphasis: "rgba(38,38,38,0.2)",
        accent: "rgba(29,155,240,0.2)",
        accentEmphasis: "rgba(29,155,240,0.4)",
        info: "#e8f5fd",
        infoEmphasis: "#1d9bf0",
        alert: "#fff9e6",
        alertEmphasis: "#f5a623",
        success: "#e6f9ed",
        successEmphasis: "#00ba7c",
        danger: "#ffeef0",
        dangerEmphasis: "#f4212e",
      },
      chatColors: {
        containerBg: "oklch(0.985 0 0)",
        assistantBg: "oklch(0.97 0 0)",
        assistantText: "oklch(0.15 0.01 250)",
        userBg: "oklch(0.64 0.19 234)",
        userText: "oklch(1 0 0)",
      },
      shadow: {
        color: "oklch(0.15 0.01 250)",
        opacity: 0.06,
        blur: 16,
        spread: 0,
        offsetX: 0,
        offsetY: 2,
      },
      colorEngine: "default",
      fonts: {
        body: "Inter",
        heading: "Inter",
        mono: "JetBrains Mono",
      },
      fontWeight: {},
      letterSpacing: {},
      fontSize: {},
      spacing: {},
      // Border radius (same as dark mode)
      borderRadius: {
        rounded0: 0,
        rounded3xs: 1,
        rounded2xs: 2,
        roundedXs: 4,
        roundedS: 6,
        roundedM: 8,
        roundedL: 10,
        roundedXl: 12,
        rounded2xl: 14,
        rounded3xl: 16,
        rounded4xl: 20,
      },
      customCss: lightCustomCss,
    },
    dark: {
      // Fills (from Vercel dark)
      fills: {
        backgroundFills: "#050505",
        containerFills: "#0a0a0a",
        overlayFills: "rgba(0, 0, 0, 0.7)",
        sunkFills: "rgba(255,255,255,0.06)",
        containerHoverFills: "rgba(255, 255, 255, 0.06)",
        dangerFills: "#2d1410",
        successFills: "#0d2818",
        infoFills: "#1a1a2e",
        elevatedFills: "rgba(255, 255, 255, 0.1)",
        alertFills: "#2d2610",
        sunkBgFills: "rgba(255,255,255,0.06)",
        invertedFills: "#f1f1f1",
        highlightSubtle: "rgba(255,255,255,0.03)",
      },
      // Text (from Vercel dark)
      text: {
        brandText: "rgba(0, 0, 0, 1)",
        brandSecondaryText: "rgba(0, 0, 0, 0.7)",
        primaryText: "#f5f5f5",
        secondaryText: "#8c8c8c",
        disabledText: "#525252",
        dangerText: "#f87171",
        successText: "#4ade80",
        linkText: "#818cf8",
        infoText: "#60a5fa",
        alertText: "#fbbf24",
        accentPrimaryText: "rgba(0, 0, 0, 1)",
        accentSecondaryText: "rgba(0, 0, 0, 0.7)",
        accentDisabledText: "rgba(0, 0, 0, 0.4)",
      },
      // Interactive (from Vercel dark)
      interactive: {
        interactiveDefault: "rgba(255, 255, 255, 0.02)",
        interactiveHover: "rgba(255, 255, 255, 0.06)",
        interactivePressed: "rgba(255, 255, 255, 0.1)",
        interactiveDisabled: "rgba(255, 255, 255, 0.02)",
        interactiveAccent: "#ffffff",
        interactiveAccentHover: "rgba(222,222,222,1)",
        interactiveAccentPressed: "rgba(222,222,222,1)",
        interactiveAccentDisabled: "#737373",
        interactiveDestructive: "#2d1410",
        interactiveDestructiveHover: "#3d1a15",
        interactiveDestructivePressed: "#4d201a",
        interactiveDestructiveDisabled: "#1d0d0a",
      },
      // Legacy colors (from Vercel dark)
      colors: {
        background: "#050505",
        container: "#0a0a0a",
        primary: "#ffffff",
        textPrimary: "#f5f5f5",
        textSecondary: "#8c8c8c",
        linkText: "#818cf8",
        danger: "#f87171",
        success: "#4ade80",
        info: "#60a5fa",
        alert: "#fbbf24",
      },
      chartColors: {
        primary: "#ffffff",
      },
      // Strokes (from Vercel dark)
      strokeColors: {
        default: "rgba(255, 255, 255, 0.06)",
        interactiveEl: "rgba(255,255,255,0.15)",
        interactiveElHover: "rgba(255, 255, 255, 0.3)",
        interactiveElSelected: "rgba(255, 255, 255, 0.5)",
        emphasis: "rgba(255,255,255,0.25)",
        accent: "rgba(255,255,255,0.06)",
        accentEmphasis: "rgba(255,255,255,0.15)",
        info: "#1a1a2e",
        infoEmphasis: "rgba(128,185,255,1)",
        alert: "#2d2610",
        alertEmphasis: "#fbbf24",
        success: "#0d2818",
        successEmphasis: "#4ade80",
        danger: "#2d1410",
        dangerEmphasis: "#f87171",
      },
      // Chat colors (from Vercel dark)
      chatColors: {
        containerBg: "#050505",
        assistantBg: "#0a0a0a",
        assistantText: "#f5f5f5",
        userBg: "#1a1a1a",
        userText: "#f5f5f5",
      },
      // Shadow (from Vercel dark)
      shadow: {
        color: "rgba(0,0,0,1)",
        opacity: 0.5,
        blur: 6,
        spread: 0,
        offsetX: 0,
        offsetY: 1,
      },
      colorEngine: "default",
      fonts: {
        body: "Geist",
        heading: "Geist",
        mono: "Geist",
      },
      fontWeight: {},
      letterSpacing: {},
      fontSize: {},
      // Spacing (from Vercel dark)
      spacing: {
        spacing0: 0,
        spacing3xs: 2,
        spacing2xs: 4,
        spacingXs: 6,
        spacingS: 8,
        spacingM: 12,
        spacingL: 18,
        spacingXl: 24,
        spacing2xl: 36,
        spacing3xl: 48,
      },
      // Border radius (from Vercel dark)
      borderRadius: {
        rounded0: 0,
        rounded3xs: 1,
        rounded2xs: 2,
        roundedXs: 4,
        roundedS: 6,
        roundedM: 8,
        roundedL: 10,
        roundedXl: 12,
        rounded2xl: 14,
        rounded3xl: 16,
        rounded4xl: 20,
      },
      customCss: darkCustomCss,
    },
  },
};
