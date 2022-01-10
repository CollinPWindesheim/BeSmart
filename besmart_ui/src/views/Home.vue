<template>
  <div id="container">
    <div class="left_div">
      <v-carousel height="100%" cycle hide-delimiters :show-arrows="false">
        <v-carousel-item><v-img class="slide-img" src="../assets/hand.png"></v-img></v-carousel-item>
        <v-carousel-item><v-img class="slide-img" src="../assets/pig.png"></v-img></v-carousel-item>
      </v-carousel>
    </div>
    <div class="menu">
      <router-link to="money" tag="div" class="flip-card margin-menu">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background-color: #BFA7C7;">
            <h1 class="center">What is money?</h1>
          </div>
          <div class="flip-card-back">
            <h1>What is money?</h1>
            <p>Here you will find courses about Money</p>
            <p>Click to go to the courses</p>
          </div>
        </div>
      </router-link>
      <router-link to="investing" tag="div" class="flip-card margin-menu">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background-color: #FFF6F4;">
            <h1 class="center">Basics about investing</h1>
          </div>
          <div class="flip-card-back">
            <h1>Basics about investing</h1>
            <p>Here you will find courses about investing</p>
            <p>Click to go to the course</p>
          </div>
        </div>
      </router-link>
      <router-link to="saving" tag="div" class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front" style="background-color: #FFC3B4;">
            <h1 class="center">Learn how to save!</h1>
          </div>
          <div class="flip-card-back">
            <h1>Learn how to save!</h1>
            <p>Here you will find courses about saving</p>
            <p>Click to go to the course</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {
  },
  data () {
    return {
    }
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
.menu{
  position: absolute;
  right: 0;
  width: 30%;
  height: 100%;
  padding: 10px;
}

.margin-menu{
  margin-bottom: 2%;
}

.menu_div{
  width: 100%;
  height: 25%;
  padding-left: 10px;
  border-radius: 10px;
  height: 32%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.left_div {
  position: absolute;
  right: 35%;
  top: 5%;
  margin: 10px;
  width: 60%;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}



@media only screen and (max-width: 600px) {

}

.flip-card {
  background-color: transparent;
  width: 100%;
  height: 32%;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  background-color: gray;
  color: white;
  transform: rotateY(180deg);
}

.slide-img{
  height: 100%;
  width: 100%;
}

.center{
  margin-top: 18%;
}
</style>
