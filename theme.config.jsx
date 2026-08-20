import { useConfig } from 'nextra-theme-docs'

const SITE = 'Sudhanshu Singh'

export default {
  logo: <strong>Sudhanshu Singh - Architecture Portfolio</strong>,
  project: {
    link: 'https://github.com/sudhanshu1402',
  },
  docsRepositoryBase: 'https://github.com/sudhanshu1402/system-design-portal/tree/main',
  // nextra 3 dropped useNextSeoProps; its default head hardcodes "– Nextra".
  head: function Head() {
    const { title, frontMatter } = useConfig()
    const pageTitle = title ? `${title} – ${SITE}` : SITE
    const description = frontMatter.description
    return (
      <>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        {description && <meta name="description" content={description} />}
        {description && <meta property="og:description" content={description} />}
      </>
    )
  },
  footer: {
    content: 'Sudhanshu Singh - Backend Engineer',
  },
}
