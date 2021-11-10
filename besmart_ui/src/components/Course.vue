<template>
  <div class="text-center">
    <v-dialog
      v-model="show"
      persistent
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          {{ data.title }}
        </v-card-title>

        <v-carousel v-model="model" :continuous="false">
          <v-carousel-item>
            <v-sheet
              color="blue"
              height="100%">
              <v-row
                class="fill-height"
                align="center"
                justify="center">
                <div style="width: 100%; padding-left: 10%; padding-right: 10%; text-align: center;">
                  <h1>Thank you for starting this course!</h1>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item
            v-for="item in data.subjects"
            :key="item.id"
          >
            <v-sheet
              color="blue"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div style="width: 100%; padding-left: 10%; padding-right: 10%; text-align: center;">
                  <h2>{{ item.name }}</h2>
                  <div v-if="item.slide.includes('https')">
                    <youtube :video-id="getID(item.slide)[1]" />
                  </div>
                  <div v-else-if="item.slide.includes('../assets/')">
                    <v-img v-bind:src="item.slide"></v-img>
                  </div>
                  <div v-else>
                    {{ item.slide }}
                  </div>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="YesNoDialog = !YesNoDialog"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="YesNoDialog"
      width="500"
    >
      <v-card color="blue-grey darken-3" style="padding: 20px;">
        <v-card-text style="text-align: center; color: white;">
          <h3>Are you sure you want to quit?</h3>
          <br/>
          <v-btn class="ma-1" color="error" @click="closeAll" outlined>Yes</v-btn>
          <v-btn class="ma-1" color="success" @click="YesNoDialog = false" outlined>No</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Course",
  props: {
    value: Boolean,
    data: Object,
  },
  data () {
    return {
      dialog: false,
      YesNoDialog: false,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
    }
  },
  computed: {
    show: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    }
  },
  methods: {
    closeAll(){
      this.$emit('input', false)
      this.YesNoDialog = false
    },
    getID(data){
      return data.split("=")
    }
  }
};
</script>

<style scoped>

</style>