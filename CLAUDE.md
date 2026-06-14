# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Medical self-study notes website — a static SPA that renders Markdown files from `repo/` as a dashboard + content pages. Hosted on GitHub Pages.

## Architecture

### Single-file frontend: `docs/index.html`

Two views toggled by JS:

- **Dashboard** — landing page with topic cards, filter by status (全部/更新中/已归档), hero stats, external links
- **Content view** — fetches `.md` from `raw.githubusercontent.com`, renders with marked.js, right-side TOC sidebar for headings

Key JS functions:
- `renderDashboard()` — builds card grid and filters from `TOPICS` array
- `navigate(file, id)` — fetches markdown, renders, builds TOC
- `buildTOC()` — extracts h1/h2/h3 from rendered content, builds right sidebar TOC + mobile collapsible TOC
- `initCopyButtons()` — adds copy button to code blocks
- `renderMarkdown(text, filePath)` — marked.js renderer with relative path rewriting for images and links

### Content files: `repo/*.md`

Five markdown files, one per topic:
- `Bulk_RNA-seq.md` — transcriptomics analysis
- `Radiomics.md` — brain imaging (radiomics)
- `Cell_experiments.md` — cell biology experiments  
- `Ethology.md` — animal behavior
- `Data_processing.md` — experimental data processing (ImageJ protocols, WB analysis)

### GitHub Actions: `.github/workflows/`

- `update-readme-time.yml` — on push to main, reads `git log -1` for each `.md` file, updates "最后更新时间" in README.md
- `sync-index-dates.yml` — on push to `repo/*.md`, runs `node .github/scripts/sync-dates.js` to update `updated` field in `docs/index.html` TOPICS array
- `sync-dates.js` — reads each `.md` file's last commit date via `git log`, replaces corresponding `updated` date in index.html

## Content Style Guide

Tone: **self-study notes, not tutorials**. Key principles:
- Each section starts with a brief explanation of what the concept is and why it matters (1-3 sentences)
- Links are presented as proper markdown hyperlinks: `[title](url)`
- Write like personal lab notes — natural, not instructional
- Use proper academic terminology where appropriate, but no fixed templates or emoji classifications
- Blank lines between paragraphs and links for proper markdown rendering
- Protocols (like ImageJ steps) keep original formatting with backtick-quoted commands

## Key Files

| File | Purpose |
|------|---------|
| `docs/index.html` | Entire SPA (~900 lines, inline CSS + JS) |
| `repo/*.md` | Topic content (markdown) |
| `.github/workflows/sync-index-dates.yml` | Auto-updates topic dates on the web page |
| `.github/workflows/update-readme-time.yml` | Auto-updates README date table |
| `.github/scripts/sync-dates.js` | Script called by sync-index-dates.yml |

## Topic Data (`TOPICS` array in index.html)

```js
{ id: 'rna', label: '转录组学分析', icon: '🧬', file: 'repo/Bulk_RNA-seq.md',
  desc: '描述文字', status: 'archived', created: '2025-11-28', updated: '2026-06-14' }
```
- `status`: `'active'` (更新中) or `'archived'` (已归档)
- `updated`: auto-maintained by GitHub Action via `git log -1`
- `file`: path relative to repo root

## Deployment

GitHub Pages from `main` branch `/docs` folder.
URL: https://a-ben-mao.github.io/Medical_Self_Study_Repo/

No build step — `docs/index.html` is served as-is. Markdown content is fetched at runtime.
