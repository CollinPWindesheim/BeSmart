<template>
  <v-container class="div-wrapper">
    <v-sheet elevation="6">
      <v-tabs
        background-color="#F7504E"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <template v-for="item in Quiz.questions">
          <v-tab :key="item.id"> Question {{ item.id }} </v-tab>
          <v-tab-item :key="item.id" class="tab-items">
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
          </v-tab-item>
        </template>
        <v-tab>Finish</v-tab>
        <v-tab-item class="tab-items">
          <v-progress-linear
            v-model="finalAnswer.perc"
            height="50"
            :color="finalAnswer.color"
            v-if="finalAnswer.perc > 0"
            striped
          >
            <strong>{{ Math.ceil(finalAnswer.perc) }}%</strong>
          </v-progress-linear>
          <div class="answerDiv">
            <v-simple-table fixed-header height="50vh" :item-clas="row_classes">
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
      </v-tabs>
    </v-sheet>
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
        color: "blue",
        answerCheck: [],
      },
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
    score() {
      let answers = this.createAnswerArray;
      let userAnswers = this.radioGroup;
      let numberRight = 0;
      let color = "blue";
      this.finalAnswer.answerCheck = []

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
        color = "#F7504E";
      } else if (percent > 55 && percent < 75) {
        color = "yellow";
      } else {
        color = "lightgreen";
      }

      this.finalAnswer.perc = percent;
      this.finalAnswer.color = color;

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
  height: 70vh;
}

.checkButton {
  position: absolute;
  left: 40%;
  bottom: 1%;
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

tr:hover {
  color: black !important;
}
</style>
