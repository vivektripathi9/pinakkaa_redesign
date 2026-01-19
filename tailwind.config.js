/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // B2B/SaaS Professional Color Palette
        'primary': '#0A1B2E',      // Midnight Navy
        'secondary': '#102A43',    // Deep Blue Gray
        'accent': '#2F80ED',       // Electric Blue
        'text': '#EAF0F6',         // Soft White
        'muted': '#7A8CA3',        // Muted Gray
        // Legacy colors for backward compatibility (will update components)
        'obsidian': '#0A1B2E',     // Using primary as obsidian replacement
        'terminal-green': '#2F80ED', // Using accent as terminal-green replacement
        'electric-blue': '#2F80ED',  // Using accent
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 0.3s infinite',
        'cursor-blink': 'cursor-blink 1s infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'cursor-blink': {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
}
