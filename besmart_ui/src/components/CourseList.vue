<template>
  <v-container>
    <Course v-model="showDialog" :data="dialogData" :color="color" />
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
            color="#F7504E"
            dark
            max-width="400"
            :elevation="hover ? 12 : 2"
          >
            <v-card-title>
              <span class="text-h6 font-weight-light">{{item.title}}</span>
            </v-card-title>

            <v-card-text class="text-h5 font-weight-bold">
              {{item.description}}
            </v-card-text>

            <v-card-actions>
              <v-list-item class="grow">
                <v-btn
                  outlined
                  rounded
                  text
                  style="background-color: white; color: black;"
                  @click.stop="openDialog(item)">
                  Start course
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
import Course from "@/components/Course";

export default {
  name: "CourseList",
  components: {
    Course,
  },
  props: {
  cat: String,
  color: String,
  },
  data() {
    return {
      Courses: [
        {id: 1, title: "What is money?", description: "This course is about money and the history of money", category: "money", subjects: [
            {id: 1, name: "Bartering", slide: "The oldest form of transaction is bartering. This method of trading goods or services uses no currency to settle the payments. For example, a farmer wants fish from the local fisherman, so he pays the fisherman with crops from his farmland to settle the payment. "},
            {id: 2, name: "Bartering", slide: "There are a couple of limitations to this method. First of all, what if the fisherman is not interested in everything the farmer has to offer? He likes fish so why would he need the crops from the farmer? This way the farmer cannot propose a trade to the fisherman."},
            {id: 3, name: "Bartering", slide: "Secondly, a party might feel like he is not getting an equal value out of the trade. For example, the farmer receives two fish (let’s say these both cost 5 euros a piece if calculated in to euros), and the farmer gives 10 potatoes back, but these 10 would be the equivalent of 12 euros. If they used a common currency, the farmer could just give 10 euros to the fisherman, but because he can only offer whole potatoes, most of the time on of the parties comes out a little less good compared to the other. "},
            {id: 4, name: "Bartering", slide: "Another limitation is the difficulty of storing value for the long term. If you want to save products to ensure your financial future, all you need to know is what product everyone wants to have, and stock up on this product for a long time. Nowadays you know everyone wants to have euros, dollars etc., but back then there was not a clear product to have for storing value. "},
            {id: 5, name: "Bartering", slide: "https://www.youtube.com/watch?v=LfgVLxUN-mg"},
            {id: 6, name: "Commodity money", slide: "After bartering, from about 1000 BC, commodity money was started being used. Commodity money is money whose value comes from the resource it is made out of (also known as the intrinsic value) or the use of the object in itself. A few examples of commodities that have been used throughout the times are: "},
            // {id: 7, name: "Commodity money", slide: "@/assets/slideImageCommodity.jpg"},
            {id: 8, name: "Commodity money", slide: "A popular form of commodity money at the time, were metal coins. The value of these coins came from the weight of the metal that the coin was made out of. A problem with this is, the more people find of this metal around the world, the more the value of this metal and thus the coins decreases. It also occurred that people manipulated the coins by removing some of the metal thus reducing their value."},
            {id: 9, name: "Commodity money", slide: "A pro is that you could use these coins to pay for almost everything, since they were widely accepted, and so you did not have to rely on bartering."},
            {id: 10, name: "Paper money", slide: "During the 11th century, paper money was introduced in Song dynasty China."},
            {id: 11, name: "Paper money", slide: "Before this eventually happened, paper money was first seen in the form of banknotes since the seventh century, in the Tang dynasty. Here the banknotes first had the purpose of handling credit. A reason for this was, that merchants would otherwise have to carry heavy loads of coins with them when they made bigger trades. So instead of carrying these heavy bags, they had banknotes, which had the corresponding amount of coins in numbers written on it."},
            {id: 12, name: "Paper money", slide: "During these times the banknotes were used alongside the already existing coins. Over the next several hundred years, the principles of paper money were continuously being refined and, in the 11th century when travelers like Marco Polo came back from China to Europe in the 13th century, the idea of paper money came back with them. It would still take around 300 years before it was adopted and implemented in Europe, with Sweden being the earliest adopter."},
            {id: 13, name: "Paper money", slide: "The banknotes used in Europe at that time could be converted into gold or silver by application at the bank. A noteworthy sidenote; these banks were not in the hands of the government at first. Over time, governments started taking the rights to issue banknotes solely for themselves. When they did, the banks said they backed the money by gold or silver. So theoretically, if you handed in the paper money at the bank, the bank would hand you the equivalent in gold or silver back."},
            {id: 14, name: "Gold standard", slide: "When money is backed by gold, it is called the “Gold standard”."},
            {id: 15, name: "Gold standard", slide: "There is a fixed supply of gold in the world, and the money in circulation would be backed by that amount. For every dollar of paper money you turn in at the bank, you would get a dollar in gold back. This way you have a little amount of inflation, since new gold is hard to find and can not be made by humans."},
            {id: 16, name: "Gold standard", slide: "From the 1870s to the early 1920s, and from the late 1920s to 1932 as well as from 1944 until 1971 the gold standard was the basics for the international monetary system. In 1971, american president Nixon took the dollar of the gold standard. Since then, the US dollar, and thus all national currencies are free-floating currencies. This means that these currencies are allowed to fluctuate in response to foreign exchange market events."},
            {id: 17, name: "Gold standard", slide: "Furthermore, money is now being printed by central banks (who are not chosen by the people) out of thin air, which causes inflation and could lead to hyperinflation."},
            {id: 18, name: "Inflation", slide: "Inflation is the decline of purchasing power of a given currency over time."},
            {id: 19, name: "Inflation", slide: "In every country that has a fiat currency (“a government-issued currency that is not backed by a commodity such as gold”, like the euro and the dollar), inflation increases each year, and most of the time because of this, the purchasing power decreases."},
            {id: 20, name: "Inflation", slide: "This means that if you, for example, had 10.000 euros last year and the inflation rate was 4%, you would still have 10.000 euros on your savings account, but now you can only buy something that was worth 9600 euros last year. Inflation increased, and your purchasing power decreased."},
            {id: 21, name: "Inflation", slide: "If this happens year after year, this can have a significant impact on your life. This makes saving harder, and also impacts your daily life. Products in the supermarket get more expensive, gas prices skyrocket etc. If you do not get a pay raise each year, you essentially get a pay cut each year due to inflation, since you earn the same amount of money, while this money itself is losing value due to more being printed, while  at the same time companies raise their prices to battle inflation."},
            {id: 22, name: "Inflation", slide: "You can also have deflation, this usually happens to products that are scarce and can not be easily made or printed out of thin air, like gold or bitcoin. When something is deflationary, it gets more valuable over time."},
            // {id: 23, name: "Inflation", slide: require("../assets/slideImageInflation.png")},
            {id: 24, name: "Digital money", slide: "Since the gold standard was abandoned, in the late 20th century payment cards became popular. These cards were widely adopted and showed that you do not need to have physical money for all of your transactions."},
            {id: 25, name: "Digital money", slide: "The development of computer technology sparked the concept of digital money. By 1990, all money transferred between the central and commercial banks of the United States of America was digital. By 2000 most money was digital (in the western world), this means they were kept track of in databases."},
            {id: 26, name: "Digital money", slide: "Digital money can be an easier and faster method of payment than physical (cash), with digital money you can pay someone in the next town over without having to meet him in real life and handing him the money."},
            {id: 27, name: "Digital money", slide: "It is also easier to store, 100.000 euros in physical money is harder to store than 100.000 on your bank account (in other words, in a database)."},
            {id: 28, name: "Digital money", slide: "A couple of disadvantages of digital money is, that it is easier for governments to print, it removes a layer of privacy, and it is easier to be stolen. In 2020 more than 40% of all the dollars in its entire existence was “printed”, economics are worried this will cause very high inflation. When you buy something via your bank, the bank knows where and sometimes even on what you spend your money, this is a lot harder to know when you use physical money. It is also easier to get someones money in digital form, than physical. This has partly to do with the advantage that it is easier to store, since the disadvantage of this is, that when someone gets access to it, it will be also easy to steal larger sums at once. Additionally, people who are not very tech-savvy, or who are gullible, can be the victims of online scams. People go to extreme lengths to get, for example, elderly people to hand them their money, by pretending to be their family or their bank." },
          ]},
        {id: 2, title: "Investing 101", description: "This course is about investing", category: "money"},
        {id: 3, title: "Bitcoin", description: "An informational course about bitcoin", category: "money", subjects: [{id: 29, name: "Bitcoin", slide: "After digital money became mainstream, some people brainstormed about the idea of decentralized and/or peer-to-peer money. Decentralized money means, that no one is the owner of the currency. The classic banking system is very centralized and has owners, governments and central banks decide who prints the money and how much. Commercial banks, like ABN Amro, have ownership over your money while you have it stored in their database."},
            {id: 1, name: "Bitcoin", slide: "Peer-to-peer means no person in between you and the person you want to pay, or get paid from. Nowadays, if you pay at the supermarket, or one of your friends, the bank is the middleman. You have given the bank your money, they in return give (or used to give) you interest on it and when you make a payment, the bank sends this money to the right person(‘s bank account)."},
            {id: 2, name: "Bitcoin", slide: "In 2008, bitcoin was created by an unknow person/group known as Satoshi Nakamoto. It is based on cryptography and a distributed ledger, called a blockchain."},
            {id: 3, name: "Bitcoin", slide: "A distributed ledger is a big kind of database that is shared across multiple computers (bitcoin nodes), that holds all the transactions made from every wallet with corresponding data, like date and time, sender and receiver, and amounts of bitcoin. If one node tries to corrupt the blockchain, the others ignore him and continue on the blockchain that has the most nodes. So, to make a change you have to have the majority, instead of a single owner or group that can make changes at will. This makes bitcoin the most decentralized form of money in the world."},
            {id: 4, name: "Bitcoin", slide: "With bitcoin, you have the option to be the sole owner of your currency for the first time ever in the history of mankind. As long as you are the only one who knows your seed phrase (12 or 24 words that give access to your wallet on the blockchain), no one can take your bitcoins away from you (without force). No governments or central banks, no criminals, no one. This, and some other reasons, is why bitcoin and the blockchain is seen as a censorship free money."},
            {id: 5, name: "Bitcoin", slide: "Bitcoin gets its value, sort of like gold and silver, from being mined and its scarcity. But bitcoins are not mined in mines, but on computers. These miners solve difficult mathematical equations and get rewarded in bitcoin. This gives the bitcoin value, namely the electrical energy that has been put into mining it, unlike fiat currency that gets printed out of thin air. If it costs more to dig the gold up, than the gold itself that you get from it, it is not worth digging for. The same goes for bitcoin."},
            {id: 6, name: "Bitcoin", slide: "Initially, a miner was rewarded 50 bitcoins per block. Every 210.000 blocks mined, the reward gets cut in half. Currently, the reward is 6.25 bitcoins per block, and at the moment every 10 minutes a block is solved."},
            {id: 7, name: "Bitcoin", slide: "One of the genius aspects of bitcoin, is the difficulty adjustment. This adjustment works so, that it does not matter how hard you “dig” for the bitcoin, the last bitcoin mined will be the same year. The harder you dig for it, the harder it is to get, the less you dig for it, the easier it will be mined. Bitcoin is programmed so, that there will only be 21 million bitcoins ever mined, and due to the halvings and the difficulty adjustment, the last bitcoin will always be mined in 2140."},
            {id: 8, name: "Bitcoin", slide: "Bitcoin is at the moment a deflationary currency, the supply is getting smaller and smaller (scarcity) and the demand is rising. It has been the best performing asset of the world since it was created. A problem with this is, that people are not eager to spend their bitcoin, since it might be worth more in the future. Its price is also very volatile, compared to classic investment vehicles like stocks and gold (bitcoin is however pretty stable in comparison to other cryptocurrencies). Because of this, it is  currently mostly used as an asset to hold and grow value throughout time."},
            {id: 9, name: "Bitcoin", slide: "However, there are people who are using it as a currency, especially in the poorer countries of the world. Since billions of people around the world (around 1.7 billion adults!) still do not have access to a bank, but do have smartphones, they can use bitcoin to store their wealth and at the same time protect them against heavy inflation in those countries."},
            {id: 10, name: "Bitcoin", slide: "With bitcoin, you can also send it to the other side of the world with the same ease as sending it to someone next to you. This is very helpful for example for people who work in a first world country, who want to send a part of their salary to relatives in a third world country. Currently, these people will need to do that through companies like Western Union, who charge high fees and the process of sending that money also takes a lot of time."},
            {id: 11, name: "Bitcoin", slide: "The bitcoin network is up 24/7, 365 days per year and cannot be hacked. The bitcoin network might be the biggest honeypot in the world, if someone would be able to hack it they would be very rich, and no doubt that people are trying it everyday for years, but because of how bitcoin is coded, this is not doable. This is why people say that bitcoin is a “bank that will serve everyone”, it is free to use and has a better uptime and security than any bank in the world has." },
            {id: 12, name: "El Salvador", slide: "This is why El-Salvador, as the first country in the world, made bitcoin legal tender in their country. This means that every business or the government, must recognise by law that bitcoin can be used to settle a public or private debt. Or, in other words, every big company and the government must accept bitcoin as a payment option. So, in the McDonalds in El Salvador, you can pay with bitcoin!"},
            {id: 13, name: "El Salvador", slide: "A big reason that El Salvador, (and probably a lot of other 3rd world countries in the future) made bitcoin legal tender, has to do with the fact that they do not have their own currency. In 2001, El Salvador gave up control of its monetary policy. Before that, their currency was the Salvadoran colón, which was switched to the US dollar in 2001."},
            {id: 14, name: "El Salvador", slide: "Since the only legal tender in El Salvador was the US dollar, and only the United States Central Banks can print more of the dollar, this came with some problems. When the US prints more of the dollar, it gets less and less valuable (inflation). Moreover, these added dollars were only added to the american economy, not the economies of the other (5 US territories & 8 other countries) dollar using countries."},
            {id: 15, name: "El Salvador", slide: "So, not only did the dollars in these non US countries get less and less valuable, they also do not get more dollars to stimulate their economy, like the US. When America started printing trillions and trillions amounts of dollar for stimulus packages and infrastructure bills, El Salvador (and the other countries) saw this as a problem, and pulled the trigger as the first country to adopt bitcoin as legal tender to prevent them from hyper inflation. They also bought some bitcoin as a government, and are already building multiple hospitals and schools from a portion from the earnings."},
          ]}
      ],
      showDialog: false,
      dialogData: null,
    }
  },
  computed: {
    filterProductsByCategory: function(){
      return this.Courses.filter(course => !course.category.indexOf(this.cat))
    }
  },
  methods: {
    openDialog(data){
      this.showDialog = true
      this.dialogData = data
    }
  }
};
</script>

<style scoped>
.courseCard{
  margin: 10px;
  position: relative;
}
</style>