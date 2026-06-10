# System Design Portal

Architecture write-ups for the production systems I have built, with Mermaid
diagrams and the reasoning behind each design. Built with Next.js + Nextra (MDX)
and deployed to GitHub Pages.

Live: [sudhanshu1402.github.io/system-design-portal](https://sudhanshu1402.github.io/system-design-portal)

## Systems documented

| Article | System | Repo |
| --- | --- | --- |
| [queue-engine](https://sudhanshu1402.github.io/system-design-portal/queue-engine) | Redis/BullMQ job queue: priority, backoff, horizontal workers | [distributed-queue-engine](https://github.com/sudhanshu1402/distributed-queue-engine) |
| [auth-stack](https://sudhanshu1402.github.io/system-design-portal/auth-stack) | B2B SSO gateway: SAML 2.0 + SCIM 2.0, multi-tenant | [enterprise-auth-stack](https://github.com/sudhanshu1402/enterprise-auth-stack) |
| [tracing-sdk](https://sudhanshu1402.github.io/system-design-portal/tracing-sdk) | OpenTelemetry wrapper: OTLP tracing, Pino, Prometheus | [otel-sdk-node](https://github.com/sudhanshu1402/otel-sdk-node) |
| [mongo-sharding](https://sudhanshu1402.github.io/system-design-portal/mongo-sharding) | MongoDB zone sharding for GDPR data residency | [multi-region-mongo-patterns](https://github.com/sudhanshu1402/multi-region-mongo-patterns) |
| [llm-pipeline](https://sudhanshu1402.github.io/system-design-portal/llm-pipeline) | Fault-tolerant LLM orchestration, dual-model fallback | [llm-assessment-pipeline](https://github.com/sudhanshu1402/llm-assessment-pipeline) |

## Stack

Next.js 14, Nextra (MDX docs theme), `@theguild/remark-mermaid` for diagrams.
Content lives in `src/pages/*.mdx`; navigation in `src/pages/_meta.ts`.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export
npm run lint
```

## Deploy

`.github/workflows/` builds with `next build` and publishes to GitHub Pages on
push to `main`. To add a system, drop a new `.mdx` file in `src/pages/` and add
it to `_meta.ts`.
