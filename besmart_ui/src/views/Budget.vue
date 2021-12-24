<template>
  <v-container>
    <div class="main">
      <div class="top_categories"></div>
      <div class="main_budget">
        <div class="budget_content">
          <v-simple-table fixed-header height="100%">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody v-if="getBudget">
              <tr v-for="item in getBudget['out']" :key="item.id">
                <td>€{{ item.value }}</td>
                <td>{{ item.type }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
        <div class="budget_content" style="text-align: center">
          <v-row>
            <v-col cols="12"
              ><h1 v-if="getBudget">€{{ getTotal }}</h1>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><h2 v-if="getBudget">+{{ getIN }}</h2>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><h2 v-if="getBudget">-€{{ getOUT }}</h2>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><v-combobox
                v-model="select"
                :items="createMonthList"
                label="Choose month"
                outlined
              ></v-combobox
            ></v-col>
            <v-col>
              <v-btn @click="addMonth">Add this month</v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="budget_content">
          <v-simple-table fixed-header height="100%">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody v-if="getBudget">
              <tr v-for="item in getBudget['in']" :key="item.id">
                <td>€{{ item.value }}</td>
                <td>{{ item.type }}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import {
  collection,
  getDocs,
  query,
  where,
  setDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "@/main";
import { getAuth } from "firebase/auth";

export default {
  name: "Budget",
  data() {
    return {
      select: "",
      tab: 0,
      categories: [
        "Housing",
        "Transportation",
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
      BudgetObject: null,
    };
  },
  async beforeMount() {
    const auth = getAuth();
    const q = query(
      collection(db, "BudgetApp"),
      where("UID", "==", auth.currentUser.uid)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      this.BudgetObject = doc.data();
    });

    if (this.BudgetObject === null) {
      await setDoc(doc(db, "BudgetApp", auth.currentUser.uid), {
        UID: auth.currentUser.uid,
        app: [],
      });
    }
  },
  computed: {
    createMonthList() {
      let array = [];
      if (this.BudgetObject) {
        this.BudgetObject.app.forEach((item) => {
          let string = item.month + " - " + item.year;
          array.push(string);
        });
      }
      return array;
    },
    getBudget() {
      let vars;
      let budgetItems;
      if (this.BudgetObject) {
        if (this.select) {
          vars = this.select.split(" ");
          this.BudgetObject.app.forEach((item) => {
            if (item.month === vars[0] && item.year === vars[2]) {
              budgetItems = item;
            }
          });
        }
      }
      return budgetItems;
    },
    getIN() {
      let value = 0;
      this.getBudget["in"].forEach((item) => {
        value = value + item.value;
      });
      return value;
    },
    getOUT() {
      let value = 0;
      this.getBudget["out"].forEach((item) => {
        value = value + item.value;
      });
      return value;
    },
    getTotal() {
      return this.getIN - this.getOUT;
    },
  },
  methods: {
    async addMonth() {
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
      //get data again or listen for changes
      await updateDoc(docRef, {
        app: arrayUnion({
          month: months[d.getMonth()],
          year: d.getFullYear().toString(),
          in: [],
          out: [],
        }),
      })
    },
  },
};
</script>

<style scoped>
.main {
  background-color: white;
  border-radius: 10px;
  height: 81vh;
  padding: 10px;
}

.top_categories {
  border: 2px solid black;
  height: 25%;
}

.main_budget {
  height: 75%;
  display: flex;
}

.budget_content {
  border: 2px solid black;
  flex: 1;
}
</style>
