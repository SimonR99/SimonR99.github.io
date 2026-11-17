# simonr99.github.io

Personal site of Simon Roy: PhD student in robot learning at Polytechnique Montréal and Mila, co-founder and CTO of [Aquilix](https://www.aquilix.ca/).

Built with [Astro](https://astro.build/) and published on GitHub Pages from the `gh-pages` branch.

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

## Publishing

```sh
npm run deploy
```

This builds the site and pushes `dist/` to the `gh-pages` branch, which GitHub Pages serves. The live site updates about a minute later. Commit and push your source changes to `master` as usual; that does not publish anything on its own.
