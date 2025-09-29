/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔴 BU SATIR ŞART: Angular dosyalarını taraması için
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        brandDark: "#1E293B",
        brandAccent: "#38BDF8",
        brandMint: "#A7F3D0",
        brandPurple: "#C4B5FD",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      },
    },
  },
  plugins: [],
};
