<template>
  <v-card width="600" class="mx-auto ma-10" align="center">
    <h2 class="style-card-without-dispatcher">Coloque el Id del dispatcher</h2>
    <v-row>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Id" type="number" v-model.number="existId">
        </v-text-field>
      </v-col>
      <v-col md="12">
        <v-btn class="mb-6" @click="searchDispatcher">Buscar</v-btn>
      </v-col>
      <v-col v-if="review === true" md="12">
        <v-card class="mx-auto mb-6" width="550">
          <v-row>
            <v-col md="5" class="text-end">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Id: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">Nombre: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">DNI: </v-card-subtitle>
            </v-col>
            <v-col md="7" class="text-left">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ dispatcher.id }}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ dispatcher.name }}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ dispatcher.dni }}</v-card-subtitle>
            </v-col>
            <v-col md="12">
              <v-btn class="mb-6" @click="assignDispatcher">Agregar</v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col v-else-if="review === false" md="12">
        <v-card-subtitle class="text-md-h5 pb-10 pl-0 red--text text-center font-weight-bold">No existe Dispatcher con Id: { ID }</v-card-subtitle>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import DispatcherService from "@/services/security/dispatcher/dispatcher.service";
import CompanyService from  '@/services/security/company/company.service'

export default {
  name: "createDispatcher",
  data(){
    return{
      existId: '',
      review: '',
      dispatcher: []
    }
  },
  computed: {
    currentCompany() {
      return this.$store.state.authCompany.company;
    }
  },
  methods: {
    searchDispatcher() {
      if (!this.currentCompany) {
        this.$router.push('/login');
      }

      DispatcherService.getById(this.existId).then(
          response => {
            this.review = true;
            this.dispatcher = response.data;
            console.log(response);
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            this.review = false;
          }
      )
    },
    assignDispatcher() {
      console.log(this.currentCompany.id);
      console.log(this.existId);
      CompanyService.asignDispatcher(this.currentCompany.id, this.existId).then(
          () => {
            console.log("Bien");
            this.$router.push({name: 'FindDispatcher'});
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            console.log("error");
          }
      )
    }
  }
}
</script>

<style scoped>

</style>
