<template>
  <v-container>
    <div class="loginDiv">
      <h1>Login</h1>
      <br/>
      <form ref="form" @submit.prevent="login">
        <v-row>
          <v-col cols="12">
            <v-text-field
              dense
              filled
              rounded
              item-color="#F7504E"
              color="#F7504E"
              label="E-mail"
              placeholder="E-mail"
              v-model="email"
              :rules="rules.email.concat(rules.req)"
              type="email"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-text-field
              dense
              filled
              rounded
              item-color="#F7504E"
              color="#F7504E"
              label="Password"
              placeholder="Password"
              v-model="password"
              :rules="rules.req"
              type="password"
            ></v-text-field>
          </v-col>
          <v-col cols="12">
            <v-btn class="btn-grad" type="submit">Login</v-btn>
          </v-col>
          <v-col cols="12">
            <p>Need an account? <router-link to="/signup">Sign up</router-link></p>
          </v-col>
        </v-row>
      </form>
    </div>
    <v-snackbar v-model="snackbar" :color="snackColor" :timeout="timeout">
      {{ successMessage }}
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "@/router";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      errorCode: "",
      errorMessage: "",
      successMessage: "",
      user: {},
      snackbar: false,
      timeout: 6000,
      snackColor: "",
      rules: {
        req: [v => (v || '').length > 0 || 'This field is required'],
        email: [v => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'],
      }
    };
  },
  methods: {
    login: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential.user);
          this.successMessage =
            "You have successfully logged in!";
          this.snackbar = true;
          this.snackColor = "green";
          router.push("/");
        })
        .catch((error) => {
          this.errorCode = error.code;
          this.errorMessage = error.message;
          this.snackbar = true;
          this.snackColor = "red";
        });
    },
  },
};
</script>

<style scoped>
.loginDiv {
  background-color: white;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px;
  border-radius: 10px;
}

.btn-grad {background-image: linear-gradient(to right, #ED4264 0%, #FFEDBC  51%, #ED4264  100%)}
.btn-grad {
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  color: black;
}

.btn-grad:hover {
  background-position: right center; /* change the direction of the change here */
  color: #000;
  text-decoration: none;
}

@media only screen and (max-width: 600px) {
  .loginDiv {
    width: 100%;
  }
}
</style>
