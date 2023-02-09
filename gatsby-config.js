module.exports = {
  pathPrefix: '/running_page', // Change to `/running_page` when running on github pages
  siteMetadata: {
    siteTitle: '丁小山❤️跑步🏃',
    siteUrl: 'https://thetime.space',
    logo: 'https://s3.bmp.ovh/imgs/2023/02/09/4f2c07dfc7841b8c.jpg',
    description: 'Personal site and blog',
    navLinks: [
      {
        name: 'Blog',
        url: 'https://linktr.ee/app.le',
      },
      /*{
        name: '书影音',
        url: 'https://conge.github.io/books/',
      },
      {
        name: '跑步周记',
        url: 'https://conge.github.io/category/#%E6%8A%98%E8%BF%94%E7%82%B9',
      },
      {
        name: '育儿周记',
        url: 'https://conge.github.io/category/#%E7%88%B6%E8%8C%83%E5%AD%A6%E5%A0%82',
      },*/
      {
        name: 'About',
        url: 'https://mp.weixin.qq.com/s/bXC6TQ-quYRiPB7lOuQKAw',
      },
    ],
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/static/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-alias-imports',
      options: {
        rootFolder: './',
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false,
          },
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#e1e1e1',
        theme_color: '#e1e1e1',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        runtimeCaching: [
          {
            urlPattern: /^https?:.*\/icons\/.*\.png/,
            handler: `CacheFirst`,
          },
          {
            urlPattern:
              /^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:\/\/api\.mapbox\.com\//,
            handler: `StaleWhileRevalidate`,
          },
          {
            urlPattern: /^https?:.*\/page-data\/.*\.json/,
            handler: `StaleWhileRevalidate`,
          },
        ],
        skipWaiting: true,
        clientsClaim: true,
      },
    },
  ],
};
