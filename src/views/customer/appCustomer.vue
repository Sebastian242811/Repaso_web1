<template>
  <v-app>
    <v-app-bar app color="#00C2FF">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>VirtualExpress</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="navigateToHome">
          Principal
        </v-btn>
        <v-btn text @click="navigateToNewPackage">
          Nuevo Envio
        </v-btn>
        <v-btn text @click="navigateToMyPackages">
          Mis paquetes
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  <v-main>
    <v-container>
      <router-view></router-view>
    </v-container>
  </v-main>
  <v-footer color="primary lighten-1" padless>
    <v-row
        justify="center"
        no-gutters
    >
      <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>TecSoft</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
import CustomerService from "@/services/security/customer/customer.service";


export default {
name: "appCustomer",
  data(){
    return{
      customer: [],
      logo: require('@/img/avatar.png'),
      links: [
        'Principal',
        'Landing Page',
        'Contactanos'
      ]
    }
  },
  computed: {
    currentCustomer() {
      return this.$store.state.authCustomer.customer;
    }
  },
  methods:{
    navigateToNewPackage(){
      this.$router.push({name: 'FindCompany'});
    },
    navigateToHome(){
      this.$router.push({name: 'HomeCustomer'});
    },
    navigateToMyPackages(){
      this.$router.push({name: 'MyPackages'});
    }
  },
  mounted() {
    if (!this.currentCustomer) {
      this.$router.push('/login-customer');
    }
    CustomerService.getAll().then(
        response => {
          this.customer = response.data;
        },
        error => {
          this.message = (error.response && error.response.data) || error.toString();
        }
    )
  }
}
</script>

<style scoped>

</style>
