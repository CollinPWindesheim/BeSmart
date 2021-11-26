<template>
  <v-container class="div-wrapper">
    <v-simple-table fixed-header height="80vh">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-center">Category</th>
            <th class="text-center">Percentage</th>
          </tr>
        </thead>
        <tbody style="text-align: left">
          <tr v-for="item in grades" :key="item.id">
            <td class="text-left">{{ item.name }}</td>
            <td class="text-center">{{ item.cat }}</td>
            <td class="text-center">
              <v-progress-circular
                style="margin: 5px;"
                :rotate="360"
                :size="80"
                :width="15"
                :value="item.perc"
                color="#f7504e">
                {{ item.perc }}
              </v-progress-circular>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "Grades",
  data() {
    return {
      interval: {},
      grades: [
        {
          id: 0,
          name: "Bitcoin",
          cat: "money",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 1,
          name: "What is money?",
          cat: "money",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 2,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 3,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 4,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 5,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 6,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
        {
          id: 7,
          name: "Investing 101",
          cat: "investing",
          perc: 100,
          answerCheck: [
            { id: 0, given: "D", answer: "D" },
            { id: 1, given: "A", answer: "A" },
            { id: 2, given: "C", answer: "C" },
            { id: 3, given: "A", answer: "A" },
            { id: 4, given: "C", answer: "C" },
          ],
        },
      ],
    };
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
