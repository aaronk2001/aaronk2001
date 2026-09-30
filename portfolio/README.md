# Portfolio generator

The profile README, `projects.md` and `work/*.md` at the repo root are generated. Don't edit them by hand.

## Update the portfolio

1. Edit the content in `content/`:
   - `site.ts`: header, stats, about, now, contact
   - `experience.ts`, `skills.ts`, `certs.ts`
   - `projects.ts`: one entry per project. Set `status: "complete"` to move it into Selected work.
   - `caseStudies.ts`: the long-form pages in `work/`
2. Put images in `../assets/` and reference them as `/projects/<name>.webp` or `/work/<name>.webp`.
   Target size is 800x500 WebP, under 120 KB.
3. Build and commit:

```sh
bun install
bun run typecheck
bun run build
```

The build fails if any page contains a phone number, an email address, a missing image, or an em dash.
A project's GitHub link only appears once its repo is public (`REPOS` in `build.ts`).
CI (`.github/workflows/readme-check.yml`) fails if the generated files are out of date.
