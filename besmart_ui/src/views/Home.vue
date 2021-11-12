<template>
  <v-container>
    <div id="top-picture"></div>
    <v-container id="shortcut-menu">
      <v-row dense no-gutters>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 12 : 2" color="red" v-bind:to="'/money'">
              <h2 class="title-text">Money</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 12 : 2" color="red" v-bind:to="'/investing'">
              <h2 class="title-text">Investing</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 12 : 2" color="red">
              <h2 class="title-text">Saving</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 12 : 2" color="red" v-bind:to="'/about'">
              <h2 class="title-text">About us</h2>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <div id="bottom-white">

    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {

  },
};
</script>
<style>
.card-link{
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
}

#bottom-white{
  height: 40%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 0;
}

#top-picture {
  height: 60%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-image: url("../assets/background.jpg");
  background-size: 100%;
  background-position: center;
  z-index: 0;
}

#shortcut-menu{
  top: 40%;
  position: absolute;
  left: 10%;
  right: 10%;
  margin-left: auto;
  margin-right: auto;
  z-index: 1;
}

.title-text{
  color: white;
}
</style>
