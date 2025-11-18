export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        miyraa: ["Miyraa Sans", "Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        miyraa: {
          900: "#0A0A14",
          p1: "#FF4F6D",
          p2: "#A65FFF",
          p3: "#FFB648"
        }
      },
      borderRadius: {
        phone: "32px"
      }
    }
  },
  plugins: []
};
