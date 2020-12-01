<template>
  <v-card
      class="mx-auto"
  >
    <div class="mx-auto style-size-div">
      <div class="mt-11">
        <v-row>
          <v-col md="5">
            <v-select
                v-model="selectedOrigin"
                :items="cities"
                item-value="id"
                item-text="name"
                label="Origen"
            ></v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-col md="5">
            <v-select
                v-model="selectedDestiny"
                :items="cities"
                item-value="id"
                item-text="name"
                label="Destino"
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="5">
            <v-btn >
              Buscar
            </v-btn>
          </v-col>
        </v-row>
      </div>
      <v-card width="800" class="mx-auto my-11 mt-0" v-for="terminal in terminalServices" :key="terminal.terminalDestiny.name">
        <v-card-title class="justify-center text-h4">{{ terminal.terminalOrigin.company.name }}</v-card-title>
        <v-row>
          <v-col md="6" align="center">
            <v-col md="12">
              <h2>Origen</h2>
            </v-col>
            <v-col md="12">
              <v-row justify="space-around"
                     align="center">
                <v-chip class="ma-2" color="primary">{{terminal.terminalOrigin.name}}</v-chip>
              </v-row>
            </v-col>
            <v-col>
              <v-card class="mx-auto"
                      max-width="90%"
              >
                <h3 class="pa-1">{{terminal.terminalOrigin.adress}}</h3>
              </v-card>
            </v-col>
          </v-col>
          <v-col md="6" align="center">
            <v-col md="12">
              <h2>Destino</h2>
            </v-col>
            <v-col md="12">
              <v-row justify="space-around"
                     align="center">
                <v-chip class="ma-2" color="primary">{{terminal.terminalDestiny.name}}</v-chip>
              </v-row>
            </v-col>
            <v-col>
              <v-card class="mx-auto"
                      max-width="90%"
              >
                <h3 class="pa-1">{{terminal.terminalDestiny.adress}}</h3>
              </v-card>
            </v-col>
          </v-col>
        </v-row>
        <v-card-actions class="pb-8">
          <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#1DBF00" @click="navigateToMoreInfo(terminal.terminalOrigin.companyId)">Mas informacion</v-btn>
          <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#00D2E9" @click="navigateToNewPackage(terminal.terminalOrigin.id, terminal.terminalDestiny.id)">Solicitar {{ terminal.price }}</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-card>
</template>

<script>
import ShipTerminal from '@/services/customer/shipterminal.service'
import CityService from '@/services/customer/city.service'

export default {
  name: "findCompany",
  data(){
    return{
      terminalServices: [],
      cities: [],
      compname: '',
      selectedOrigin:0,
      selectedDestiny:0
    }
  },
  methods: {
    retrieveTerminals(){
      ShipTerminal.getAll().then(response=>{
        this.terminalServices = response.data})
      .catch(e => {
        console.log(e);
      });
    },
    navigateToMoreInfo(id){
      this.$router.push({name:"MoreInfo",params:{id:id}});
    },
    navigateToNewPackage(OriginId, DestinyId){
      this.$router.push({name:'NewPackage',params:{OriginId: OriginId, DestinyId: DestinyId}});
    },
    getcitynames(){
      CityService.getAll().then(response=>{this.cities=response.data});
    },
    refresh(){
      this.retrieveTerminals();
    }
  },
  mounted() {
    this.retrieveTerminals();
    this.getcitynames();
  }
}
</script>

<style scoped>
.style-size-div{
  width: 800px;
}
</style>
