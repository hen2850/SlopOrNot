/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slop: {
          bg: '#0a0a0a', // Dark background
          card: '#1a1a1a', // Card background
          text: '#ffffff', // Primary text
          muted: '#a3a3a3', // Muted text
          green: '#00ff41', // Neon Green (Not Slop)
          red: '#ff0033', // Neon Red (Slop)
          accent: '#7000ff', // Purple accent
        }
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
