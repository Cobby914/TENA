import { extendTheme } from "@chakra-ui/react";

/**
 * Chakra theme aligned with CSS variables in styles/globals.css.
 * Prefer semantic tokens: color="brand.primary", fontFamily="body", etc.
 */
export const theme = extendTheme({
  fonts: {
    heading: "var(--font-sans)",
    body: "var(--font-sans)",
  },
  colors: {
    brand: {
      primary: "var(--color-brand-primary)",
      accent: "var(--color-brand-accent)",
      accentHover: "var(--color-brand-accent-hover)",
      heading: "var(--color-brand-heading)",
    },
    neutral: {
      text: "var(--color-neutral-text)",
      secondary: "var(--color-neutral-secondary)",
      strong: "var(--color-neutral-strong)",
      muted: "var(--color-neutral-muted)",
      subtle: "var(--color-neutral-subtle)",
    },
    surface: {
      default: "var(--color-surface-default)",
      soft: "var(--color-surface-soft)",
      muted: "var(--color-surface-muted)",
    },
    border: {
      default: "var(--color-border-default)",
      light: "var(--color-border-light)",
    },
  },
  radii: {
    sm: "var(--radius-sm)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
  },
  shadows: {
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          borderRadius: "lg",
          overflow: "hidden",
        },
      },
    },
  },
  styles: {
    global: {
      body: {
        color: "neutral.text",
        bg: "surface.soft",
      },
    },
  },
});
