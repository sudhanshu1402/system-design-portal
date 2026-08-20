import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
});

export default withNextra({
  reactStrictMode: true,
  // Keeps Nextra's _meta.ts out of Next 15's page type-check; its loader still reads it.
  pageExtensions: ['tsx', 'mdx'],
  basePath: '/system-design-portal',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
});
