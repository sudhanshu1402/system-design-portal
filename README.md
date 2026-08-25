# System Design Portal

[![Deploy](https://github.com/sudhanshu1402/system-design-portal/actions/workflows/deploy.yml/badge.svg)](https://github.com/sudhanshu1402/system-design-portal/actions/workflows/deploy.yml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Architecture write-ups for five backend systems I built as reference implementations: the problem, a Mermaid diagram, the decisions I would defend in review, and where each design stops working. Next.js and Nextra, static export to GitHub Pages.

Live: [sudhanshu1402.github.io/system-design-portal/](https://sudhanshu1402.github.io/system-design-portal/)

<img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/index.png" width="100%" alt="Portal index, Systems Architecture, with a six-page sidebar and a table of each write-up against the design question it answers." />

The index lists the write-ups by the design question each one answers, not by technology.

## The write-ups

|  |  |
| --- | --- |
| <img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/auth-stack.png" width="100%" alt="Diagram of a browser going through Express and Passport.js to an enterprise IdP, AWS Secrets Manager and an internal JWT." /><br />**[Enterprise Auth Gateway](https://sudhanshu1402.github.io/system-design-portal/auth-stack/)** turns a tenant's SAML assertion into one internal JWT. Code: [enterprise-auth-stack](https://github.com/sudhanshu1402/enterprise-auth-stack) | <img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/queue-engine.png" width="100%" alt="Diagram of a request enqueued to Redis in under a millisecond and drained by a scalable worker pool." /><br />**[Distributed Queue Engine](https://sudhanshu1402.github.io/system-design-portal/queue-engine/)** gets a 2 second dependency off the request path. Code: [distributed-queue-engine](https://github.com/sudhanshu1402/distributed-queue-engine) |
| <img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/mongo-sharding.png" width="100%" alt="Diagram of one mongos router splitting queries by region tag into EU, USA and KSA shards." /><br />**[Multi-Region Sharding](https://sudhanshu1402.github.io/system-design-portal/mongo-sharding/)** keeps EU data in the EU behind one connection string. Code: [multi-region-mongo-patterns](https://github.com/sudhanshu1402/multi-region-mongo-patterns) | <img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/llm-pipeline.png" width="100%" alt="Diagram of an orchestrator calling GPT-4o-mini, failing over to Gemini, then parsing both through a Zod schema." /><br />**[LLM Orchestration](https://sudhanshu1402.github.io/system-design-portal/llm-pipeline/)** keeps almost-valid model output out of the database. Code: [llm-assessment-pipeline](https://github.com/sudhanshu1402/llm-assessment-pipeline) |
| <img src="https://raw.githubusercontent.com/sudhanshu1402/system-design-portal/main/assets/screens/tracing-sdk.png" width="100%" alt="Diagram of a Node app sending trace-stamped Pino logs and OTLP gRPC spans to an OpenTelemetry Collector." /><br />**[Distributed Observability](https://sudhanshu1402.github.io/system-design-portal/tracing-sdk/)** ties a log line to the trace it happened in. Code: [otel-sdk-node](https://github.com/sudhanshu1402/otel-sdk-node) |  |

## Stack

Next.js 15 with `output: 'export'`, Nextra 3 and `nextra-theme-docs`, `@theguild/remark-mermaid`, TypeScript. To add a system, drop an `.mdx` file in `src/pages/` and add its slug to `src/pages/_meta.ts`. Theme and footer are `theme.config.jsx`.

## Develop

```bash
npm ci
npm run dev     # http://localhost:3000/system-design-portal
npm run build   # static export to ./out
npm run lint
```

`basePath` is `/system-design-portal`, so it serves under that path locally too.

## Deploy

`.github/workflows/deploy.yml` lints, builds and publishes `out/` on push to `main`. A lint failure stops the deploy.

`scripts/make-screens.sh` regenerates the screenshots with headless Chrome against the live site, at `1280x1800` so the diagram lands in frame. Run by hand, not gated in CI: a live capture is not byte-deterministic.

## License

MIT, see [LICENSE](LICENSE).
