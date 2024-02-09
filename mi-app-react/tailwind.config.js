/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}", 
  ],
  theme: {
    extend: { 

    },
  },
  plugins: [
  ],
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
  theme: {
    extend: {
      screens: {
        'lg': '1250px',
      },
    },
  },
  
  // Resto de la configuración...
};