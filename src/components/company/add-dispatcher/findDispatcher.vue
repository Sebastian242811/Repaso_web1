<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-app-bar
        dark
        color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Chat Customer y Company</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <h1>{{ dispatchers.name }}</h1>
    <h1 class="text-center pt-8 pb-8">Hola Bienvenido a AddDispatcher</h1>
    <v-card v-if="existList === false" width="600" class="mx-auto ma-10" align="center">
      <h2 class="style-card-without-dispatcher">Usted no posee ningun dispatcher</h2>
      <div>
        <v-icon class="pa-2 pb-5" size="50">mdi-alert-circle-outline</v-icon>
      </div>
      <v-btn class="mb-6" @click="navigateToAddDispatcher">Agregar Despachador</v-btn>
    </v-card>
    <list-dispatcher v-else-if="existList === true"></list-dispatcher>
  </v-card>
</template>

<script>
import ListDispatcher from "@/components/company/add-dispatcher/listDispatcher";
import DispatcherService from "@/services/security/dispatcher/dispatcher.service"

export default {
  name: "FindDispatcher",
  components: {ListDispatcher},
  data(){
    return{
      existList: '',
      dispatchers: []
    }
  },
  computed: {
    currentCompany() {
      return this.$store.state.authCompany.company;
    }
  },
  methods: {
    navigateToAddDispatcher(){
      this.$router.push({name: 'AddDispatcher'});
    },
    retrieveDispatcher(){
      DispatcherService.getByCompany(this.currentCompany.id).then(
          response => {
            if(response.data.length !== 0){
              this.existList = true
            }
            else {
              this.existList = false;
            }
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
</style>
