import { Platform } from "react-native";

/**
 * GrainLens Design System
 *
 * Color philosophy:
 *  - Warm earth browns for structure and navigation (like soil and husks)
 *  - Golden amber for actions and highlights (like ripe paddy rice)
 *  - Cream/off-white backgrounds (like husked rice grain)
 *  - Green reserved ONLY for quality indicators (Premium, Good)
 *  - Red/amber for warnings and lower grades
 */

export const Colors = {
  light: {
    // Backgrounds
    background: "#FDFBF7",
    surface: "#F7F2EA",
    surfaceElevated: "#EFE6D5",

    // Text
    text: "#231C10",
    textSecondary: "#7D6539",
    textMuted: "#A68B5B",
    textOnDark: "#FDFBF7",

    // Brand
    primary: "#5C4A28",
    primaryLight: "#7D6539",
    accent: "#D97706",
    accentLight: "#F59E0B",
    accentSubtle: "#FEF3C7",

    // Borders
    border: "#E0D3BA",
    borderLight: "#EFE6D5",

    // Quality grades
    premium: "#15803D",
    gradeGood: "#4D7C0F",
    gradeFair: "#D97706",
    gradePoor: "#DC2626",

    // Functional
    tint: "#D97706",
    icon: "#7D6539",
    tabIconDefault: "#A68B5B",
    tabIconSelected: "#FBBF24",
    tabBar: "#3D311B",
    tabBarBorder: "#5C4A28",
  },
  dark: {
    background: "#1A150D",
    surface: "#231C10",
    surfaceElevated: "#3D311B",

    text: "#F7F2EA",
    textSecondary: "#C4AD85",
    textMuted: "#A68B5B",
    textOnDark: "#F7F2EA",

    primary: "#C4AD85",
    primaryLight: "#E0D3BA",
    accent: "#F59E0B",
    accentLight: "#FBBF24",
    accentSubtle: "#3D311B",

    border: "#3D311B",
    borderLight: "#231C10",

    premium: "#22C55E",
    gradeGood: "#84CC16",
    gradeFair: "#F59E0B",
    gradePoor: "#EF4444",

    tint: "#F59E0B",
    icon: "#C4AD85",
    tabIconDefault: "#A68B5B",
    tabIconSelected: "#FBBF24",
    tabBar: "#1A150D",
    tabBarBorder: "#3D311B",
  },
};

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded:
      "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});

/** Grade thresholds — used across the app for quality assessment */
export const GradeConfig = {
  premium: { min: 80, label: "Premium", color: "#15803D", bg: "#DCFCE7" },
  grade1: { min: 60, label: "Grade 1", color: "#4D7C0F", bg: "#ECFCCB" },
  grade2: { min: 40, label: "Grade 2", color: "#D97706", bg: "#FEF3C7" },
  poor: { min: 0, label: "Below Standard", color: "#DC2626", bg: "#FEE2E2" },
};

export function getGrade(score: number) {
  if (score >= GradeConfig.premium.min) return GradeConfig.premium;
  if (score >= GradeConfig.grade1.min) return GradeConfig.grade1;
  if (score >= GradeConfig.grade2.min) return GradeConfig.grade2;
  return GradeConfig.poor;
}
