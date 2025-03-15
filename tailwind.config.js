/** @type {import('tailwindcss').Config} */

module.exports = {
   darkMode: ["class"],
   content: ["./src/**/*.{ts,tsx}"],
   prefix: "",
   theme: {
      container: {
         center: "true",
         padding: "2rem",
      },
      extend: {
         screens: {
            xl: "1344px",
            "2xl": "1620px",
            "3xl": "1920px",
         },

         boxShadow: {
            md: "0 2px 15px 0 rgba(34, 5, 107, 0.1)",
         },

         colors: {
            primary: {
               50: "rgba(var(--primary-50) ,<alpha-value>)",
               100: "rgba(var(--primary-100) ,<alpha-value>)",
               200: "rgba(var(--primary-200) ,<alpha-value>)",
               300: "rgba(var(--primary-300) ,<alpha-value>)",
               400: "rgba(var(--primary-400) ,<alpha-value>)",
               500: "rgba(var(--primary-500) ,<alpha-value>)",
               600: "rgba(var(--primary-600) ,<alpha-value>)",
               700: "rgba(var(--primary-700) ,<alpha-value>)",
               800: "rgba(var(--primary-800) ,<alpha-value>)",
            },
            secondary: {
               500: "rgba(var(--secondary-500) ,<alpha-value>)",
            },
            tertiary: {
               500: "rgba(var(--tertiary-500) ,<alpha-value>)",
            },
            gray: {
               0: "rgba(var(--gray-0) ,<alpha-value>)",
               20: "rgba(var(--gray-20) ,<alpha-value>)",
               50: "rgba(var(--gray-50) ,<alpha-value>)",
               100: "rgba(var(--gray-100) ,<alpha-value>)",
               200: "rgba(var(--gray-200) ,<alpha-value>)",
               300: "rgba(var(--gray-300) ,<alpha-value>)",
               400: "rgba(var(--gray-400) ,<alpha-value>)",
               500: "rgba(var(--gray-500) ,<alpha-value>)",
               600: "rgba(var(--gray-600) ,<alpha-value>)",
               700: "rgba(var(--gray-700) ,<alpha-value>)",
               800: "rgba(var(--gray-800) ,<alpha-value>)",
            },
         },
         maxWidth: {
            dvw: "100dvw",
         },
         lineHeight: {
            relaxed: "1.8",
         },

         keyframes: {
            "accordion-down": {
               from: {
                  height: "0",
               },
               to: {
                  height: "var(--radix-accordion-content-height)",
               },
            },
            "accordion-up": {
               from: {
                  height: "var(--radix-accordion-content-height)",
               },
               to: {
                  height: "0",
               },
            },
            fadeIn: {
               from: {
                  opacity: "0",
               },
               to: {
                  opacity: "1",
               },
            },
            fadeUp: {
               from: {
                  opacity: "0",
                  transform: "translateY(3rem)",
               },
               to: {
                  opacity: "1",
                  transform: "translateY(0)",
               },
            },
            fadeDown: {
               from: {
                  opacity: "0",
                  transform: "translateY(-3rem)",
               },
               to: {
                  opacity: "1",
                  transform: "translateY(0)",
               },
            },
            fadeRight: {
               from: {
                  opacity: "0",
                  transform: "translateX(-3rem)",
               },
               to: {
                  opacity: "1",
                  transform: "translateX(0)",
               },
            },
            fadeLeft: {
               from: {
                  opacity: "0",
                  transform: "translateX(3rem)",
               },
               to: {
                  opacity: "1",
                  transform: "translateX(0)",
               },
            },
            "caret-blink": {
               "0%,70%,100%": {
                  opacity: "1",
               },
               "20%,50%": {
                  opacity: "0",
               },
            },
            "accordion-down": {
               from: {
                  height: "0",
               },
               to: {
                  height: "var(--radix-accordion-content-height)",
               },
            },
            "accordion-up": {
               from: {
                  height: "var(--radix-accordion-content-height)",
               },
               to: {
                  height: "0",
               },
            },
            "bar-loading": {
               "0%": {
                  transformOrigin: "left",
                  transform: "scaleX(0)",
               },
               "50%": {
                  transformOrigin: "left",
                  transform: "scaleX(1)",
               },
               "51%": {
                  transformOrigin: "right",
               },
               "100%": {
                  transform: "scaleX(0)",
                  transformOrigin: "right",
               },
            },
         },
         animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "fade-in": "fadeIn 0.5s ease",
            "fade-up": "fadeUp 0.5s ease",
            "fade-down": "fadeDown 0.5s ease",
            "fade-right": "fadeRight 0.5s ease",
            "fade-left": "fadeLeft 0.5s ease",
            "caret-blink": "caret-blink 1.25s ease-out infinite",
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
            "bar-loading": "bar-loading .7s linear infinite",
         },
      },
   },

   plugins: [
      require("tailwindcss-animate"),
      function ({ addVariant }) {
         addVariant("lang-ar", '[lang="ar"] &');
         addVariant("lang-en", '[lang="en"] &');
      },

      function ({ addUtilities }) {
         addUtilities({
            ".item-active-circle": {
               position: "relative",
               "&::after": {
                  content: '""',
                  position: "absolute",
                  insetInlineStart: "-1.8rem",
                  top: "50%",
                  aspectRatio: "1",
                  width: "2.4rem", // Converted 14 to rem as Tailwind uses rem units
                  transform: "translateY(-50%)",
                  borderRadius: "9999px", // Full rounding
                  backgroundColor: "white",
                  opacity: "0",
               },
               "&.active::after": {
                  opacity: "1",
               },
            },
         });
      },
   ],
};
