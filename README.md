# System Design Portal

[![Deploy](https://github.com/sudhanshu1402/system-design-portal/actions/workflows/deploy.yml/badge.svg)](https://github.com/sudhanshu1402/system-design-portal/actions/workflows/deploy.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Architecture write-ups for five backend systems I built as reference
implementations, with Mermaid diagrams and the reasoning behind each design.
Built with Next.js + Nextra (MDX) and deployed as a static site to GitHub Pages.

Live: [sudhanshu1402.github.io/system-design-portal/](https://sudhanshu1402.github.io/system-design-portal/)

## Systems documented

Each page is a short deep-dive: one or more Mermaid diagrams plus the trade-offs
behind the design, linking back to the source repo.

| Article | System | Repo |
| --- | --- | --- |
| [auth-stack](https://sudhanshu1402.github.io/system-design-portal/auth-stack/) | B2B SSO gateway: SAML 2.0 + SCIM 2.0, multi-tenant | [enterprise-auth-stack](https://github.com/sudhanshu1402/enterprise-auth-stack) |
| [queue-engine](https://sudhanshu1402.github.io/system-design-portal/queue-engine/) | Redis/BullMQ job queue: priority, backoff, horizontal workers | [distributed-queue-engine](https://github.com/sudhanshu1402/distributed-queue-engine) |
| [mongo-sharding](https://sudhanshu1402.github.io/system-design-portal/mongo-sharding/) | MongoDB zone sharding for GDPR data residency | [multi-region-mongo-patterns](https://github.com/sudhanshu1402/multi-region-mongo-patterns) |
| [llm-pipeline](https://sudhanshu1402.github.io/system-design-portal/llm-pipeline/) | Fault-tolerant LLM orchestration, dual-model fallback | [llm-assessment-pipeline](https://github.com/sudhanshu1402/llm-assessment-pipeline) |
| [tracing-sdk](https://sudhanshu1402.github.io/system-design-portal/tracing-sdk/) | OpenTelemetry wrapper: OTLP tracing, Pino, Prometheus | [otel-sdk-node](https://github.com/sudhanshu1402/otel-sdk-node) |

## Stack

- Next.js 14 with static export (`output: 'export'`)
- Nextra 3 + `nextra-theme-docs` (MDX docs theme, sidebar, search)
- `@theguild/remark-mermaid` for rendering the diagrams
- TypeScript

Content lives in `src/pages/*.mdx`. Sidebar order and titles are in
`src/pages/_meta.ts`. Theme, logo, and footer are in `theme.config.jsx`.

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000/system-design-portal
npm run build   # static export to ./out
npm run lint
```

The site uses `basePath: '/system-design-portal'`, so locally it serves under
that path, not the root.

## Deploy

`.github/workflows/deploy.yml` runs on push to `main` (and via manual dispatch):
it runs `npm run lint` and `npm run build`, uploads the exported `out/`
directory, and publishes it to GitHub Pages. Lint failures stop the deploy.

To add a system: drop a new `.mdx` file in `src/pages/` and add its slug to
`src/pages/_meta.ts`.

## License

MIT — see [LICENSE](LICENSE).
