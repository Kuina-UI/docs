<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/kuina-logo-dark.svg" />
  <img src="public/kuina-logo-light.svg" alt="Kuina UI logo" height="64" />
</picture>

# Kuina UI — Docs

Documentation site for [Kuina UI](https://github.com/Kuina-UI/vue), a library of accessible, typed Vue components built from scratch with Tailwind CSS v4, in light and dark themes.

The site is built with [Docus](https://docus.dev), on top of Nuxt, Nuxt Content and Nuxt UI.

> [!NOTE]
> Kuina UI is in early development. The `@kuina-ui/vue` package is not published on npm yet.

## Getting started

The site needs Node.js 22.22+ or 24.15+.

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Scripts

| Command         | Effect                                                    |
| --------------- | --------------------------------------------------------- |
| `npm run dev`   | serves the site on http://localhost:3000 with live reload |
| `npm run build` | builds the site for production in `.output/`              |

## Project structure

```
content/       pages written in Markdown, one folder per section
app/           Docus customizations: header, Nuxt / Vue switch, home hero
public/        logos and static files
```

Numbered folders in `content/` become the sections in the tabs under the header (`1.getting-started/` is **Get Started**), and numbered files set the order of the pages inside a section.

## Writing pages

Pages are Markdown with [MDC](https://content.nuxt.com/docs/files/markdown) components from Nuxt UI: `::code-group`, `::steps`, `::note`, `::tip`, `::card-group`, `::accordion`…

When the instructions differ between Nuxt and Vue, wrap each version in `::framework-only`. The **Nuxt / Vue** switch in the header shows the right one:

```md
::framework-only
#nuxt
Add the Kuina UI module to `nuxt.config.ts`.

#vue
Import the components you use from `@kuina-ui/vue`.
::
```

## Contribution

Found a mistake or something unclear? [Open an issue](https://github.com/Kuina-UI/docs/issues/new), or use the **Edit this page** link at the bottom of any page.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) (`feat: …`, `fix: …`, `docs: …`), in English.
