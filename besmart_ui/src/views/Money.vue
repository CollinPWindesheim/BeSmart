<template>
  <div id="containter">
    <course-list cat="money" color="blue"></course-list>
  </div>
</template>

<script>
import CourseList from "@/components/CourseList";

export default {
  name: "Money",
  components: {
    CourseList,
  }

};
</script>

<style scoped>

</style>