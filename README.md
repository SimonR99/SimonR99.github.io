# simonr99.github.io

Personal site of Simon Roy: PhD student in robot learning at Polytechnique Montréal and Mila, co-founder and CTO of [Aquilix](https://www.aquilix.ca/).

Built with [Astro](https://astro.build/) and deployed to GitHub Pages by `.github/workflows/deploy.yml`.

## Editing content

All content lives in `src/data/`:

- `profile.ts`: bio links, Aquilix block, encoded contact email
- `news.ts`: short dated updates (keep the latest five or six)
- `publications.ts`: papers
- `cv.ts`: experience, teaching, education, distinctions
- `projects.ts`: selected projects

To change the contact email, encode it (reversed, then base64) and paste the result into `emailEncoded`:

```sh
node -e 'console.log(btoa([...process.argv[1]].reverse().join("")))' you@example.com
```

## Local development

```sh
npm install
npm run dev     # http://localhost:4001
npm run build   # outputs to dist/
```
