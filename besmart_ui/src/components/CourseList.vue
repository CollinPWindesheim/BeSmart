<template>
  <div id="app">
<!--    <h1>Category = {{ cat }}</h1>-->
    <div v-for="item in Courses" :key="item.id">
      <v-card
        class="mx-auto courseCard"
        :color="color"
        dark
        max-width="400"
        v-if="item.category === cat"
        :key="item.id"
      >
        <v-card-title>
          <span class="text-h6 font-weight-light">{{item.title}}</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          {{item.description}}
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-btn
              outlined
              rounded
              text
              style="width: 60%; background-color: white; color: black;"
            >
              Start course
            </v-btn>
            <v-row
              align="center"
              justify="end"
            >
              <v-btn fab small color="white">
                <v-icon style="color: red">
                  mdi-heart
                </v-icon>
              </v-btn>
              <span class="mr-1"> </span>
              <span class="subheading mr-2">256</span>
              <span class="mr-1"> </span>
              <v-btn fab small color="white">
                <v-icon style="color: black">
                  mdi-comment-quote
                </v-icon>
              </v-btn>
              <span class="mr-1"> </span>
              <span class="subheading">45</span>
            </v-row>
          </v-list-item>
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "CourseList",
  props: {
  cat: String,
  color: String,
  },
  data() {
    return {
      Courses: [
        {id: 1, title: "What is money?", description: "This course is about money and the history of money", category: "money"},
        {id: 2, title: "Investing 101", description: "This course is about investing", category: "investing"},
        {id: 3, title: "What is my money worth?", description: "This course is about money and what you can do with it", category: "money"}
      ],
    }
  }
};
</script>

<style scoped>
.courseCard{
  margin: 10px;
  position: relative;
}
</style>