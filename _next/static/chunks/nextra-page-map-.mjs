import meta from "../../../src/pages/_meta.ts";
export const pageMap = [{
  data: meta
}, {
  name: "auth-stack",
  route: "/auth-stack",
  frontMatter: {
    "sidebarTitle": "Auth Stack"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "llm-pipeline",
  route: "/llm-pipeline",
  frontMatter: {
    "sidebarTitle": "Llm Pipeline"
  }
}, {
  name: "mongo-sharding",
  route: "/mongo-sharding",
  frontMatter: {
    "sidebarTitle": "Mongo Sharding"
  }
}, {
  name: "queue-engine",
  route: "/queue-engine",
  frontMatter: {
    "sidebarTitle": "Queue Engine"
  }
}, {
  name: "tracing-sdk",
  route: "/tracing-sdk",
  frontMatter: {
    "sidebarTitle": "Tracing Sdk"
  }
}];