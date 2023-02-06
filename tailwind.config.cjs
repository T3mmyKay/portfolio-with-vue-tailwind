/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-bg': "url('public/images/img_10.jpg')"
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      },
      colors: {
        'theme': "#5959FF",
        'light-blue': "#060642C4",
        'navy-blue': "#060642",
        'purple': "#B958BF",
        'whitish': "#FFFFFF80",
        'purple-outline': "#F573E8",
        'btn-color': "#F469E6BD",
        'svg-bg': "#B64FBB",
        'footer':"#45C1C1",
      }
    },
  },
  plugins: [],
}
