<template>
<questions></questions>
</template>

<script>
import Questions from "@/components/Questions";

export default {
  name: "Quiz",
  components: {
    Questions,
  },
  props: {
    questions: Object,
  }
};
</script>

<style scoped>

</style>