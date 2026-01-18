import { ThemePreset } from "./types";

// Common custom CSS for Perplexity theme
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
  border-radius: 16px 16px 16px 16px;
}

.crayon-shell-thread-composer__input-wrapper .crayon-icon-button {
  width: 40px;
}

.crayon-table child {
  border-radius: 0px;
}

.crayon-table-row:nth-child(even) {
  background-color: transparent;
}

.crayon-table thead {
  background-color: var(--crayon-highlight-subtle);
}

.c1-mini-card {
  padding: 10px;
}
`;

const lightCustomCss = `${commonCustomCss}
.crayon-shell-thread-composer__input-wrapper {
  display: flex;
  flex-direction: column;
  background-color: rgba(0,0,0,0.03);
  border: 1px solid rgba(0,0,0,0.08);
}
`;

const darkCustomCss = `${commonCustomCss}
.crayon-shell-thread-composer__input-wrapper {
  display: flex;
  flex-direction: column;
  background-color: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.12);
}
`;

export const perplexityPreset: ThemePreset = {
  name: "Perplexity",
  config: {
    light: {
      fills: {
        backgroundFills: "oklch(0.99 0 0)",
        containerFills: "oklch(1 0 0)",
        containerHoverFills: "rgba(240,240,240,1)",
        dangerFills: "rgba(216,-35,-14,0.04)",
        successFills: "rgba(-20,133,72,0.04)",
        infoFills: "rgba(-61,142,200,0.04)",
        alertFills: "rgba(215,151,0,0.04)",
      },
      text: {
        primaryText: "oklch(0.18 0.01 250)",
        secondaryText: "oklch(0.50 0.01 250)",
        linkText: "oklch(0.60 0.15 230)",
        dangerText: "oklch(0.54 0.24 28)",
        successText: "oklch(0.54 0.14 155)",
        infoText: "oklch(0.60 0.15 230)",
      },
      interactive: {
        interactiveAccent: "oklch(0.60 0.15 230)",
        interactiveAccentHover: "rgba(-57,133,188,1)",
        interactiveAccentPressed: "rgba(-55,128,180,1)",
        interactiveAccentDisabled: "rgba(-61,142,200,0.21)",
        interactiveDestructive: "rgba(216,-35,-14,0.04)",
        interactiveDestructiveHover: "rgba(203,-33,-13,1)",
        interactiveDestructivePressed: "rgba(194,-31,-13,1)",
      },
      colors: {
        background: "oklch(0.99 0 0)",
        container: "oklch(1 0 0)",
        primary: "oklch(0.60 0.15 230)",
        textPrimary: "oklch(0.18 0.01 250)",
        textSecondary: "oklch(0.50 0.01 250)",
        linkText: "oklch(0.60 0.15 230)",
        danger: "oklch(0.54 0.24 28)",
        success: "oklch(0.54 0.14 155)",
        info: "oklch(0.60 0.15 230)",
        alert: "oklch(0.72 0.15 78)",
      },
      chartColors: {
        primary: "oklch(0.60 0.15 230)",
      },
      strokeColors: {
        default: "rgba(45,45,45,0.06)",
        interactiveEl: "rgba(45,45,45,0.12)",
        interactiveElHover: "rgba(45,45,45,0.2)",
        interactiveElSelected: "rgba(45,45,45,0.3)",
        emphasis: "rgba(45,45,45,0.15)",
        accent: "rgba(59,130,246,0.2)",
        accentEmphasis: "rgba(59,130,246,0.4)",
        info: "#eff6ff",
        infoEmphasis: "#3b82f6",
        alert: "#fffbeb",
        alertEmphasis: "#f59e0b",
        success: "#ecfdf5",
        successEmphasis: "#10b981",
        danger: "#fef2f2",
        dangerEmphasis: "#ef4444",
      },
      chatColors: {
        containerBg: "oklch(0.99 0 0)",
        assistantBg: "oklch(0.985 0 0)",
        assistantText: "oklch(0.18 0.01 250)",
        userBg: "oklch(0.97 0.01 230)",
        userText: "oklch(0.18 0.01 230)",
      },
      shadow: {
        color: "rgba(14,18,22,1)",
        opacity: 0.04,
        blur: 12,
        spread: 0,
        offsetX: 0,
        offsetY: 1,
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
        rounded3xl: 18,
        rounded4xl: 24,
        roundedClickable: 810,
      },
      customCss: lightCustomCss,
    },
    dark: {
      // Fills
      fills: {
        backgroundFills: "#191A1A",
        containerFills: "#191A1A",
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
      // Text
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
      // Interactive
      interactive: {
        interactiveDefault: "rgba(255, 255, 255, 0.02)",
        interactiveHover: "rgba(255, 255, 255, 0.06)",
        interactivePressed: "rgba(255, 255, 255, 0.1)",
        interactiveDisabled: "rgba(255, 255, 255, 0.02)",
        interactiveAccent: "#00BCC9",
        interactiveAccentHover: "rgba(0,167,179,1)",
        interactiveAccentPressed: "rgba(0,167,179,1)",
        interactiveAccentDisabled: "rgba(0,167,179,0.5)",
        interactiveDestructive: "#2d1410",
        interactiveDestructiveHover: "#3d1a15",
        interactiveDestructivePressed: "#4d201a",
        interactiveDestructiveDisabled: "#1d0d0a",
      },
      // Legacy colors
      colors: {
        background: "#191A1A",
        container: "#191A1A",
        primary: "#00BCC9",
        textPrimary: "#f5f5f5",
        textSecondary: "#8c8c8c",
        linkText: "#818cf8",
        danger: "#f87171",
        success: "#4ade80",
        info: "#60a5fa",
        alert: "#fbbf24",
      },
      chartColors: {
        primary: "rgba(20,244,255,1)",
      },
      // Strokes
      strokeColors: {
        default: "rgba(255,255,255,0.1)",
        interactiveEl: "rgba(255,255,255,0.2)",
        interactiveElHover: "rgba(255,255,255,0.4)",
        interactiveElSelected: "rgba(255,255,255,1)",
        emphasis: "rgba(255,255,255,0.3)",
        accent: "rgba(255,255,255,0.06)",
        accentEmphasis: "rgba(255,255,255,0.2)",
        info: "#1a1a2e",
        infoEmphasis: "rgba(128,185,255,1)",
        alert: "#2d2610",
        alertEmphasis: "#fbbf24",
        success: "#0d2818",
        successEmphasis: "#4ade80",
        danger: "#2d1410",
        dangerEmphasis: "#f87171",
      },
      // Chat colors
      chatColors: {
        containerBg: "#191A1A",
        assistantBg: "#191A1A",
        assistantText: "#f5f5f5",
        userBg: "rgba(51,51,51,1)",
        userText: "#f5f5f5",
      },
      // Shadow
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
        body: "DM Sans",
        heading: "DM Sans",
        mono: "DM Sans",
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 500,
      },
      letterSpacing: {},
      fontSize: {},
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
        rounded3xl: 18,
        rounded4xl: 24,
        roundedClickable: 810,
      },
      customCss: darkCustomCss,
    },
  },
};

