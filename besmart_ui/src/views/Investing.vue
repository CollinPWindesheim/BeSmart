<template>
  <v-container>
    <div class="div-wrapper">
      <h1>Work in progress</h1>
      <course-list cat="investing"></course-list>
    </div>
  </v-container>
</template>

<script>
import CourseList from "@/components/CourseList";

export default {
  name: "Investing",
  components: {
    CourseList,
  },
};
</script>

<style scoped>
.div-wrapper {
  backdrop-filter: blur(1rem);
  height: 80vh;
}
</style>
