import { createApp } from "vue";
import { createPinia } from "pinia";

import TitleComponent from "@/components/TitleComponent.vue";
import SocialCard from "@/components/SocialCard.vue";
import IconLoader from "@/components/icons/IconLoader.vue";
import InstagramIcon from "@/components/icons/InstagramIcon.vue";
import FacebookIcon from "@/components/icons/FacebookIcon.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(faInstagramSquare);

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.component("TitleComponent", TitleComponent);
app.component("SocialCard", SocialCard);

app.component("IconLoadeer", IconLoader);
app.component("InstagramIcon", InstagramIcon);
app.component("FacebookIcon", FacebookIcon);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(createPinia());
app.use(router);

app.mount("#app");
