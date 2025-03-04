/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        textColor: "var(--textColor)",
        linkColor: "var(--linkColor)",
        linkHoverColor: "var(--linkHoverColor)",
        headingColor: "var(--headingColor)",
        rGradient: "var(--rGradient)",
        overlayColor: "var(--overlayColor)",
      },
    },
  },
  plugins: [],
};
