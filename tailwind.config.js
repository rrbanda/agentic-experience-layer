/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      colors: {
        'aep-navy': '#0A1628',
        'aep-slate': '#1E293B',
        'aep-blue': '#2563EB',
        'aep-sky': '#0EA5E9',
        'aep-purple': '#7C3AED',
        'aep-violet': '#8B5CF6',
        'aep-indigo': '#6366F1',
      },
    },
  },
  plugins: [],
}
