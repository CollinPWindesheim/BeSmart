<template>
  <v-container>
    <v-row>
      <v-col>
        <v-combobox
          v-model="select"
          :items="filterCategory"
          label="Combobox"
          multiple
          chips
          clearable
        ></v-combobox>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="item in filterProductsByCategory"
        :key="item.id"
        cols="12"
        md="4"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            class="mx-auto courseCard"
            :color="item.color"
            dark
            max-width="400"
            max-height="300"
            :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">{{ item.name }}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              Have you completed the course "{{ item.name }}"? If yes, this is a quiz you want to do.
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-btn
                  outlined
                  rounded
                  text
                  style="background-color: white; color: black;"
                >
                  Start quiz
                </v-btn>
                <!--              <v-row-->
                <!--                align="center"-->
                <!--                justify="end"-->
                <!--              >-->
                <!--                <v-btn fab small color="white">-->
                <!--                  <v-icon style="color: red">-->
                <!--                    mdi-heart-->
                <!--                  </v-icon>-->
                <!--                </v-btn>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <span class="subheading mr-2">256</span>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <v-btn fab small color="white">-->
                <!--                  <v-icon style="color: black">-->
                <!--                    mdi-comment-quote-->
                <!--                  </v-icon>-->
                <!--                </v-btn>-->
                <!--                <span class="mr-1"> </span>-->
                <!--                <span class="subheading">45</span>-->
                <!--              </v-row>-->
              </v-list-item>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Quizzes",
  data() {
    return {
      select: [],
      quizzes: [
        {id: 1, name: "Bitcoin", color: "#49a329", cat: "money", questions: [
            {id: 1, question: "What for network is bitcoin?", answer: "d", answers: [{indicator: "A", text: "Centralized with a middleman"}, {indicator: "B", text: "Centralized peer-to-peer"}, {indicator: "C", text: "Decentralized with a middleman"}, {indicator: "D", text: "Decentralized peer-to-peer"}]},
            {id: 2, question: "What is decentralized?", answer: "a", answers: [{indicator: "A", text: "Activity or organization controlled by multiple instances"}, {indicator: "B", text: "Activity or organization that is decent in their work"}, {indicator: "C", text: "Activity or organization controlled by one person or group"}, {indicator: "D", text: "Activity or organization controlled by the government"}]},
            {id: 3, question: "What is peer-to-peer?", answer: "c", answers: [{indicator: "A", text: "Computer to computer connection, without another computer or server in the middle"}, {indicator: "B", text: "Two apple computers connected"}, {indicator: "C", text: "Connection between two computers, with another computer or server in the middle"}]},
            {id: 4, question: "How do bitcoins get created?", answer: "a", answers: [{indicator: "A", text: "All bitcoins were created at the start of bitcoin, no more are being added"}, {indicator: "B", text: "Made out of thin air"}, {indicator: "C", text: "Mined by computers"}, {indicator: "D", text: "Government distributes them"}]},
            {id: 5, question: "Why is bitcoin called a “censorship free money”?", answer: "c", answers: [{indicator: "A", text: "Bitcoin network is backed by the government"}, {indicator: "B", text: "Bitcoin network’s moderators do not delete content"}, {indicator: "C", text: "Bitcoin network cannot be hacked and everyone can use it"}, {indicator: "D", text: "All of the above"}]}
          ]
        },
        {id: 2, name: "What is money?", color: "#49a329", cat: "money", questions: [
            {id: 1, question: "Are their limitations to the bartering system? If so, what limitations? (Multiple choice)", answer: "a,b,c", answers: [{indicator: "A", text: "Has to have a coincident of wants (one of the parties must be interested in the other ones products)"}, {indicator: "B", text: "No common currency (no truly equal trades)"}, {indicator: "C", text: "Not good for the environment"}, {indicator: "D", text: "No long term value storing"}, {indicator: "E", text: "All of the above"}, {indicator: "F", text: "No limitations"}]},
            {id: 2, question: "Is bartering the oldest form of transaction?", answer: "a", answers: [{indicator: "A", text: "Yes"}, {indicator: "B", text: "No"}]},
            {id: 3, question: "What does commodity money get its value from?", answer: "b", answers: [{indicator: "A", text: "The trust of the people in it"}, {indicator: "B", text: "The resources it is made out of"}, {indicator: "C", text: "Set by the government"}, {indicator: "D", text: "All of the above"}]},
            {id: 4, question: "What are disadvantages of commodity money? (Multiple choice)", answer: "b,c", answers: [{indicator: "A", text: "It is commonly used"}, {indicator: "B", text: "They could be physically manipulated"}, {indicator: "C", text: "Scarcity of the commodity gets lower over time"}, {indicator: "D", text: "All of the above"}]},
            {id: 5, question: "What is the intrinsic value of a coin?", answer: "c", answers: [{indicator: "A", text: "Weight of the coin"}, {indicator: "B", text: "Looks of the coin"}, {indicator: "C", text: "Value of metal in the coin"}, {indicator: "D", text: "All of the above"}]},
            {id: 6, question: "What was the biggest advantage of commodity money?", answer: "b", answers: [{indicator: "A", text: "You had something to store for long term"}, {indicator: "B", text: "It was widely accepted while holding value"}, {indicator: "C", text: "The money looked nice"}]},
            {id: 7, question: "What was the first implementation of paper money?", answer: "b", answers: [{indicator: "A", text: "Betting"}, {indicator: "B", text: "Credit"}, {indicator: "C", text: "To replace coins"}, {indicator: "D", text: ""}]},
            {id: 8, question: "What happened when paper money was introduced?", answer: "b", answers: [{indicator: "A", text: "Paper money replaced coins"}, {indicator: "B", text: "Paper money and coins co-existed"}, {indicator: "C", text: "Paper money was not really used"}]},
            {id: 9, question: "What were the banknotes in Europe backed by initially?", answer: "c", answers: [{indicator: "A", text: "The government"}, {indicator: "B", text: "Trust of the people"}, {indicator: "C", text: "Gold and/or silver"}]},
            {id: 10, question: "Was the government initially the owner of the banks?", answer: "a", answers: [{indicator: "A", text: "No, they took that right solely for them later on"}, {indicator: "B", text: "Yes, they had this from the beginning"}, {indicator: "C", text: "No, they never took that right away from the civilians"}]},
            {id: 11, question: "What does a gold standard do?", answer: "c", answers: [{indicator: "A", text: "All coins in circulation are made out of gold"}, {indicator: "B", text: "A high percentage of money must be invested in gold"}, {indicator: "C", text: "For every x amount of coin in circulation (dollar, eur, etc), the same amount in gold exists (on paper)"}, {indicator: "D", text: "All of the above"}]},
            {id: 12, question: "Since when is the dollar (and thus every other national currency) off the gold standard?", answer: "c", answers: [{indicator: "A", text: "1945"}, {indicator: "B", text: "1969"}, {indicator: "C", text: "1971"}, {indicator: "D", text: "1999"}]},
            {id: 13, question: "What is now the limit on fiat printing, since we are off the gold standard?", answer: "d", answers: [{indicator: "A", text: "1 trillion"}, {indicator: "B", text: "10 trillion"}, {indicator: "C", text: "100 trillion"}, {indicator: "D", text: "unlimited"}]},
            {id: 14, question: "What happens when you keep on printing new money?", answer: "a", answers: [{indicator: "A", text: "Inflation"}, {indicator: "B", text: "Deflation"}, {indicator: "C", text: "Gold standard"}, {indicator: "D", text: "Nothing"}]},
            {id: 15, question: "What is inflation?", answer: "b", answers: [{indicator: "A", text: "The incline of purchasing power of a given currency over time"}, {indicator: "B", text: "The decline of purchasing power of a given currency over time"}, {indicator: "C", text: "The stabilization of purchasing power of a given currency over time"}]},
            {id: 16, question: "What for impact does infaltion have on your life?", answer: "d", answers: [{indicator: "A", text: "Makes saving harder"}, {indicator: "B", text: "Essentially gives you a pay cut each year if you do not get a raise"}, {indicator: "C", text: "Lowers your purchasing power (gas prices and groceries get more expensive etc.)"}, {indicator: "D", text: "All of the above"}]},
            {id: 17, question: "What are characteristics of a deflationary asset? (Multiple choice)", answer: "b,c", answers: [{indicator: "A", text: "Abundance"}, {indicator: "B", text: "Scarcity"}, {indicator: "C", text: "Hard to produce/retrieve"}, {indicator: "D", text: "All of the above"}]},
            {id: 18, question: "What are advantages of digital money compared to physical money? (Multiple choice)", answer: "d", answers: [{indicator: "A", text: "Easy to use"}, {indicator: "B", text: "Fast"}, {indicator: "C", text: "Ease of storing"}, {indicator: "D", text: "All of the above"}]},
            {id: 19, question: "What are disadvantages of digital money? (Multiple choice)", answer: "d", answers: [{indicator: "A", text: "Easier for governments to print"}, {indicator: "B", text: "Removes a layer of privacy"}, {indicator: "C", text: "Easier to be stolen"}, {indicator: "D", text: "All of the above"}]}
          ]},
        {id: 3, name: "Investing 101", color: "#F7504E", cat: "investing", questions: [] },
      ]
    }
  },
  computed: {
    filterCategory: function(){
      const allCats = [];

      const unique = (value, index, self) => {
        return self.indexOf(value) === index
      }

      this.quizzes.forEach(function(item){
        allCats.push(item.cat)
      });
      console.log(allCats.filter(unique))
      return allCats.filter(unique)
    },
    filterProductsByCategory: function(){
      return this.quizzes.filter(quiz => quiz.cat.includes(this.select) || quiz.cat.includes(this.select[0]) || quiz.cat.includes(this.select[1]) || quiz.cat.includes(this.select[2]) || quiz.cat.includes(this.select[3]))
    }
  },
};
</script>

<style scoped>

</style>