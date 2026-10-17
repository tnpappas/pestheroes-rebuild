# Social share tags (Open Graph + Twitter)

Every page in sitemap.xml must carry this block in <head>, placed right after the
`<link rel="canonical" ...>` line. The homepage (index.html) is the reference.

There is no build step or include in this repo (plain static HTML), so the block is
copied inline into each page by hand. When a new page is added, paste this block and
fill the five page values from the page's own title, description and canonical.

    <meta property="og:type" content="PAGE_TYPE">
    <meta property="og:title" content="PAGE_TITLE">
    <meta property="og:description" content="PAGE_DESCRIPTION">
    <meta property="og:url" content="PAGE_CANONICAL">
    <meta property="og:image" content="PAGE_IMAGE">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="PAGE_TITLE">
    <meta name="twitter:description" content="PAGE_DESCRIPTION">

Rules:
- PAGE_TYPE is `website` for normal pages, `article` for /post/ pages.
- PAGE_TITLE is the page's <title> text, unchanged.
- PAGE_DESCRIPTION is the page's meta description, unchanged.
- PAGE_CANONICAL is the page's <link rel="canonical"> value, unchanged.
- PAGE_IMAGE is https://www.pestheroes.com/images/og-image.jpg by default, or the
  post's own hero image on a stable path for /post/ pages.
- Use https://www.pestheroes.com everywhere, never the vercel.app domain.
- twitter:title and twitter:description must match the og values exactly.

Current status: all 33 pages (index, 20 top level, 12 posts) carry the full block.
See docs/section1-proof/tag-matrix.txt for the per-page count check.
