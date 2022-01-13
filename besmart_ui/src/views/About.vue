<template>
  <v-container>
    <div class="div-wrapper">
      <div class="top"><h1 style="font-size: 60px">Who are we?</h1></div>
      <div class="text">
        <v-row>
          <v-col cols="4">
            <v-img
              src="../assets/Tuspane.png"
              style="height: 300px; width: 300px"
            ></v-img>
          </v-col>
          <v-col cols="8">
            <p style="font-size: 20px">
              TuSpaNe is a non-profit organization based in Zwolle, The
              Netherlands. As TuSpaNe, we have 4 team members from all over the
              world and from different backgrounds. We study at Windesheim
              University of Applied Sciences and are doing the minor Concept &
              Creation.
            </p>
            <v-divider></v-divider>
            <br />
            <p style="font-size: 20px">
              Why we are here? B€smart teaches people who come out of high
              school more about financial knowledge, to make them able to be
              financially independent. With B€smart, people can learn about
              saving, money, and much more in a more fun and understandable way.
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="contact">
        <v-row>
          <v-col cols="6">
            <a
              href="https://instagram.com/besmartweb?utm_medium=copy_link"
              style="text-decoration: none"
            >
              <v-icon style="font-size: 100px">mdi-instagram</v-icon>
            </a>
            <h3>@besmartweb</h3>
          </v-col>
          <v-col cols="6">
            <a href="mailto:tuspane@gmail.com" style="text-decoration: none">
              <v-icon style="font-size: 100px">mdi-email</v-icon>
            </a>
            <h3>tuspane@gmail.com</h3>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.div-wrapper {
  background-color: white;
  border-radius: 10px;
  height: 80vh;
  padding: 10px;
}

.top {
  height: 15%;
  width: 100%;
  text-align: center;
}

.text {
  text-align: center;
  height: 60%;
  width: 100%;
}

.contact {
  height: 25%;
  width: 100%;
  text-align: center;
}
</style>
