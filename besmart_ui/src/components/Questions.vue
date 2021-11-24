<template>
  <v-container class="div-wrapper">
    <v-card style="text-align: center">
      <v-tabs v-model="tab" background-color="#F7504E" dark>
        <v-tab v-for="item in Quiz.questions" :key="item.id">
          Question {{ item.id + 1 }}
        </v-tab>
        <v-tab :key="finish">Finish</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in Quiz.questions"
          :key="item.id + 1"
          class="tab-items"
        >
          <v-card flat>
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
        <v-tab-item class="tab-items" style="opacity: 100%" :key="finish">
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
                    @click="goToTab(index)"
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
      <v-icon size="50" @click="tabBackward"> mdi-chevron-left </v-icon>
      <v-icon size="50" @click="tabForward"> mdi-chevron-right </v-icon>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Questions",
  props: {
    Quiz: Object,
  },
  data() {
    return {
      radioGroup: [],
      finalAnswer: {
        perc: 0,
        answerCheck: [],
      },
      color: "",
      tab: null,
    };
  },
  computed: {
    createAnswerArray() {
      let answerArray = [];
      this.Quiz.questions.forEach(function (item) {
        answerArray.push(item.answer);
      });
      return answerArray;
    },
  },
  methods: {
    goToTab(item) {
      this.tab = item;
    },
    tabForward() {
      this.tab = this.tab + 1;
    },
    tabBackward() {
      this.tab = this.tab - 1;
    },
    score() {
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

      this.finalAnswer.perc = percent;

      // Put score in database here
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
  bottom: 3%;
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
</style>
