<template>
  <v-container>
    <budget-app-dialog
      v-model="showBudgetAppDialog"
      :value-type="dialogType"
      :arrayIdenifier="arrayKeyIdentifier"
    ></budget-app-dialog>
    <div class="main">
      <div class="top_categories">
        <v-row class="cat_row">
          <v-col cols="3">
            <div class="topCats">
              <h3>Hobby</h3>
              <h2>€{{ getHobby }}</h2>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="topCats">
              <h3>Entertainment</h3>
              <h2>€{{ getEntertainment }}</h2>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="topCats">
              <h3>Food</h3>
              <h2>€{{ getFood }}</h2>
            </div>
          </v-col>
          <v-col cols="3">
            <div class="topCats">
              <h3>Miscellaneous</h3>
              <h2>€{{ getMisc }}</h2>
            </div>
          </v-col>
        </v-row>
      </div>
      <div class="main_budget">
        <div class="budget_content">
          <v-simple-table fixed-header height="60vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Payment amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody v-if="select">
                <tr v-for="item in getBudgetOut" :key="item.id">
                  <td>-€{{ item.value }}</td>
                  <td>{{ item.type }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-btn
            fab
            small
            color="#F7504E"
            class="add_btn"
            @click.stop="openOutDialog"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
        </div>
        <div class="budget_content" style="text-align: center">
          <v-row>
            <v-col cols="12"
              ><h1 v-if="select">€{{ getTotal }}</h1>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><h2 v-if="select" style="color: limegreen">+{{ getIN }}</h2>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><h2 v-if="select" style="color: red">-€{{ getOUT }}</h2>
              <h2 v-else>Select a month</h2></v-col
            >
            <v-col cols="12"
              ><v-combobox
                color="#F7504E"
                item-color="#F7504E"
                v-model="select"
                :items="createMonthList"
                label="Choose month"
                outlined
                style="margin-left: 20%; margin-right: 20%;"
              ></v-combobox
            ></v-col>
            <v-col>
              <v-btn color="#F7504E" style="color: white" @click="addMonth">Add this month</v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="budget_content">
          <v-simple-table fixed-header height="60vh">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Income amount</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody v-if="select">
                <tr v-for="item in getBudgetIn" :key="item.id">
                  <td>+€{{ item.value }}</td>
                  <td>{{ item.type }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
          <v-btn
            fab
            small
            color="#F7504E"
            class="add_btn"
            @click.stop="openInDialog"
          >
            <v-icon dark> mdi-plus </v-icon>
          </v-btn>
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
import budgetAppDialog from "@/components/budgetAppDialog";

export default {
  name: "Budget",
  components: {
    budgetAppDialog,
  },
  data() {
    return {
      arrayKeyIdentifier: null,
      dialogType: "",
      showBudgetAppDialog: false,
      select: "",
      tab: 0,
      BudgetObject: null,
    };
  },
  watch: {
    showBudgetAppDialog: function () {
      if (this.showBudgetAppDialog === false) {
        this.getBudgetApp();
      }
    },
  },
  beforeMount() {
    this.getBudgetApp();
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
    getBudgetIn() {
      let vars;
      let budgetItems = [];
      if (this.BudgetObject) {
        if (this.select) {
          vars = this.select.split(" ");
          this.BudgetObject.in.forEach((item, key) => {
            if (item.month === vars[0] && item.year === vars[2]) {
              budgetItems.push(item);
              this.arrayKeyIdentifier = key;
            }
          });
        }
      }
      return budgetItems;
    },
    getBudgetOut() {
      let vars;
      let budgetItems = [];
      if (this.BudgetObject) {
        if (this.select) {
          vars = this.select.split(" ");
          this.BudgetObject.out.forEach((item, key) => {
            if (item.month === vars[0] && item.year === vars[2]) {
              budgetItems.push(item);
              this.arrayKeyIdentifier = key;
            }
          });
        }
      }
      return budgetItems;
    },
    getIN() {
      let value = 0;
      this.getBudgetIn.forEach((item) => {
        value = value + parseInt(item.value);
      });
      return value;
    },
    getOUT() {
      let value = 0;
      this.getBudgetOut.forEach((item) => {
        value = value + parseInt(item.value);
      });
      return value;
    },
    getTotal() {
      return this.getIN - this.getOUT;
    },
    getHobby() {
      let value = 0;
      this.getBudgetOut.forEach((item) => {
        if (item.type === "Hobby") {
          value = value + parseInt(item.value);
        }
      });
      return value;
    },
    getEntertainment() {
      let value = 0;
      this.getBudgetOut.forEach((item) => {
        if (item.type === "Entertainment") {
          value = value + parseInt(item.value);
        }
      });
      return value;
    },
    getFood() {
      let value = 0;
      this.getBudgetOut.forEach((item) => {
        if (item.type === "Food") {
          value = value + parseInt(item.value);
        }
      });
      return value;
    },
    getMisc() {
      let value = 0;
      this.getBudgetOut.forEach((item) => {
        if (item.type === "Miscellaneous") {
          value = value + parseInt(item.value);
        }
      });
      return value;
    },
  },
  methods: {
    openInDialog() {
      this.showBudgetAppDialog = true;
      this.dialogType = "in";
    },
    openOutDialog() {
      this.showBudgetAppDialog = true;
      this.dialogType = "out";
    },
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
        }),
      });
      await this.getBudgetApp();
    },
    async getBudgetApp() {
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
          in: [],
          out: [],
        });
      }
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
  height: 15%;
  margin-bottom: 2%;
  position: relative;
}

.cat_row {
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  position: absolute;
  top: 25%;
}

.main_budget {
  border-radius: 10px;
  background-color: lightgray;
  height: 80%;
  display: flex;
  bottom: 0;
  padding: 10px;
}

.budget_content {
  flex: 1;
  position: relative;
}

.add_btn {
  position: absolute;
  right: 4px;
  top: 4px;
  z-index: 2;
}

.topCats {
  border-radius: 10px;
  background-color: lightgray;
  text-align: center;
  margin-bottom: auto;
  margin-top: auto;
}
</style>
