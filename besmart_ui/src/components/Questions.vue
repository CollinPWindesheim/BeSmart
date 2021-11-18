<template>
  <v-container class="div-wrapper">
    <v-sheet elevation="6">
      <v-tabs
        background-color="cyan"
        dark
        next-icon="mdi-arrow-right-bold-box-outline"
        prev-icon="mdi-arrow-left-bold-box-outline"
        show-arrows
      >
        <template v-for="item in Quiz.questions">
          <v-tab :key="item.id"> Question {{ item.id }} </v-tab>
          <v-tab-item :key="item.id">
            <h1>{{ item.question }}</h1>
            <v-form>
              <v-combobox
                :items="item.answers"
                label="Combobox"
                multiple
                outlined
                dense
              ></v-combobox>
            </v-form>
          </v-tab-item>
        </template>
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
    return {};
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
