<template>
  <v-card>
    <v-card-title>{{ currentUserFullName }}</v-card-title>
    <v-card-text>
      <p>
        <strong>Token:</strong>
        {{ currentUser.token}}
      </p>
      <p><strong>Id:</strong>{{ currentUser.id }}</p>
      <p><strong>Email:</strong>{{ currentUser.username }}</p>
      <v-btn text @click.prevent="logout">Sign Out</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>

import CompanyService from '@/services/security/company/company.service'

export default {
  name: "profile",
  data(){
    return{
      companies: [],
      message: ''
    }
  },
  computed: {
    currentUser() {
      console.log(this.$store.state.authCompany.company);
      return this.$store.state.authCompany.company;
    },
    currentUserFullName() {
      return `${this.currentUser.username} ${this.currentUser.name}`;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
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
    logout() {
      this.$store.dispatch('authCompany/logout');
      this.$router.push('/login');
    }
  }
}
</script>

<style scoped>

</style>
