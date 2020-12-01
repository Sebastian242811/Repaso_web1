<template>
  <v-card
      width="900"
      class="mx-auto"
  >
    <v-app-bar
        dark
        color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Login Dispatcher</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-flex class="pa-0 pb-16 text-center">
            <v-img class="mx-auto" :src="logo" width="200px" height="250px"></v-img>
          </v-flex>
          <v-card
              color="#E1F5FE"
          >
            <v-card-title class="headline black--text pb-8 pa-8 font-weight-bold">
              <v-flex class="text-center">
                Iniciar Session Despachador
              </v-flex>
            </v-card-title>
            <v-form @submit="handleLoginDispatcher" v-model="isValid">
              <v-card-text>
                <v-row
                    style="height: 80px;"
                    justify="center"
                >
                  <v-col
                      cols="12"
                      md="5"
                  >
                    <p class="my-text-label text-right pa-5">Ingrese su Username:</p>
                  </v-col>
                  <v-col
                      cols="6"
                      sm="5"
                  >
                    <v-text-field label="Username"
                                  v-model="dispatcher.username"
                                  :rules="[v => !!v || 'Username is required.']"
                                  required></v-text-field>
                  </v-col>
                </v-row>
                <v-row
                    style="height: 80px;"
                    justify="center"
                >
                  <v-col
                      cols="12"
                      md="5"
                  >
                    <p class="my-text-label text-right pa-5">Ingrese su contraseña:</p>
                  </v-col>
                  <v-col
                      cols="6"
                      sm="5"
                  >
                    <v-text-field label="Password"
                                  v-model="dispatcher.password"
                                  type="password"
                                  :rules="[v => !!v || 'Password is required']"
                                  required></v-text-field>
                  </v-col>
                  <v-col md="12">
                    <div v-if="message">
                      {{ message }}
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
              <v-card-actions>
                <v-btn class="mx-auto" color="primary" :disabled="loading" type="submit">
                  <v-progress-circular indeterminate color="primary"
                                       v-if="loading"></v-progress-circular>
                  Login
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>

import Dispatcher from "@/models/dispatcher";

export default {
  name: "LoginDispatcher",
  data (){
    return{
      logo: require('@/img/avatar.png'),
      dispatcher: new Dispatcher('','','','',''),
      loading: false,
      message: '',
      isValid: true
    }
  },
  computed:{
    loggedIn(){
      return this.$store.state.authDispatcher.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push({name: 'HomeDispatcher'});
    }
  },

  methods:{
    handleLoginDispatcher() {
      this.loading = true;
      console.log('Starting Login handling');
      if (!this.isValid) {
        console.log('Invalid');
        this.loading = false;
        return;
      }
      if (this.dispatcher.username && this.dispatcher.password) {
        this.$store.dispatch('authDispatcher/login', this.dispatcher).then(
            (dispatcher) => {
              console.log('Logged In');
              console.log(dispatcher);
              this.$router.push('/chat');
            },
            error => {
              console.log('Error');
              this.loading = false;
              this.message = (error.response && error.response.data)
                  || error.message || error.toString();
            }
        )
      }
    }
  }
}
</script>

<style scoped>
.my-text-style >>> .v-text-field__slot input {
  color: blue;
  border-bottom-color: black;
}
.my-text-style >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}
.my-text-style >>> label{
  color: blue;
}
.my-text-label{
  color: black;
}
</style>
