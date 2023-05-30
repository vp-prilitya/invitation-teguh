/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#A5BECC",
        grayDark: "#87897F",
        grayLight: "#C5C6C0",
        grayInput: "#f6f8fa",
        cokelat: "#231F20",
        cokelatLight: "#867070",
        bgColor: "#F3DEBA",
        primary: "#3A3845",
        gold: "#B5A642",
      },
      fontFamily: {
        scriptin: ["Scriptin", "cursive"],
        andasia: ["Andasia", "cursive"],
        cormorant: ["Cormorant", "cursive"],
        spaceMono: ["Space Mono", "cursive"],
      },
      animation: {
        "bounce-slow": "bounce-slow 5s linear infinite ",
        "bounce-fast": "bounce-fast 2s linear infinite ",
        "spin-slow": "spin 4s linear infinite",
        "bounce-slow-mobile": "bounce-slow-mobile 5s linear infinite",
      },
      keyframes: {
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "bounce-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "bounce-slow-mobile": {
          "0%, 100%": { transform: "rotate(-3deg) translateY(0px)" },
          "50%": { transform: "rotate(3deg) translateY(-7px)" },
        },
      },
      backgroundImage: {
        paint: "url('assets/images/paint.svg')",
        poto: "url('https://api.webbee.my.id/images/teguh.jpg')",
        potoFooter: "url('https://api.webbee.my.id/images/footer.gif')",
      },
    },
  },
  plugins: [],
};
