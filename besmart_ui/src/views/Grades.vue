<template>
  <v-container class="div-wrapper">
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Name</th>
            <th class="text-left">Category</th>
            <th class="text-left">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in desserts" :key="item.name">
            <td>{{ item.name }}</td>
            <td>{{ item.perc }}</td>
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
      grades: [
        {
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
