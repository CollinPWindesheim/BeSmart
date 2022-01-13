<template>
  <v-container>
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
            :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              <span class="text-h6 font-weight-bold">{{ item.title }}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{ item.description }}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-btn
                  outlined
                  elevation="24"
                  color="#F7504E"
                  :to="'/course/' + item.id"
                >
                  Start course
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
import { collection, getDocs} from "firebase/firestore"
import { db } from "@/main";

export default {
  name: "CourseList",
  components: {
  },
  props: {
    cat: String,
  },
  data() {
    return {
      Courses : [],
      showDialog: false,
      dialogData: null,
    };
  },
  async beforeMount() {
    const querySnapshot = await getDocs(collection(db, "Courses"));
    let object = {};

    querySnapshot.forEach((doc) => {
      object = doc.data();
      object.id = doc.id;
      this.Courses.push(object);
    })
  },
  computed: {
    filterProductsByCategory: function () {
      return this.Courses.filter(
        (course) => !course.category.indexOf(this.cat)
      );
    },
  },
  methods: {
    openDialog(data) {
      this.showDialog = true;
      this.dialogData = data;
    },
  },
};
</script>

<style scoped>
.courseCard {
  margin: 10px;
  position: relative;
}
</style>
