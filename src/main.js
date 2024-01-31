import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// Import SweetAlert CSS for styling (optional)
import 'sweetalert2/dist/sweetalert2.min.css';


import materialKit from "./material-kit";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.mount("#app");
