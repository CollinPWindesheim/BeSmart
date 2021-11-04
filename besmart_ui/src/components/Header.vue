<template>
  <div id="header">
    <v-app-bar app style="background: lightgray">
      <div class="d-flex align-center">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <h1>
          BeSmart
        </h1>

      </div>

      <!--      <v-spacer></v-spacer>-->

      <!--      <v-btn-->
      <!--        target="_blank"-->
      <!--        text-->
      <!--      >-->
      <!--        <span class="mr-2">Login</span>-->
      <!--      </v-btn>-->
      <!--      <v-btn-->
      <!--        target="_blank"-->
      <!--        text-->
      <!--      >-->
      <!--        <span class="mr-2">Register</span>-->
      <!--      </v-btn>-->
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group v-model="group" active-class="red--text text--accent-4">

          <v-list-item v-bind:to="'/'">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/money'">
            <v-list-item-icon>
              <v-icon>mdi-currency-eur</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Money</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/investing'">
            <v-list-item-icon>
              <v-icon>mdi-brain</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Investing</v-list-item-title>
          </v-list-item>
          <v-list-item v-bind:to="'/about'">
            <v-list-item-icon>
              <v-icon>mdi-information-variant</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>

</style>