// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '_layouts/*.html',    // Scan Jekyll layouts
    '_includes/*.html',   // Scan Jekyll includes
    '*.html',                // Scan index.html
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4-fixed': 'repeat(4, 1fr)',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["retro"],
    logs: true,
  },
}
