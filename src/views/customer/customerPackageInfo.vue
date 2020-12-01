<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-card class="mx-auto ma-8" width="800">
      <v-row>
        <v-col md="9">
          <v-card-title  class="text-md-h4 mb-12">{{this.name}}</v-card-title>
          <v-row>
            <v-col md="4">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Descripcion: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Observaciones: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Prioridad: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Estado: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Peso: </v-card-subtitle>
            </v-col>
            <v-col md="8">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.description}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.observation}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.priority}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.state}}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{this.weight}} Kg.</v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-md-16 mt-16" md="3">
          <v-icon size="150">
            mdi-account-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card-actions>
            <keep-alive>
              <v-btn class="mx-auto" @click="navigateToPackageTracking()">Seguimiento</v-btn>
            </keep-alive>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import PackageService from '@/services/customer/package.service'
export default {
  name: "CustomerPackageInfo",
  data(){
   return {
     name:"",
     description:"",
     observation:"",
     priority:"",
     state:"",
     weight:"",
     discount:0
    }
  },
  methods:{
   getPackageInfo(id){
     PackageService.getPackagebyId(id).then(response=>(this.name=response.data.name,this.description=response.data.description,
         this.observation=response.data.observations,this.priority=response.data.priority,this.state=response.data.state,this.weight=response.data.weight,
         this.discount=response.data.discount));
   },
    navigateToPackageTracking(){
     this.$router.push({name:'Waiting',params:{id:this.$route.params.id}}).catch(()=>{});
    }
  },
  mounted(){
   this.getPackageInfo(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>