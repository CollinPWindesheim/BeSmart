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
            <v-parallax
              dark
              src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
              <v-row
                align="center"
                justify="center"
              >
                <v-col
                  class="text-center"
                  cols="12"
                >
                  <h1 class="text-h4 font-weight-thin mb-4">
                    {{ data.title }}
                  </h1>
                  <h4 class="subheading">
                    Thank you for choosing B€smart
                  </h4>
                </v-col>
              </v-row>
            </v-parallax>
          </v-carousel-item>
          <v-carousel-item
            v-for="item in data.subjects"
            :key="item.id">
            <v-sheet
              :color="color"
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
                  <div v-else-if="item.slide.includes('./assets/')">
                    <v-img :src="item.slide"></v-img>
                  </div>
                  <div v-else>
                    {{ item.slide }}
                  </div>
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
          <v-carousel-item>
            <v-sheet
              :color="color"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div style="width: 100%; padding-left: 10%; padding-right: 10%; text-align: center;">
                  <h1>questions</h1>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col cols="12" md="6" v-for="item in data.questions" :key="item.id">
                          <h3>{{ item.question }}</h3>
                          <v-combobox
                            :items="item.answers"
                            label="Combobox"
                            multiple
                            outlined
                            dense
                          ></v-combobox>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
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
    color: String,
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
    },
    randomColor(){
      return Math.floor(Math.random()*16777215).toString(16);
    }
  }
};
</script>

<style scoped>

</style>