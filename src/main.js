import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { gsap } from "gsap";

// Optionally, you can import specific GSAP plugins if needed
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);

app.use(router);

app.mount("#app");
