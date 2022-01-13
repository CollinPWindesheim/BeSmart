<template>
  <v-dialog v-model="show" width="500">
    <v-card color="blue-grey darken-3" style="padding: 20px">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Question</th>
              <th>Given answer</th>
              <th>Correct answer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in data" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.given }}</td>
              <td>{{ item.answer }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ScoreDialog",
  props: {
    value: Boolean,
    data: [],
  },
  computed: {
    show: {
      get () {
        return this.value;
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  }
};
</script>

<style scoped></style>
