/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "Ubuntu",
        nun: 'Nunito'
      },
      colors: {
        primary: "#9cc6e8",
        "primary-content": "#19476c",
        "primary-dark": "#73aede",
        "primary-light": "#c5def2",

        secondary: "#e49ce8",
        "accent": "#68196c",
        "secondary-dark": "#d973de",
        "secondary-light": "#efc5f2",

        background: "#eff0f1",
        foreground: "#fbfbfb",
        border: "#dddfe1",

        copy: "#242629",
        "copy-light": "#60676c",
        "copy-lighter": "#858d93",

        success: "#9ce89c",
        warning: "#e8e89c",
        error: "#e89c9c",

        "success-content": "#196c19",
        "warning-content": "#6c6c19",
        "error-content": "#6c1919"
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

