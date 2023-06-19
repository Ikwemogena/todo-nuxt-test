/** @type {import('tailwindcss').Config} */


// const FormKitVariants = require('@formkit/themes/tailwindcss')



module.exports = {
  // purge: {
  //   content: [
  //     'components/FormView.vue',
  //   ],
  // },
  content: [
    // './src/**/*.{html,js,vue}',
    // './node_modules/@formkit/themes/dist/tailwindcss/genesis/index.cjs',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  // plugins: [FormKitVariants],
}
