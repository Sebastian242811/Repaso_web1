<template>
  <v-app>
    <v-app-bar app color="#00C2FF">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>
        <h1 style="color: white">Virtual Express</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text @click="navigateToHome">
          Home
        </v-btn>
        <v-btn text @click="navigateToPackage">
          Package
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
import CustomerService from "@/services/security/customer/customer.service";

export default {
  name: "AppDispatcher",
  data(){
    return{
      dispatcher: []
    }
  },
  methods: {
    navigateToHome(){
      this.$router.push({name: 'HomeDispatcher', params: {dispatcherId: this.$route.params.dispatcherId}}).catch(() => {});
    },
    navigateToPackage(){
      this.$router.push({name: 'DispatcherState0', params: {dispatcherId: this.$route.params.dispatcherId}}).catch(() => {});
    }
  },
  computed: {
    currentDispatcher() {
      return this.$store.state.authDispatcher.dispatcher;
    }
  },
  mounted() {
    if (!this.currentDispatcher) {
      this.$router.push({name: 'LoginDispatcher'});
    }
    CustomerService.getAll().then(
        response => {
          this.dispatcher = response.data;
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
