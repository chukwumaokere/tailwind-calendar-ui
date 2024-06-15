/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '.625rem',
      },
    },
  },
  plugins: [],
  safelist: [
    ...[...Array(8).keys()].flatMap(i => [`col-start-[${i+1}]`, `col-span-[span_${i+1}/_span_${i+1}]`, `grid-cols-[70px,repeat(${i+1},150px)]`]),
    ...[...Array(25).keys()].flatMap(i => [`row-start-[${i+1}]`, `row-[span_${i+1}/_span_${i+1}]`, `grid-rows-[auto,repeat(${i+1},50px)]`]),
  ]
}