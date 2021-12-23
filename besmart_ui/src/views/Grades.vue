<template>
  <v-container class="div-wrapper">
    <v-simple-table fixed-header height="80vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-center">Category</th>
            <th class="text-center">Percentage</th>
            <th class="text-center">See your scores</th>
            <th class="text-center">go to quiz</th>
          </tr>
        </thead>
        <tbody style="text-align: left">
          <tr v-for="item in grades" :key="item.id">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-center">{{ item.cat }}</td>
            <td class="text-center">
              <v-progress-circular
                style="margin: 5px"
                :rotate="360"
                :size="80"
                :width="15"
                :value="item.perc"
                color="#f7504e"
              >
                {{ item.perc }}
              </v-progress-circular>
            </td>
            <td class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                x-large
                color="#f7504e"
                @click="showScoreDialog = !showScoreDialog"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
            </td>
            <td class="text-center">
              <v-btn
                class="mx-2"
                fab
                dark
                x-large
                color="#f7504e"
                @click="goToQuiz(item.course_id)"
              >
                <v-icon dark> mdi-minus </v-icon>
              </v-btn>
            </td>
            <score-dialog v-model="showScoreDialog" :data="item.answerCheck"></score-dialog>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "@/main";
import { getAuth } from "firebase/auth";
import ScoreDialog from "@/components/ScoreDialog";

export default {
  name: "Grades",
  data() {
    return {
      interval: {},
      grades: [],
      showScoreDialog: false,
    };
  },
  components: {
    ScoreDialog,
  },
  methods: {
    goToQuiz(course_id) {
      this.$router.push({ name: "Quiz", params: { id: course_id } });
    },
  },
  async beforeMount() {
    const auth = getAuth();
    const q = query(
      collection(db, "Scores"),
      where("uid", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.grades.push(doc.data());
    });
  },
};
</script>

<style scoped>
.div-wrapper {
  margin-top: 1%;
  backdrop-filter: blur(1rem);
  height: 80vh;
}
</style>
