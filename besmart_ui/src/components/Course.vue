<template>
  <v-container class="div-wrapper">
    <v-card style="text-align: center">
      <v-tabs
        v-model="tab"
        background-color="#F7504E"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <v-tab v-for="item in data.subjects" :key="item.id">
          Slide {{ item.id + 1 }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in data.subjects"
          :key="item.id + 1"
          class="tab-items"
          style="
            background-image: linear-gradient(
              -225deg,
              #e3fdf5 0%,
              #ffe6fa 100%
            );
          "
        >
          <v-card flat color="transparent">
            <v-row>
              <v-col
                cols="12"
                class="middle"
                style="padding-top: 10%"
                v-if="!item.slide.includes('https')"
              >
                <h1>{{ item.name }}</h1>
              </v-col>
              <v-col cols="12" v-if="item.slide.includes('https')">
                <h1>{{ item.name }}</h1>
              </v-col>
              <v-col cols="12" align="center">
                <div v-if="item.slide.includes('https')">
                  <youtube :video-id="getID(item.slide)[1]" />
                </div>
                <div class="middle" v-else>
                  {{ item.slide }}
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
    <div class="control_div">
      <v-icon size="50" @click="tabBackward"> mdi-chevron-left </v-icon>
      <v-icon size="50" @click="tabForward"> mdi-chevron-right </v-icon>
      <v-btn
        class="btn-grad"
        style="position: absolute; right: 0; margin-right: 10px"
        @click="YesNoDialog = !YesNoDialog"
        >Close</v-btn
      >
    </div>
    <v-dialog v-model="YesNoDialog" width="500">
      <v-card color="blue-grey darken-3" style="padding: 20px">
        <v-card-text style="text-align: center; color: white">
          <h3>Are you sure you want to quit?</h3>
          <br />
          <v-btn class="ma-1" color="error" @click="closeAll" outlined
            >Yes</v-btn
          >
          <v-btn
            class="ma-1"
            color="success"
            @click="YesNoDialog = false"
            outlined
            >No</v-btn
          >
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: "Course",
  props: {
    data: Object,
  },
  data() {
    return {
      YesNoDialog: false,
      tab: null,
    };
  },
  methods: {
    closeAll() {
      //do other things here that you want to do when you close the quiz
      this.$router.push("/" + this.data.category);
      this.YesNoDialog = false;
    },
    tabForward() {
      this.tab = this.tab + 1;
    },
    tabBackward() {
      if (this.tab === 0) {
        this.tab = this.Quiz.questions.length;
      } else {
        this.tab = this.tab - 1;
      }
    },
    getID(data) {
      return data.split("=");
    },
  },
};
</script>

<style scoped>
.div-wrapper {
  margin-top: 1%;
  backdrop-filter: blur(1rem);
  height: 80vh;
}

.tab-items {
  text-align: center;
  height: 63vh;
}

.control_div {
  text-align: center;
  padding: 10px;
}

.btn-grad {
  background-image: linear-gradient(
    to right,
    #ed4264 0%,
    #ffedbc 51%,
    #ed4264 100%
  );
}
.btn-grad {
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  color: black;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #000;
  text-decoration: none;
}

.middle {
  padding-left: 20%;
  padding-right: 20%;
}
</style>
