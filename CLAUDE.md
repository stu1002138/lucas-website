# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal blog/portfolio site built with **Nuxt 3** (Vue 3), using **Bun** as the package manager. Bilingual (Traditional Chinese zh-TW default, English en-US). Deployed to **GitHub Pages** as a static site.

## Commands

```bash
bun install              # Install dependencies
bun run dev              # Start dev server (localhost:3000)
bun run generate         # Static site generation (pre-renders all pages)
bun run preview          # Preview production build locally
bun run deploy           # Deploy to GitHub Pages (.output/public)
```

No test suite is configured.

## Architecture

### Content System
All articles are Markdown files in `content/` managed by `@nuxt/content`. Content is organized by category and date:
- `content/{category}/{year}/{month}/{day}/{slug}.md` — Chinese (default)
- `content/en/{category}/{year}/{month}/{day}/{slug}.md` — English

Categories: `tech-dev`, `travel`, `food`, `note`

### Routing (pages/)
- `index.vue` — Portfolio/about homepage
- `archives.vue` — All articles listing
- `category/[name].vue` — Category listing page
- `[...slug].vue` — Catch-all route rendering markdown content via `@nuxt/content`

### i18n Strategy
Uses `@nuxtjs/i18n` with `prefix_except_default` — Chinese pages have no URL prefix, English pages use `/en/`. Locale files in `locales/zh-TW.json` and `locales/en-US.json`. In components, use `localePath()` for navigation and `switchLocalePath()` for language switching.

### Styling
UnoCSS (Tailwind-compatible atomic CSS). Global styles in `assets/css/main.css`. Components use scoped styles with utility classes. Dark/light theme managed via `composables/useColorTheme.ts` and Nuxt UI's `useColorMode()`.

### Key Modules
- `@nuxt/content` — Markdown content querying and rendering
- `@nuxt/ui` — UI component library
- `@unocss/nuxt` — Atomic CSS engine
- `@nuxtjs/i18n` — Internationalization
- `@nuxtjs/sitemap` — Auto-generated sitemap
- `@nuxt/image` — Image optimization
- `nuxt-security` — Security headers

### Layout & Components
Single `layouts/default.vue` wrapping all pages (Header + slot + Footer). Reusable content components in `components/content/` (Card, Keywords, PageIndex). Article pages include Utterances (GitHub-based) comments.
