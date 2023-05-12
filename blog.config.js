const BLOG = {
  title: 'Bricks Blog',
  author: 'lucky_bricks',
  email: 'bricks9711@outlook.com',
  // ↓ THIS BLOG LINK, NOT YOUR SOCIAL LINK ↓
  link: 'https://blog.bricksite.cn', // do not end with '/'
  description: 'simple&love.',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif'] - !!deprecated, do not modify this
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy this blog in a folder
  since: 2018, // If leave this empty, current year will be used.
  postsPerPage: 7,
  sortByDate: true,
  showSummary: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  prismjs_cdn: '', // default is cloudflare, if slow you can set 'https://npm.elemecdn.com/prismjs@1.29.0/components/'
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The link to generate OG image, don't end with a slash
  socialLink: 'https://github.com/luckyBricks',
  seo: {
    keywords: ['Blog', 'Website', 'Notion','博客','建站'],
    googleSiteVerification: '3hp6USRCXUH15GJFer1s4GhSfJoHbv6BGbVq2g25VyU', 
  },
  notionPageId:
    process.env.NOTION_PAGE_ID, 
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, 
  analytics: {
    provider: 'ga', 
    gaConfig: {
      measurementId: 'G-BP7YB3X3KH', 
    },
  },
  comment: {
    provider: 'cusdis', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false,
    },
    utterancesConfig: {
      repo: '',
    },
    cusdisConfig: {
      appId: 'fb3b3049-f527-4a1d-9b65-63493d4e003e', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js', // change this if you're using self-hosted version
    },
  },
  isProd: process.env.VERCEL_ENV === 'production', // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
};
// export default BLOG
module.exports = BLOG;
