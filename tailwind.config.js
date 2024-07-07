/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutral-white": "#fff",
        "neutral-black": "#263238",
        "text-gray-300": "#d9dbe1",
        gray: "rgba(255, 255, 255, 0.2)",
        "neutral-silver": "#f5f7fa",
        "brand-primary": "#4caf4f",
        "neutral-grey": "#717171",
        "neutral-d-grey": "#4d4d4d",
        "neutral-l-grey": "#88939e",
        forestgreen: {
          "100": "#339636",
          "200": "rgba(76, 175, 79, 0.3)",
        },
        gainsboro: {
          "100": "#e8e8e3",
          "200": "#dbdee0",
        },
        "text-gray-900": "#18191f",
        honeydew: "#e8f5e9",
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",
        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        ring: "var(--ring)",
      },
      spacing: {},
      fontFamily: {
        "body-regular-body-3": "Inter",
        montserrat: "Montserrat",
      },
      borderRadius: {
        lg: "18px",
        "8xs": "5px",
        "3xs": "10px",
        DEFAULT: "var(--radius)",
      },
      fontSize: {
        sm: "14px",
        xl: "20px",
        base: "16px",
        "45xl": "64px",
        "32xl": "51px",
        "19xl": "38px",
        "17xl": "36px",
        "10xl": "29px",
        "3xl": "22px",
        "4xs-1": "8.1px",
        "9xl": "28px",
        inherit: "inherit",
      },
      screens: {
        mq1400: {
          raw: "screen and (max-width: 1400px)",
        },
        lg: {
          max: "1200px",
        },
        mq825: {
          raw: "screen and (max-width: 825px)",
        },
        mq450: {
          raw: "screen and (max-width: 450px)",
        },
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
