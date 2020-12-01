<template>
  <v-card>
    <h1>Bienvenido</h1>
  </v-card>
</template>

<script>
import CompanyService from "@/services/security/company/company.service";

export default {
  name: "home-company",
  data(){
    return{
      companies: [],
      message: ''
    }
  },
  computed: {
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
          this.message = (error.response && error.response.data) ||error.toString();
        }
    )
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
