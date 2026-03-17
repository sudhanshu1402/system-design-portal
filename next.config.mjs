import nextra from 'nextra';
import { remarkMermaid } from '@theguild/remark-mermaid';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  mdxOptions: {
    remarkPlugins: [remarkMermaid],
  }
});

export default withNextra({
  reactStrictMode: true,
});
