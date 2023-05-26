import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { gsap } from "gsap";
// import * as mdb from "mdb-ui-kit";
// import { Input } from "mdb-ui-kit";

// Optionally, you can import specific GSAP plugins if needed
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);

app.use(router);

app.mount("#app");
