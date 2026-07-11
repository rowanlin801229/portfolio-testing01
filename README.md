# Rowan Lin — Portfolio

Static HTML/CSS/JS portfolio deployed on Vercel.

## Tailwind CSS build

Only `faintv.html` uses Tailwind utilities. The Play CDN has been replaced with a pre-built stylesheet.

```bash
npm install          # first time only
npm run build:css    # writes assets/tailwind.css (~29KB minified)
npm run watch:css    # rebuild on change while editing faintv.html
```

After editing utility classes in `faintv.html`, run `npm run build:css` and commit `assets/tailwind.css`.

Other pages (`index.html`, case studies, `design-system.html`) use inline CSS only — no Tailwind build needed.
