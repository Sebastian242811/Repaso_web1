<template>
  <div id="stepper-2">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            step="1"
        >
          En Espera
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            step="2"
        >
          En Camino
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3">
          En Terminal Destino
        </v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="4">
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
            <h2>Feacha de actualizacion:            {{this.changeDate}}</h2>
          </v-card>

          <v-btn @click="navigateToWaiting()">
            Retroceder
          </v-btn>

          <v-btn
              color="primary"
              @click="navigateToInDestinyTerminal()"
          >
            Continuar
          </v-btn>


        </v-stepper-content>

      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script>
import ChangeState from '@/services/customer/changestate.service'
export default {
 name: "inRouteState",
  data(){
   return{
     initialState: " sin datos registrados",
     finalState: "sin datos registrados",
     changeDate: "sin datos registrados"
   }
  },
  methods:{
   navigateToInDestinyTerminal(){
     this.$router.push({name:"InDestinyTerminal",params:{id:this.$route.params.id}});
   },
    navigateToWaiting(){
     this.$router.push({name:"Waiting",params:{id:this.$route.params.id}});
    },
    getChangeState2(id){
     ChangeState.getChangeState(id,2,3).then(response=>{this.initialState=response.data.initialState,this.finalState=response.data.finalState,this.changeDate=response.data.editDate});
    }
  },
  mounted() {
   this.getChangeState2(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>