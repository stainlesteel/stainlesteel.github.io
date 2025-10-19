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
    require('daisyui'),// No need to explicitly list daisyui here if you use the CSS-first approach
  ],
  daisyui: {
    themes: ["night"],
    logs: true,
  },
}
