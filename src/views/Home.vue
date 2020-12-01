<template>
  <v-app>
    <v-app-bar app color="#00C2FF">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h1 style="color: white">Virtual Express</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="navigateTologinCompany">
          Compania
        </v-btn>
        <v-btn text @click="navigateTologinCustomer">
          Cliente
        </v-btn>
        <v-btn text @click="navigateTologinDispatcher">
          Despachador
        </v-btn>
        <v-btn text @click="navigateTologinDealer">
          Repartidor
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  methods: {
    navigateTologinCustomer(){
      this.$router.push({name: 'LoginCustomer'})
    },
    navigateTologinCompany(){
      this.$router.push({name: 'LoginCompany'})
    },
    navigateTologinDealer(){
      this.$router.push({name: 'LoginCustomer'})
    },
    navigateTologinDispatcher(){
      this.$router.push({name: 'LoginDealer'})
    }
  }
}
</script>
