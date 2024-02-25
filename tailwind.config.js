/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  // daisyui: {
  //   themes: ["nord"],
  // },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#3d692c",
          "secondary": "#afd89d",
          "accent": "#82bd69",
          "neutral": "#13250e",
          "base-100": "#f6faf3",
          "info": "#3498db",
          "success": "#27ae60",
          "warning": "#f39c12",
          "error": "#e74c3c",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
