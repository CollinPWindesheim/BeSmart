<template>
  <v-app>
    <Header />
    <v-main class="main-wrap">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter, useRoute } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onBeforeMount } from 'vue'

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path === "/login" || route.path === "/signup") {
          router.replace("/");
        }
      });
    });
  },
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
.main-wrap {
  background-image: url("./assets/background-image.jpg");
  background-size: 100%;
  background-attachment: fixed;
}

@media only screen and (max-width: 600px) {
  .main-wrap {
    background-position: center center;
    background-size: cover;
  }
}
</style>
