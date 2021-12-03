import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import VueYoutube from 'vue-youtube';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

Vue.config.productionTip = false;

Vue.use(VueYoutube)

const firebaseConfig = {
  apiKey: "AIzaSyAFvNbvss2IbvRt2dC_tTbIULl3CPYWafo",
  authDomain: "besmart-c8e90.firebaseapp.com",
  projectId: "besmart-c8e90",
  storageBucket: "besmart-c8e90.appspot.com",
  messagingSenderId: "837952600748",
  appId: "1:837952600748:web:94a814e9ee65dbc7e2fd09",
  measurementId: "G-ER2G6PEY87"
};

initializeApp(firebaseConfig);


const auth = getAuth();
let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      VueYoutube,
      render: (h) => h(App),
    }).$mount("#app");
  }
})
