/** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
// }

//
// const path = require('path')
// const withOptimizedImages = require('next-optimized-images')
// module.exports = withOptimizedImages({
//   /* config for next-optimized-images */

//   images: {
//     loader: 'custom',
//     disableStaticImages: true,
//   },

//   sassOptions: {
//     includePaths: [path.join(__dirname, 'src/assets/scss')],
//   },

//   reactStrictMode: true,
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
// })

const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
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

      // handleImages: ['jpeg', 'png', 'svg'],
    },
  ],
  {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
  },
])
