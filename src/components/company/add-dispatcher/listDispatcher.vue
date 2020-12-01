<template>
  <div class="div-size mx-auto">
    <v-row>
      <v-col md="12">
        <v-card-actions>
          <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="primary" @click="navigateToAddDispatcher">Agregar nuevo Dispatcher</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
    <v-card class="mb-15 pa-3" v-for="dispatcher in dispatchers" :key="dispatcher.id">
      <v-row>
        <v-col md="2">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Id: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Nombre: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">DNI: </v-card-subtitle>
        </v-col>
        <v-col md="6">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">{{ dispatcher.id }}</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">{{ dispatcher.name }}</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">{{ dispatcher.dni }}  </v-card-subtitle>
        </v-col>
        <v-col md="3">
          <v-icon size="180" align="left">
            mdi-account-circle
          </v-icon>
        </v-col>
        <v-col md="12">
          <v-card-actions>
            <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="error" @click="unAssignDispatcher(dispatcher.id)">Eliminar</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DispatcherService from "@/services/security/dispatcher/dispatcher.service";

export default {
  name: "ListDispatcher",
  data(){
    return{
      dispatchers: []
    }
  },
  computed: {
    currentCompany() {
      return this.$store.state.authCompany.company;
    }
  },
  methods:{
    unAssignDispatcher(id){
      DispatcherService.unAssign(id).then(() => {
        this.retrieveDispatcher();
      }).catch(e => console.log(e));
    },
    navigateToAddDispatcher(){
      this.$router.push({name: 'AddNewDispatcher'});
    },
    retrieveDispatcher(){
      DispatcherService.getByCompany(this.currentCompany.id).then(
          response => {
            this.dispatchers = response.data;
            console.log(this.dispatchers);
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
          }
      )
    }
  },
  mounted() {
    this.retrieveDispatcher();
  }
}
</script>

<style scoped>
.div-size{
  width: 750px;
}
</style>
