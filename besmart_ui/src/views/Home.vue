<template>
  <v-container>
<!--    <div class="top-picture"></div>-->
    <v-img src="../assets/background.jpg" class="top-picture" gradient="to top right, rgba(246, 121, 72, .33), rgba(247, 80, 78, .33)"></v-img>
    <v-container class="shortcut-menu" v-if="isMobile() === false">
      <v-row dense no-gutters>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" color="red" v-bind:to="'/money'" :elevation="hover ? 24 : 2" >
              <h2 class="title-text">Money</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" color="red" v-bind:to="'/investing'" :elevation="hover ? 24 : 2">
              <h2 class="title-text">Investing</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 24 : 2" color="red">
              <h2 class="title-text">Saving</h2>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" align="center">
          <v-hover v-slot="{ hover }">
            <v-card class="card-link rounded-circle" :elevation="hover ? 24 : 2" color="red" v-bind:to="'/about'">
              <h2 class="title-text">About us</h2>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="shortcut-menu" v-if="isMobile()">
      <v-row dense no-gutters>
        <v-col xs="6" align="center">
          <v-card class="card-link rounded-circle" color="red" v-bind:to="'/money'">
            <h2 class="title-text">Money</h2>
          </v-card>
        </v-col>
        <v-col xs="6" align="center">
          <v-card class="card-link rounded-circle" color="red" v-bind:to="'/investing'">
            <h2 class="title-text">Investing</h2>
          </v-card>
        </v-col>
        <v-col xs="6" align="center">
          <v-card class="card-link rounded-circle" color="red" v-bind:to="'/saving'">
            <h2 class="title-text">Saving</h2>
          </v-card>
        </v-col>
        <v-col xs="6" align="center">
          <v-card class="card-link rounded-circle" color="red" v-bind:to="'/about'">
            <h2 class="title-text">About us</h2>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
<!--    <div class="bottom-white">-->

<!--    </div>-->
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {

  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    }
  },
};
</script>
<style>
.card-link{
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  z-index: 2;
}

/*.bottom-white{*/
/*  height: 40%;*/
/*  position: absolute;*/
/*  left: 0;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  background-color: white;*/
/*  z-index: 0;*/
/*}*/

.top-picture {
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
}

.shortcut-menu{
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

@media only screen and (max-width: 600px) {
  .card-link{
    width: 150px;
    height: 150px;
    margin: 10px;
    line-height: 150px;
  }
  
  .shortcut-menu{
    top: 30%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
  }

  .top-picture{
    left: 0;
    right: 0;
    top: 0;
    height: 28%;
    background-size: 100%;
    background-image: url("../assets/background.jpg");
    background-position: center;
    z-index: 0;
  }

  .bottom-white{
    height: 72%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    background-color: lightgray;
  }
}
</style>
