import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#02173A",
        secondary: "#2789dd",
        dark: "#050A19",
        light: "#f5f8f9",
        "strong-text": "#ddeeff",
        "footer-bg": "#121930",
        text: "#a8bdd2",
        "text-light": "#646984",

        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      }
    }
  }
});
