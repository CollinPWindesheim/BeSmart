<template>
  <v-container>
    <v-row>
      <v-col>
        <v-combobox
          v-model="select"
          :items="filterCategory"
          label="Combobox"
          multiple
          solo
          item-color="#F7504E"
          color="#F7504E"
          chips
          clearable
          placeholder="Choose categories"
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in filterProductsByCategory"
        :key="item.id"
        cols="12"
        md="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto courseCard"
            color="#263238"
            dark
            max-width="400"
            max-height="300"
            :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light"
                >{{ item.title }}&nbsp;</span
              >
              <v-chip color="#f7504e">{{ item.category }}</v-chip>
            </v-card-title>
            <v-card-text class="text-h5 font-weight-bold">
              Have you completed the course "{{ item.title }}"? If yes, this is
              a quiz you want to do.
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-btn outlined color="#f7504e" v-bind:to="'/quiz/' + item.id">
                  Start quiz
                </v-btn>
                <!--              <v-row-->
                <!--                align="center"-->
                <!--                justify="end"-->
                <!--              >-->
                <!--                <v-btn fab small color="white">-->
                <!--                  <v-icon style="color: red">-->
                <!--                    mdi-heart-->
                <!--                  </v-icon>-->
                <!--                </v-btn>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <span class="subheading mr-2">256</span>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <v-btn fab small color="white">-->
                <!--                  <v-icon style="color: black">-->
                <!--                    mdi-comment-quote-->
                <!--                  </v-icon>-->
                <!--                </v-btn>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <span class="subheading">45</span>-->
                <!--              </v-row>-->
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/main";

export default {
  name: "Quizzes",
  data() {
    return {
      select: [],
      Courses: [],
    };
  },
  async beforeMount() {
    const querySnapshot = await getDocs(collection(db, "Courses"));
    let object = {};

    querySnapshot.forEach((doc) => {
      object = doc.data();
      object.id = doc.id;
      this.Courses.push(object);
    });
  },
  computed: {
    filterCategory: function () {
      const allCats = [];

      const unique = (value, index, self) => {
        return self.indexOf(value) === index;
      };

      this.Courses.forEach(function (item) {
        allCats.push(item.category);
      });
      return allCats.filter(unique);
    },
    filterProductsByCategory: function () {
      return this.Courses.filter(
        (quiz) =>
          quiz.category.includes(this.select) ||
          quiz.category.includes(this.select[0]) ||
          quiz.category.includes(this.select[1]) ||
          quiz.category.includes(this.select[2]) ||
          quiz.category.includes(this.select[3])
      );
    },
  },
};
</script>

<style>
.v-autocomplete:not(.v-input--is-focused).v-select--chips input {
  max-height: inherit !important;
  padding: 6px 0 !important;
}
</style>
