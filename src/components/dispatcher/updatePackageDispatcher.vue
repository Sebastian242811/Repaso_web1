<template>
  <v-card class="ma-15">
    <v-tabs
        class="asd"
        grow
    >
      <v-tab @click="navigateState(0)">Buscar paquete</v-tab>
      <v-tab @click="navigateState(1)">En espera</v-tab>
      <v-tab @click="navigateState(2)">En camino</v-tab>
      <v-tab @click="navigateState(3)">En terminal</v-tab>
    </v-tabs>
    <v-main>
      <v-container v-if="dispatcher.companyId === 0">
        <v-flex class="text-center">
          <v-icon class="pb-4" color="darkgrey" x-large>mdi-alert-circle</v-icon>
          <h1 style="color: darkgrey">No estas asociado a una compañia</h1>
        </v-flex>
      </v-container>
      <v-container v-else>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-card>
</template>

<script>
import DispatcherService from "@/services/dispatcher/dispatcher-service";

export default {
  name: "UpdatePackageDispatcher",
  data(){
    return{
      dispatcher: [],
      active: false
    }
  },
  methods: {
    retrieveDispatcher(id) {
      DispatcherService.getId(id)
          .then(response => {
            this.dispatcher = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    navigateState(stateId){
      this.$router.push({ name: `DispatcherState${stateId}`}).catch(() => {})
    }
  },
  mounted() {
    this.retrieveDispatcher(this.$route.params.dispatcherId);
  }
}
</script>

<style scoped>
</style>
