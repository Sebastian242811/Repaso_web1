<template>
  <v-card  class=" mx-auto" >
    <h1>Nuevo Paquete</h1>
    <v-row class="pa-4">
      <v-col cols="12"
             sm="4"
             class="ma-0">
        <v-text-field
            v-model="packageRequest.name"
            class="background-text"
            placeholder="Nombre del paquete"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col cols="12"
             sm="0"
             md="4"
             class="ma-0">
        <v-select
            v-model.number="packageRequest.priority"
            :items="typeOfPriority"
            label="Prioridad"
            item-text="state"
            item-value="abbr"
        ></v-select>
      </v-col>
      <v-col cols="12"
             sm="4"
             class="ma-0">
        <v-text-field
            v-model="packageRequest.weight"
            class="background-text"
            placeholder="Peso del paquete"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col md="12" class="ma-0">
        <v-text-field
            v-model="packageRequest.description"
            class="background-text"
            placeholder="Descripcion sobre el paquete que enviara"
            solo
        >
        </v-text-field>
      </v-col>
      <v-col md="12" class="ma-0">
        <v-text-field
            v-model="packageRequest.observations"
            class="background-text"
            placeholder="Alguna observacion para el paquete"
            solo
        >
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="mb-10">
      <v-col md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col md="3" class="ma-0">
        <v-card class="pa-7">
        <h1 class="text-center mb-9">Origen</h1>
          <v-row>
            <v-col md="4">
              <h4>Nombre:</h4>
              <h4>Ciudad:</h4>
            </v-col>
            <v-col md="8">
              <h4>{{ Origin.name }}</h4>
              <h4>{{ Origin.city.name }}</h4>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="2">
        <v-spacer></v-spacer>
      </v-col>
      <v-col md="3" class="ma-0">
        <v-card class="pa-7">
          <h1 class="text-center mb-9">Destino</h1>
          <v-row>
            <v-col md="4">
              <h4>Nombre:</h4>
              <h4>Ciudad:</h4>
            </v-col>
            <v-col md="8">
              <h4>{{ Origin.name }}</h4>
              <h4>{{ Origin.city.name }}</h4>
            </v-col>
          </v-row>
          <h2>
          </h2>
        </v-card>
      </v-col>
    </v-row>
    <v-card-actions>
      <v-row>
        <v-col md="4">
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="3">
          <v-btn class="mx-auto ma-0 pa-6" color="primary" @click="navigateToFindCompany()">
            Cancelar
          </v-btn>
        </v-col>
        <v-col md="3">
          <v-btn class="mx-auto ma-0 pa-6" color="error" @click="save()">
            Aceptar
          </v-btn>
        </v-col>
        <v-col md="4">
          <v-spacer></v-spacer>
        </v-col>
      </v-row>
    </v-card-actions>
    <h1>{{ this.packageRequest.terminalOriginId }}</h1>
  </v-card>
</template>

<script>
import PackageService from '@/services/customer/package.service'
import Terminal from "@/services/terminal/terminal-service"

export default {
  name: "newPackage",
  data(){
    return{
      packageRequest:{
        name: '',
        description: '',
        observations: '',
        priority: 0,
        weight: '',
        discount: 0,
        customerId: 0,
        terminalOriginId: 0,
        terminalDestinyId: 0
      },
      typeOfPriority: [{state:'Baja', abbr:1}, {state:'Media',abbr:2}, {state:'Alta',abbr:3}],
      Origin: [],
      Destiny: [],

    }
  },
  computed: {
    currentCustomer() {
      return this.$store.state.authCustomer.customer;
    }
  },
  methods:{
    navigateToFindCompany(){
      this.$router.push({name: "FindCompany"});
    },

    save(){
      this.packageRequest.customerId = this.currentCustomer.id;
      this.packageRequest.terminalOriginId = parseInt(this.$route.params.OriginId);
      this.packageRequest.terminalDestinyId = parseInt(this.$route.params.DestinyId);

      PackageService.savePackage(this.packageRequest).then(() => {
            this.$router.push({name: "HomeCustomer"})
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            console.log("error");
          }
      )
    },

    retrieveByTerminals(){
      Terminal.getById(this.$route.params.OriginId).then(response => {
        this.Origin = response.data;
      }).catch(e => { console.log(e);})

      Terminal.getById(this.$route.params.DestinyId).then(response => {
        this.Destiny = response.data;
      }).catch(e => { console.log(e);})
    }
  },
  mounted() {
    this.retrieveByTerminals();
  }
}
</script>

<style scoped>

</style>
