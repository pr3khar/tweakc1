import { ThemeCustomization } from '../types/theme';

export interface ThemePreset {
  name: string;
  colors: string[]; // Primary colors for display
  config: ThemeCustomization;
}

export const themePresets: Record<string, ThemePreset> = {
  vercel: {
    name: 'Vercel',
    colors: ['#000000', '#fafafa', '#0070f3'],
    config: {
      colors: {
        background: 'oklch(0.995 0 0)',
        container: 'oklch(1 0 0)',
        primary: 'oklch(0 0 0)',
        textPrimary: 'oklch(0 0 0)',
        textSecondary: 'oklch(0.50 0 0)',
        linkText: 'oklch(0.55 0.215 255)',
        danger: 'oklch(0.55 0.22 27)',
        success: 'oklch(0.45 0.12 155)',
        info: 'oklch(0.55 0.215 255)',
        alert: 'oklch(0.75 0.15 80)',
      },
      chartColors: {
        color1: 'oklch(0 0 0)',
        color2: 'oklch(0.55 0.215 255)',
        color3: 'oklch(0.40 0 0)',
      },
      strokeColors: {
        base: 'oklch(0 0 0)',
        opacity: 0.06,
      },
      chatColors: {
        containerBg: 'oklch(0.995 0 0)',
        assistantBg: 'oklch(0.985 0 0)',
        assistantText: 'oklch(0 0 0)',
        userBg: 'oklch(0 0 0)',
        userText: 'oklch(1 0 0)',
      },
      shadow: {
        color: 'oklch(0 0 0)',
        opacity: 0.04,
        blur: 12,
        spread: 0,
        offsetX: 0,
        offsetY: 2,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: -0.01,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 0.5,
      },
    },
  },
  chatgpt: {
    name: 'ChatGPT',
    colors: ['#10A37F', '#19C37D', '#068664'],
    config: {
      colors: {
        background: 'oklch(0.995 0 0)',
        container: 'oklch(1 0 0)',
        primary: 'oklch(0.58 0.14 165)',
        textPrimary: 'oklch(0.20 0.01 250)',
        textSecondary: 'oklch(0.48 0.01 250)',
        linkText: 'oklch(0.58 0.14 165)',
        danger: 'oklch(0.54 0.23 27)',
        success: 'oklch(0.58 0.14 165)',
        info: 'oklch(0.60 0.18 235)',
        alert: 'oklch(0.72 0.15 78)',
      },
      chartColors: {
        color1: 'oklch(0.58 0.14 165)',
        color2: 'oklch(0.50 0.12 165)',
        color3: 'oklch(0.68 0.10 165)',
      },
      strokeColors: {
        base: 'oklch(0.20 0.01 250)',
        opacity: 0.08,
      },
      chatColors: {
        containerBg: 'oklch(0.995 0 0)',
        assistantBg: 'oklch(0.98 0 0)',
        assistantText: 'oklch(0.20 0.01 250)',
        userBg: 'oklch(0.98 0.01 250)',
        userText: 'oklch(0.20 0.01 250)',
      },
      shadow: {
        color: 'oklch(0.20 0.01 250)',
        opacity: 0.05,
        blur: 14,
        spread: 0,
        offsetX: 0,
        offsetY: 1,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: 0,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 0.5,
      },
    },
  },
  claude: {
    name: 'Claude',
    colors: ['#CC785C', '#E17B4C', '#A85A3C'],
    config: {
      colors: {
        background: 'oklch(0.985 0.01 45)',
        container: 'oklch(0.995 0.005 45)',
        primary: 'oklch(0.60 0.11 40)',
        textPrimary: 'oklch(0.25 0.02 40)',
        textSecondary: 'oklch(0.50 0.03 40)',
        linkText: 'oklch(0.60 0.11 40)',
        danger: 'oklch(0.55 0.22 28)',
        success: 'oklch(0.52 0.13 155)',
        info: 'oklch(0.58 0.18 235)',
        alert: 'oklch(0.70 0.14 75)',
      },
      chartColors: {
        color1: 'oklch(0.60 0.11 40)',
        color2: 'oklch(0.52 0.09 35)',
        color3: 'oklch(0.68 0.08 50)',
      },
      strokeColors: {
        base: 'oklch(0.60 0.11 40)',
        opacity: 0.10,
      },
      chatColors: {
        containerBg: 'oklch(0.985 0.01 45)',
        assistantBg: 'oklch(0.97 0.01 45)',
        assistantText: 'oklch(0.25 0.02 40)',
        userBg: 'oklch(0.95 0.02 230)',
        userText: 'oklch(0.25 0.02 230)',
      },
      shadow: {
        color: 'oklch(0.60 0.11 40)',
        opacity: 0.06,
        blur: 16,
        spread: 0,
        offsetX: 0,
        offsetY: 2,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: -0.005,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 0.625,
      },
    },
  },
  perplexity: {
    name: 'Perplexity',
    colors: ['#00A8E8', '#0080B8', '#006090'],
    config: {
      colors: {
        background: 'oklch(0.99 0 0)',
        container: 'oklch(1 0 0)',
        primary: 'oklch(0.60 0.15 230)',
        textPrimary: 'oklch(0.18 0.01 250)',
        textSecondary: 'oklch(0.50 0.01 250)',
        linkText: 'oklch(0.60 0.15 230)',
        danger: 'oklch(0.54 0.24 28)',
        success: 'oklch(0.54 0.14 155)',
        info: 'oklch(0.60 0.15 230)',
        alert: 'oklch(0.72 0.15 78)',
      },
      chartColors: {
        color1: 'oklch(0.60 0.15 230)',
        color2: 'oklch(0.52 0.13 230)',
        color3: 'oklch(0.68 0.12 230)',
      },
      strokeColors: {
        base: 'oklch(0.18 0.01 250)',
        opacity: 0.06,
      },
      chatColors: {
        containerBg: 'oklch(0.99 0 0)',
        assistantBg: 'oklch(0.985 0 0)',
        assistantText: 'oklch(0.18 0.01 250)',
        userBg: 'oklch(0.97 0.01 230)',
        userText: 'oklch(0.18 0.01 230)',
      },
      shadow: {
        color: 'oklch(0.18 0.01 250)',
        opacity: 0.04,
        blur: 12,
        spread: 0,
        offsetX: 0,
        offsetY: 1,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: 0,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 0.5,
      },
    },
  },
  twitter: {
    name: 'Twitter',
    colors: ['#1DA1F2', '#0F1419', '#536471'],
    config: {
      colors: {
        background: 'oklch(0.985 0 0)',
        container: 'oklch(1 0 0)',
        primary: 'oklch(0.64 0.19 234)',
        textPrimary: 'oklch(0.15 0.01 250)',
        textSecondary: 'oklch(0.43 0.01 250)',
        linkText: 'oklch(0.64 0.19 234)',
        danger: 'oklch(0.52 0.24 25)',
        success: 'oklch(0.50 0.13 155)',
        info: 'oklch(0.64 0.19 234)',
        alert: 'oklch(0.70 0.14 75)',
      },
      chartColors: {
        color1: 'oklch(0.64 0.19 234)',
        color2: 'oklch(0.55 0.16 234)',
        color3: 'oklch(0.45 0.12 234)',
      },
      strokeColors: {
        base: 'oklch(0.15 0.01 250)',
        opacity: 0.08,
      },
      chatColors: {
        containerBg: 'oklch(0.985 0 0)',
        assistantBg: 'oklch(0.97 0 0)',
        assistantText: 'oklch(0.15 0.01 250)',
        userBg: 'oklch(0.64 0.19 234)',
        userText: 'oklch(1 0 0)',
      },
      shadow: {
        color: 'oklch(0.15 0.01 250)',
        opacity: 0.06,
        blur: 16,
        spread: 0,
        offsetX: 0,
        offsetY: 2,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: 0,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 1,
      },
    },
  },
  t3chat: {
    name: 'T3 Chat',
    colors: ['#A855F7', '#7C3AED', '#581C87'],
    config: {
      colors: {
        background: 'oklch(0.13 0.03 285)',
        container: 'oklch(0.17 0.04 285)',
        primary: 'oklch(0.70 0.25 292)',
        textPrimary: 'oklch(0.97 0.01 285)',
        textSecondary: 'oklch(0.65 0.05 285)',
        linkText: 'oklch(0.78 0.24 292)',
        danger: 'oklch(0.58 0.23 27)',
        success: 'oklch(0.60 0.16 150)',
        info: 'oklch(0.65 0.20 245)',
        alert: 'oklch(0.73 0.17 80)',
      },
      chartColors: {
        color1: 'oklch(0.70 0.25 292)',
        color2: 'oklch(0.60 0.23 275)',
        color3: 'oklch(0.78 0.22 310)',
      },
      strokeColors: {
        base: 'oklch(0.97 0.01 285)',
        opacity: 0.12,
      },
      chatColors: {
        containerBg: 'oklch(0.15 0.04 285)',
        assistantBg: 'oklch(0.20 0.05 285)',
        assistantText: 'oklch(0.95 0.01 285)',
        userBg: 'oklch(0.70 0.25 292)',
        userText: 'oklch(0.99 0 0)',
      },
      shadow: {
        color: 'oklch(0.05 0.02 285)',
        opacity: 0.5,
        blur: 20,
        spread: 0,
        offsetX: 0,
        offsetY: 2,
      },
      colorEngine: 'default',
      fonts: {
        body: 'Inter',
        heading: 'Inter',
        mono: 'JetBrains Mono',
      },
      letterSpacing: {
        base: -0.005,
      },
      spacing: {
        base: 1,
      },
      borderRadius: {
        base: 0.75,
      },
    },
  },
};

export function getPresetNames(): string[] {
  return Object.keys(themePresets);
}

export function getPreset(name: string): ThemePreset | undefined {
  return themePresets[name];
}
