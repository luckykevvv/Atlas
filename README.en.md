# Atlas

[中文](./README.md) | English

Atlas is a dark Astro personal website template for students, makers, and design-engineering learners. It is built for course notes, small projects, writing, resume-style experience, and personal links.

The template uses Astro Content Collections for blog posts and projects, so most content is typed, file-based, and easy to replace.

## ✨ Demo

[![Astro 6](https://img.shields.io/badge/Astro-6-ff5d01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
![Node.js >= 22.12](https://img.shields.io/badge/Node.js-%3E%3D22.12-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Static or Node SSR](https://img.shields.io/badge/Output-Static%20%2F%20Node%20SSR-111827?style=for-the-badge)

🌐 Live preview: [https://blog.chihaya-anon.uk/](https://blog.chihaya-anon.uk/)

🌧️ Configurable background, rain animation, bilingual navigation, status card, and personal quick links all come together in this demo.

![Atlas demo screenshot](./public/demo.png)

## Features

- Dark visual style with a student-friendly personal homepage
- Avatar, status card, quick links, project cards, notes, resume, and contact pages
- Built-in Chinese and English routes: Chinese by default, English under `/en/`
- Blog posts written in Markdown
- Project case studies written in Markdown
- Central site copy and navigation in `src/config/site.ts`
- Astro Content Collections powered by `src/content.config.ts`
- Tailwind CSS v4 through `@tailwindcss/vite`
- Static output by default, with optional Node SSR mode for live server features

## Project Structure

```text
src/
  components/        Reusable UI components
  config/            Site text, nav, social links, resume data
  content/           Blog and project Markdown content
  layouts/           Base layout and Markdown layout
  pages/             Route pages
  styles/            Global Tailwind styles
public/
  avatar.png         Default avatar placeholder
  favicon.svg        Site icon
```

## Getting Started

Install dependencies:

```sh
npm install
```

You can also use the interactive setup script to choose static mode or dynamic server mode:

```sh
npm run setup
```

Start the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Customize

Most template text can be edited in:

```text
src/config/site.ts
```

Use this file to update:

- Site name and description
- Chinese and English site copy
- Navigation
- Avatar path
- Social links
- Homepage hero text
- Status card
- Quick links
- About, projects, blog, resume, and contact page copy
- Skills and experience
- Shared UI labels

## Internationalization

Atlas uses Chinese as the default route and English under:

```text
/en/
/en/about/
/en/projects/
/en/blog/
/en/resume/
/en/contact/
```

Language copy lives in:

```text
src/config/site.ts
```

Use the `zh` config for Chinese and the `en` config for English. The Header includes an automatic language switcher.

Blog posts use one shared content set across all languages. Projects can use the `lang` frontmatter field for Chinese and English versions:

```md
---
lang: "zh"
title: "中文项目"
---
```

```md
---
lang: "en"
title: "English Project"
---
```

Replace the default avatar at:

```text
public/avatar.png
```

Replace the browser tab icon at:

```text
public/favicon.svg
```

Social icons can be configured in `src/config/site.ts`. The `icon` field supports short text or an image URL:

```ts
{ label: 'GitHub', href: 'https://github.com/yourname', icon: 'https://cdn.simpleicons.org/github/white' }
```

The email icon uses `emailIcon` in the same config file:

```ts
emailIcon: 'https://cdn.simpleicons.org/gmail/white'
```

Hero headings, page headings, descriptions, and the contact panel heading support manual line breaks with `\n`:

```ts
headline: 'First line\nSecond line'
```

## Content

Blog posts live in:

```text
src/content/blog/
```

Projects live in:

```text
src/content/projects/
```

Example blog post:

```md
---
title: "My First Note"
description: "A short description for the note."
pubDate: 2026-05-20
tags: ["Astro", "Study"]
draft: false
---

Write your note here.
```

Example project:

```md
---
lang: "en"
title: "Course Dashboard"
description: "A small dashboard made for a class project."
date: 2026-05-20
tags: ["Astro", "Tailwind"]
role: "Student Project"
featured: true
---

Write your project story here.
```

## Wiki Links And Knowledge Graph

Blog Markdown supports Obsidian-style wiki links:

```md
[[design-engineering]]
[[astro-content-collections|Astro Content Collections]]
```

During build, these are converted into internal blog links. Blog posts also show backlinks at the bottom when other notes mention them.

Wiki links are resolved by filename first, so you usually do not need to include the full folder path. For example, this file:

```text
src/content/blog/course-notes/week-02-expectation.md
```

can be linked as:

```md
[[week-02-expectation]]
```

If two files share the same name, use the full relative path:

```md
[[course-notes/week-02-expectation]]
```

The knowledge graph page lives at:

```text
/graph
```

The graph scans blog posts, tags, and wiki-link relationships. Post nodes can be clicked to open the related blog post.

## Deployment

Atlas builds to static files in `dist/`.

```sh
npm run build
```

Deploy the generated site with any static hosting platform. For Astro-specific deployment notes, see the [Astro deployment guide](https://docs.astro.build/en/guides/deploy/).

## Dynamic Mode

Atlas can still be built as a static site by default. If you want server-side features such as live Steam status, use dynamic server mode:

```sh
npm install
npm run build:dynamic
npm run start
```

Default URL:

```text
http://SERVER_IP:4321
```

Steam status requires these server environment variables:

```sh
STEAM_API_KEY=your Steam Web API key
STEAM_ID_64=your 64-bit Steam ID
HOST=0.0.0.0
PORT=4321
ATLAS_DATA_DIR=.atlas-data
```

Your Steam profile and game details must be public. Otherwise the site can only show offline or unavailable status. Dynamic visitor counts are stored in a local JSON file under `ATLAS_DATA_DIR`. Do not commit a real `.env`; this repo only includes `.env.example`.

For long-running use, run it with PM2. `pm2:start` builds the dynamic server first, then starts the production server:

```sh
npm install
npm install -g pm2
npm run pm2:start
pm2 save
```

Useful commands:

```sh
npm run pm2:restart
npm run pm2:stop
pm2 logs atlas-dynamic
```

Dynamic mode generates a Node SSR server instead of static-only files. It is useful for personal sites, private previews, or a VPS you control. For public access, put Nginx or Caddy with HTTPS in front of it.

If you only need the static site and do not use live Steam status, keep using:

```sh
npm install --omit=optional
npm run build
```

## License

This project is licensed under the [GNU General Public License v3.0](./LICENSE).
