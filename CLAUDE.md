# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

GrainLens (package name: `unido-rice`) is a React Native mobile app built with Expo SDK 54, using file-based routing via expo-router. The app has four tab screens: Home, Capture, History, and Info. It is styled with NativeWind (Tailwind CSS for React Native).

## Commands

- **Start dev server:** `npx expo start`
- **Run on Android:** `npm run android`
- **Run on iOS:** `npm run ios`
- **Run on web:** `npm run web`
- **Lint:** `npm run lint` (uses eslint-config-expo flat config)
- **Install dependencies:** `npm install`

## Architecture

- **Routing:** Expo Router with file-based routing in `app/`. The root layout (`app/_layout.tsx`) wraps a `Stack` navigator with a `ThemeProvider`. The `(tabs)` group (`app/(tabs)/_layout.tsx`) defines a bottom tab navigator with four tabs.
- **Styling:** NativeWind v4 — use `className` props with Tailwind utility classes on React Native components. The Tailwind/NativeWind pipeline is configured across three files: `tailwind.config.js` (content paths, nativewind preset), `babel.config.js` (nativewind babel preset with JSX import source), and `metro.config.js` (withNativeWind wrapper pointing to `app/globals.css`).
- **Theming:** Dual light/dark theme support. `constants/theme.ts` exports `Colors` and `Fonts` objects. The `useColorScheme` hook (in `hooks/`) has platform-specific implementations (`.ts` and `.web.ts`).
- **Path aliases:** `@/*` maps to the project root (configured in `tsconfig.json`).
- **Components:** Reusable components live in `components/`. Platform-specific variants use file extensions (e.g., `icon-symbol.ios.tsx` vs `icon-symbol.tsx`).

## Key Conventions

- TypeScript with strict mode enabled.
- React Native New Architecture is enabled (`newArchEnabled: true`).
- Typed routes and React Compiler experiments are enabled in `app.json`.
- Components use kebab-case filenames (e.g., `themed-text.tsx`, `haptic-tab.tsx`).
- VSCode is configured to auto-fix, organize imports, and sort members on save.
