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
        <v-btn text @click="navigateToCreateTerminal">
          Crear Terminal
        </v-btn>
        <v-btn text @click="navigateToShipTerminal">
          Ver Terminales Enlazados
        </v-btn>
        <v-btn text @click="navigateToAddDispatcher">
          Mis Despachadores
        </v-btn>
        <v-btn text @click.prevent="logout">Sign Out</v-btn>
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
import CompanyService from "@/services/security/company/company.service";

export default {
  name: "AppDispatcher",
  computed:{
    currentCompany(){
      console.log(this.$store.state.authCompany.company);
      return this.$store.state.authCompany.company;
    },
    currentUserFullName() {
      return `${this.currentUser.username} ${this.currentUser.name}`;
    }
  },
  mounted() {
    if (!this.currentCompany) {
      this.$router.push('/loginCompany');
    }
    CompanyService.getAll().then(
        response => {
          this.companies = response.data;
        },
        error => {
          this.message = (error.response && error.response.data) || error.toString();
        }
    )
  },
  methods: {
    navigateToHome(){
      this.$router.push({name: 'HomeCompany'}).catch(() => {});
    },
    navigateToShipTerminal(){
      this.$router.push({name: 'ShipTerminal'}).catch(() => {});
    },
    navigateToAddDispatcher(){
      this.$router.push({name: 'FindDispatcher'}).catch(() => {});
    },
    navigateToCreateTerminal(){
      this.$router.push({name: 'Terminal'}).catch(() => {});
    },
    logout() {
      this.$store.dispatch('authCompany/logout');
      this.$router.push('/loginCompany');
    }
  }
}
</script>

<style scoped>

</style>
