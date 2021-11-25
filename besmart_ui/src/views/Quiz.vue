<template>
  <questions :quiz="quiz"></questions>
</template>
<script>
import Questions from "@/components/Questions";

export default {
  name: "Quiz",
  components: {
    Questions,
  },
  data() {
    return {
      quiz: {
        id: 0,
        name: "Bitcoin",
        cat: "money",
        questions: [
          {
            id: 0,
            question: "What for network is bitcoin?",
            answer: "D",
            answers: [
              { indicator: "A", text: "Centralized with a middleman" },
              { indicator: "B", text: "Centralized peer-to-peer" },
              { indicator: "C", text: "Decentralized with a middleman" },
              { indicator: "D", text: "Decentralized peer-to-peer" },
            ],
          },
          {
            id: 1,
            question: "What is decentralized?",
            answer: "A",
            answers: [
              {
                indicator: "A",
                text: "Activity or organization controlled by multiple instances",
              },
              {
                indicator: "B",
                text: "Activity or organization that is decent in their work",
              },
              {
                indicator: "C",
                text: "Activity or organization controlled by one person or group",
              },
              {
                indicator: "D",
                text: "Activity or organization controlled by the government",
              },
            ],
          },
          {
            id: 2,
            question: "What is peer-to-peer?",
            answer: "C",
            answers: [
              {
                indicator: "A",
                text: "Computer to computer connection, without another computer or server in the middle",
              },
              { indicator: "B", text: "Two apple computers connected" },
              {
                indicator: "C",
                text: "Connection between two computers, with another computer or server in the middle",
              },
            ],
          },
          {
            id: 3,
            question: "How do bitcoins get created?",
            answer: "A",
            answers: [
              {
                indicator: "A",
                text: "All bitcoins were created at the start of bitcoin, no more are being added",
              },
              { indicator: "B", text: "Made out of thin air" },
              { indicator: "C", text: "Mined by computers" },
              { indicator: "D", text: "Government distributes them" },
            ],
          },
          {
            id: 4,
            question: "Why is bitcoin called a “censorship free money”?",
            answer: "C",
            answers: [
              {
                indicator: "A",
                text: "Bitcoin network is backed by the government",
              },
              {
                indicator: "B",
                text: "Bitcoin network’s moderators do not delete content",
              },
              {
                indicator: "C",
                text: "Bitcoin network cannot be hacked and everyone can use it",
              },
              { indicator: "D", text: "All of the above" },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style scoped></style>
