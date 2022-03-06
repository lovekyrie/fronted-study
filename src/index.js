import log, { foo } from "./foo";
import "./css/test.css";
log(foo);

import { createApp } from "vue";
import App from "./app.vue";
import router from "@/router";
import store from "@/store";

createApp(App).use(router).use(store).mount("#app");
