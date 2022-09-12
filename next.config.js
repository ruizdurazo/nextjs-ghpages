const withPlugins = require('next-compose-plugins') // broken since next 12.2.0
const optimizedImages = require('next-optimized-images') // broken since next 12.2.0

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        /* config for next-optimized-images */
        optimizeImagesInDev: true,
        images: {
          loader: 'custom',
          disableStaticImages: true,
        },
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },

        handleImages: ['jpeg', 'png', 'jpg'],
      },
    ],
  ],
  {
    reactStrictMode: true,
    future: {
      // https://nextjs.org/docs/messages/webpack5
      // webpack5: true, // Causes inconsistent, annoying render error: 'x not found'
      webpack5: false, // deprecated, next 12+ forces webpack 5
    },
    webpack(config) {
      // Setup reading svgs as components
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })
      return config
    },
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  }
)
