<template>
  <div id="stepper-1">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
            :complete="this.e1 > 0"
            step="1"
        >
          En Espera
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="this.e1 > 1"
            step="2"
        >
          En Camino
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="this.e1 > 2" step="3" >
          En terminal Destino
        </v-stepper-step>
        <v-divider></v-divider>
      <v-stepper-step :complete="this.e1 > 3" step="4">
        Entregado
      </v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
          >
              <h2>Estado inicial:    {{this.initialState}}</h2>
              <h2>Estado Final:        {{this.finalState}}</h2>
              <h2>Fecha de actualizacion: {{this.changeDate}}</h2>
          </v-card>

          <v-btn @click="navigateToPackageInfo()">
            Salir
          </v-btn>

          <v-btn
              color="primary"
              @click="navigateToinRoute()"
          >
            Continuar
          </v-btn>
        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import ChangeService from "@/services/customer/changestate.service";

export default {
  name: "waitingState",
  data(){
    return{
      listChanges:[],
      //e1:0,
      initialState: " sin datos registrados",
      finalState: "sin datos registrados",
      changeDate: "sin datos registrados",
      changeDay: "sin datos registrados",
      changeHour:"sin datos registrados"
    }
  },
  methods:{
    getChangeState(id){
      ChangeService.getChangeState(id,1,2).then(response=>{this.initialState=response.data.initialState,this.finalState=response.data.finalState,this.changeDate=response.data.editDate}).catch();
    },
    navigateToinRoute(){
      this.$router.push({name:'InRoute',params:{id:this.$route.params.id}});
    },
    navigateToPackageInfo(){
      this.$router.push({name:"PackageInfo",params:{id:this.$route.params.id}});
    },
    getAllChanges(){
      ChangeService.getPackageChanges(this.$route.params.id).then(response=>{this.listChanges=response.data});
      //this.e1=this.listChanges.length
    },
    getDayAndHour(){
      this.changeDay=this.changeDate.split('T')[1];
      this.changeHour=this.changeDate.split('T')[0];
    }
  },
  mounted() {
    this.getChangeState(this.$route.params.id);
    this.getAllChanges();
    this.getDayAndHour();
  }
}
</script>

<style scoped>

</style>