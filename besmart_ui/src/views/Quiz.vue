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
        <v-tab v-for="(item, index) in quizData.Questions" :key="item.id">
          Question {{ index + 1 }}
        </v-tab>
        <v-tab key="answers">Answers</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in quizData.Questions"
          :key="item.id"
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
              <v-col cols="12">
                <h1>{{ item.question }}</h1>
              </v-col>
              <v-col cols="12" align="center">
                <div style="display: inline-block; padding: 10px">
                  <v-radio-group v-model="radioGroup[item.id]">
                    <v-radio
                      v-for="q in item.answers"
                      :key="q.id"
                      :label="`${q.indicator}:  ${q.text}`"
                      :value="q.indicator"
                      :name="q.indicator"
                      color="#F7504E"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-tab-item>
        <v-tab-item
          class="tab-items"
          style="
            opacity: 100%;
            background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
          "
          key="answers"
        >
          <v-progress-linear
            :value="finalAnswer.perc"
            height="50"
            :color="color"
            striped
          >
            <strong>{{ Math.ceil(finalAnswer.perc) }}%</strong>
          </v-progress-linear>
          <div class="answerDiv">
            <v-simple-table fixed-header height="45vh" :item-clas="row_classes">
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-center">Question</th>
                    <th class="text-center">Your answer</th>
                    <th class="text-center">The right answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(i, index) in finalAnswer.answerCheck"
                    :key="i.id"
                    :class="row_classes(i)"
                    @click="goToTab(index + 1)"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ i.given }}</td>
                    <td>{{ i.answer }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
          <v-btn
            @click="score"
            x-large
            outlined
            color="success"
            class="checkButton"
            >Check your answers</v-btn
          >
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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/main";
import { getAuth } from "firebase/auth";

export default {
  name: "Quiz",
  components: {},
  data() {
    return {
      radioGroup: [],
      finalAnswer: {
        course_id: null,
        uid: null,
        name: "",
        cat: "",
        perc: 0,
        answerCheck: [],
      },
      color: "",
      tab: 2,
      YesNoDialog: false,
      quizData: {},
    };
  },
  async beforeMount() {
    const docRef = doc(db, "Courses", this.$route.params.id);
    const docSnap = await getDoc(docRef);
    let object = {};

    if (docSnap.exists()) {
      object = docSnap.data();
      object.id = docSnap.id;
      this.quizData = object;
    } else {
      console.log("no document found, contact the admin");
    }
  },
  computed: {
    createAnswerArray() {
      let answerArray = [];
      this.quizData.Questions.forEach(function (item) {
        answerArray.push(item.answer);
      });
      return answerArray;
    },
  },
  methods: {
    async storeScore(data) {
      const auth = getAuth();
      await setDoc(doc(db, "Scores", auth.currentUser.uid + this.quizData.id), data);
    },
    closeAll() {
      //do other things here that you want to do when you close the quiz
      this.$router.push({ name: "Quizzes" });
      this.YesNoDialog = false;
    },
    goToTab(item) {
      this.tab = item;
    },
    tabForward() {
      this.tab = this.tab + 1;
    },
    tabBackward() {
      if (this.tab === 0) {
        this.tab = this.quizData.Questions.length;
      } else {
        this.tab = this.tab - 1;
      }
    },
    score() {
      const auth = getAuth();
      let answers = this.createAnswerArray;
      let userAnswers = this.radioGroup;
      let numberRight = 0;
      this.finalAnswer.answerCheck = [];

      for (let i = 0; i < userAnswers.length; i++) {
        if (answers[i] === userAnswers[i]) {
          numberRight = numberRight + 1;
        }
        this.finalAnswer.answerCheck.push({
          id: i,
          given: userAnswers[i],
          answer: answers[i],
        });
      }

      let percent = (numberRight / answers.length) * 100;

      if (percent < 55) {
        this.color = "#F7504E";
      } else if (percent > 55 && percent < 75) {
        this.color = "yellow";
      } else {
        this.color = "green";
      }
      this.finalAnswer.uid = auth.currentUser.uid;
      this.finalAnswer.perc = percent;
      this.finalAnswer.name = this.quizData.title;
      this.finalAnswer.cat = this.quizData.category;
      this.finalAnswer.course_id = this.$route.params.id;

      //this stores the data in the database
      this.storeScore(this.finalAnswer);
    },
    row_classes(item) {
      if (item.given !== item.answer) {
        return "wrong"; //can also return multiple classes e.g ["orange","disabled"]
      } else if (item.given === item.answer) {
        return "right";
      }
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

.checkButton {
  bottom: 5%;
}

.answerDiv {
  height: 80%;
  width: 100%;
}

.wrong {
  background-color: #f7504e;
  color: white;
}

.right {
  background-color: lightgreen;
  color: black;
}

.hi {
  background-color: green;
}

tr:hover {
  color: black !important;
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
</style>
