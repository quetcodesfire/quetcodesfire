module.exports = {
  siteMetadata: {
    description: `Official Website of QuetCodesFire`,
    lang: 'en',
    siteType: 'website', // https://ogp.me/#types
    siteUrl: 'https://quetcodesfire.com/',
    title: 'QuetCodesFire'
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'QuetCodesFire',
        short_name: 'QuetCodesFire',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#a2466c',
        display: 'standalone',
        // icon: 'src/assets/images/zurg-icon.svg'
        icon: 'src/assets/images/favicon.ico'
      }
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap'
  ]
};
