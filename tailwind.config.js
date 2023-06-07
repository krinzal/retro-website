/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgdark:'#9BA7A8',
        bg1: "#C6CECF",
        bglight:'#DFE7E8'
      },
      colors: {
        text: "#4e5252",
        sec: "#C6CECF",
        main: "#142C69",
      },
      boxShadow: {
        items: "6px 6px 0 0 rgba(0, 0, 0, 0.1)",
        itemshover: "6px 6px 0 0 #142c69",
        span:"1px 1px 0 0 #fff",

       activenav:'inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080',

        retro: "inset 1px 1px 0 0 #fff, 8px 8px 0 0 rgba(0, 0, 0, 0.2);",
        retronav: "inset 1px 1px 0 0 #fff, 0px 8px 0 0 rgba(0, 0, 0, 0.2);",
        retro2:
          "inset -0.5px 0px 0px #fff, inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4",
        retro2items:
          " inset -1px -1px 0px #0c0c0c, inset 1px 1px 0px #ffffff, inset -2px -2px 0px #808088, inset 2px 2px 0px #bbc3c4",
      },
      fontFamily: {
        cool: '    font-family: "Karla", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;',
      },
    },
  },
  plugins: [],
};
