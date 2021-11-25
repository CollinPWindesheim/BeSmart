<template>
  <v-footer padless color="blue-grey darken-4" style="color: white">
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} — <strong>BeSmart</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
