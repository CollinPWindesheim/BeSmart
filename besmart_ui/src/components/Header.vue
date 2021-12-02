<template>
  <div id="header">
    <v-app-bar app color="blue-grey darken-4" style="color: white">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon
          color="white"
          @click="drawer = true"
        ></v-app-bar-nav-icon>
        <router-link to="/">
          <v-img
            width="75px"
            height="75px"
            src="../assets/logo-small.png"
          ></v-img>
        </router-link>
        <h1>BeSmart</h1>
      </div>

      <v-spacer></v-spacer>
      <span v-if="isLoggedIn">Welcome, {{ currentUser }}</span>
      <v-btn target="_blank" text @click="logout" v-if="isLoggedIn">
        <span class="mr-2" style="color: white">Logout</span>
      </v-btn>
      <v-btn target="_blank" text @click="login" v-if="!isLoggedIn">
        <span class="mr-2" style="color: white">Login</span>
      </v-btn>
      <v-btn target="_blank" text @click="signup" v-if="!isLoggedIn">
        <span class="mr-2" style="color: white">Register</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      app
      hide-overlay
      style="background: hsl(0 0% 100% / 0.1); backdrop-filter: blur(2rem)"
    >
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red--text text--accent-4"
        >
          <v-list-item v-bind:to="'/'">
            <v-list-item-icon>
              <v-icon color="white">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-items">Home</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/money'">
            <v-list-item-icon>
              <v-icon color="white">mdi-currency-eur</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-items">Money</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/investing'">
            <v-list-item-icon>
              <v-icon color="white">mdi-brain</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-items">Investing</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/saving'">
            <v-list-item-icon>
              <v-icon color="white">mdi-piggy-bank-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-items">Saving</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/quizzes'">
            <v-list-item-icon>
              <v-icon color="white"
                >mdi-clipboard-check-multiple-outline</v-icon
              >
            </v-list-item-icon>
            <v-list-item-title class="menu-items">Quizzes</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/about'">
            <v-list-item-icon>
              <v-icon color="white">mdi-information-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="menu-items">About</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import router from "@/router";
import { getAuth, signOut } from "firebase/auth";

export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
    name: "",
    isLoggedIn: false,
    currentUser: false,
  }),
  methods: {
    login() {
      router.push("Login");
    },
    signup() {
      router.push("SignUp");
    },
    logout() {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          router.push("/");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
  created() {
    const auth = getAuth();

    if (auth.currentUser) {
      this.isLoggedIn = true;
      this.currentUser = auth.currentUser.displayName;
    }
  },
};
</script>

<style scoped>
.menu-items {
  color: white;
}
</style>
