<template>
  <v-footer padless style="background: lightgray">
    <v-col
      class="text-center"
      cols="12"
    >
      {{ new Date().getFullYear() }} — <strong>BeSmart</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>