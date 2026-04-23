module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080b16',
        neon: '#22d3ee',
        pink: '#f472b6',
        card: '#121729'
      },
      boxShadow: {
        glow: '0 0 20px rgba(34,211,238,0.35)'
      }
    }
  },
  plugins: []
};
