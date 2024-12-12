/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Questrial: ["var(--font-questrial)"],
        Poppins: ["var(--font-poppins)"],
        Roboto: ["var(--font-roboto)"],
      },
      colors: {
        customGray: "#f4f4f4",
        Arrowcolor: "#d8d8d8",
        customGreen: "#2CAC68",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        smm: "950px",
      },
      boxShadow: {
        dark_shadow: "0 0 10px rgba(0,0,0,0.2),0 0 10px rgba(0,0,0,0.2)",
        dark_shadow_hover:
          "1px 1px 10px rgba(0,0,0,0.6),1px 1px 10px rgba(0,0,0,0.6)",
        light_shadow:
          "0 0 10px rgba(255,255,255,0.2),0 0 10px rgba(255,255,255,0.2)",
        light_shadow_hover:
          "1px 1px 10px rgba(255,255,255,0.5),1px 1px 10px rgba(255,255,255,0.5)",
        social_icons_shadow:
          " 0 0 10px rgba(0,0,0,0.1), 0 0 10px rgba(0,0,0,0.1)",
        social_icons_shadow_hover:
          "5px 5px 8px rgba(0,0,0,0.1),-5px -5px 8px rgba(0,0,0,0.1)",
        sm_social_icons_shadow:
          " 2px 2px 10px rgba(0,0,0,1), 2px 2px 10px rgba(0,0,0,1)",
        sm_social_icons_shadow_hover:
          "5px 5px 8px rgba(255,255,255,0.1),5px 5px 8px rgba(255,255,255,0.1)",
        input_shadow:
          "inset 0px 5px 15px rgba(0, 0, 0, 0.35),inset -1px -1px 10px rgba(0, 0, 0, 0.35)",
        service_dark_shadow:
          "0px 0px 10px 0px rgba(0, 0, 0, 0.75), 0px 0px 20px 0px rgba(0, 0, 0, 0.75)",
        service_light_shadow:
          "0px 0px 10px rgba(255,255,255,0.3),0px 0px 10px rgba(255,255,255,0.3)",
        service_dark_shadow_hover:
          "1px 0px 10px rgba(0, 0, 0, 0.75),1px 1px 10px rgba(0, 0, 0, 0.75)",
        service_light_shadow_hover:
          "1px 1px 10px rgba(255,255,255,0.5),1px 1px 10px rgba(255,255,255,0.5)",
        dark_navbar_shadow_hover:
          "1px 1px 10px rgba(0,0,0,0.25),1px 1px 10px rgba(0,0,0,0.25)",
      },
      dropShadow: {
        "d-dark-shadow": [
          "0 0 10px rgba(0,0,0,0.2)",
          "0 0 10px rgba(0,0,0,0.2)",
        ],
        "d-dark-shadow-hover": [
          "1px 1px 10px rgba(0,0,0,0.6)",
          "1px 1px 10px rgba(0,0,0,0.6)",
        ],
        "l-light-shadow": [
          "0 0 10px rgba(0,0,0,0.2)",
          "0 0 10px rgba(0,0,0,0.2)",
        ],
        "l-light-shadow-hover": [
          "1px 1px 10px rgba(255,255,255,0.3)",
          "1px 1px 10px rgba(255,255,255,0.3)",
        ],
      },
    },
  },
  plugins: [],
};
