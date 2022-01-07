<template>
  <v-dialog v-model="show" max-width="500px">
    <v-card>
      <v-container>
        <h2 v-if="valueType === 'in'">Create new income</h2>
        <h2 v-if="valueType === 'out'">Create new expenses</h2>
        <br />
        <v-form v-if="valueType === 'out'" @submit.prevent="addPayment">
          <v-combobox
            dense
            filled
            rounded
            placeholder="Select a category"
            :items="outCategories"
            v-model="select"
          ></v-combobox>
          <v-text-field
            v-model="amount"
            type="number"
            dense
            filled
            rounded
            placeholder="Amount of €"
          ></v-text-field>
          <v-btn color="green" rounded type="submit">Save</v-btn>
        </v-form>
        <v-form v-if="valueType === 'in'" @submit.prevent="addIncome">
          <v-combobox
            dense
            filled
            rounded
            placeholder="Select a category"
            :items="inCategories"
            v-model="select"
          ></v-combobox>
          <v-text-field
            v-model="amount"
            type="number"
            dense
            filled
            rounded
            placeholder="Amount of €"
          ></v-text-field>
          <v-btn color="green" rounded type="submit">Save</v-btn>
        </v-form>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { getAuth } from "firebase/auth";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "@/main";

export default {
  name: "budgetAppDialog",
  props: {
    value: Boolean,
    valueType: String,
    arrayIdentifier: Number,
  },
  data() {
    return {
      amount: 0,
      select: "",
      outCategories: [
        "Housing",
        "Transportation",
        "Gasoline",
        "Food",
        "Utilities",
        "Insurance",
        "Medical & Healthcare",
        "Saving",
        "Investing",
        "Debt payments",
        "Entertainment",
        "Partying",
        "Hobby",
        "Miscellaneous",
      ],
      inCategories: [
        "Gifts",
        "Salary",
        "Investments",
        "Sold something",
        "Dividend",
      ],
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    async addPayment() {
      const auth = getAuth();
      const docRef = doc(db, "BudgetApp", auth.currentUser.uid);
      const d = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      this.show = false;
      await updateDoc(docRef, {
        out: arrayUnion({
          month: months[d.getMonth()],
          year: d.getFullYear().toString(),
          type: this.select,
          value: this.amount,
          timestamp: d.getTime(),
        }),
      });
    },
    async addIncome() {
      const auth = getAuth();
      const docRef = doc(db, "BudgetApp", auth.currentUser.uid);
      const d = new Date();
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      this.show = false;
      await updateDoc(docRef, {
        in: arrayUnion({
          month: months[d.getMonth()],
          year: d.getFullYear().toString(),
          type: this.select,
          value: this.amount,
          timestamp: d.getTime(),
        }),
      });
    },
  },
};
</script>

<style scoped></style>
