<template>
  <div class="mx-auto style-size-div">
    <v-card width="800" class="mx-auto my-11 mt-0" v-for="shipTerminal in shipTerminals" :key="shipTerminal.terminalOriginId && shipTerminal.terminalDestinyId">
      <v-row>
        <v-col md="6" align="center">
          <v-col md="12">
            <h2>Origen</h2>
          </v-col>
          <v-col md="12">
            <v-row justify="space-around"
                   align="center">
              <v-chip class="ma-2" color="primary">TerminalCity</v-chip>
              <v-chip class="ma-2" color="primary">{{ shipTerminal.terminalOrigin.name }}</v-chip>
            </v-row>
          </v-col>
          <v-col>
            <v-card class="mx-auto"
                    max-width="90%"
            >
              <h3 class="pa-1">{{ shipTerminal.terminalDestiny.adress }}</h3>
            </v-card>
          </v-col>
        </v-col>
        <v-col md="6" align="center">
          <v-col md="12">
            <h2>Destiny</h2>
          </v-col>
          <v-col md="12">
            <v-row justify="space-around"
                   align="center">
              <v-chip class="ma-2" color="primary">TerminalCity</v-chip>
              <v-chip class="ma-2" color="primary">{{ shipTerminal.terminalDestiny.name }}</v-chip>
            </v-row>
          </v-col>
          <v-col>
            <v-card class="mx-auto"
                    max-width="90%"
            >
              <h3 class="pa-1">{{ shipTerminal.terminalOrigin.adress }}</h3>
            </v-card>
          </v-col>
        </v-col>
      </v-row>
      <v-card-actions class="pb-5">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#1DBF00">Costo: {{ shipTerminal.price }}</v-btn>
      </v-card-actions>
      <v-card-actions class="pb-5">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="error" @click="deleteShipTerminal(shipTerminal.terminalOriginId, shipTerminal.terminalDestinyId)">Eliminar</v-btn>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#50ACF3">Actualizar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import ShipTerminalService from '@/services/ship-terminal/ship-terminal-service'

export default {
  name: "listShipTerminal",
  data(){
    return{
      paintOrigin: false,
      paintDestiny: false,
      shipTerminals: [],
      typeOfPriority: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  },
  methods:{
    retrieveShipTerminal(){
      ShipTerminalService.getAll().then(response => {
        this.shipTerminals = response.data;
      }) .catch(e => {
        console.log(e);
      })
    },
    deleteShipTerminal(originId, destinyId){
      ShipTerminalService.deleteShipTerminalById(originId, destinyId).then(() => {
        this.retrieveShipTerminal();
      }).catch(e => {console.log(e);})
    }
  },
  mounted() {
    this.retrieveShipTerminal();
  }
}
</script>

<style scoped>
.style-size-div{
  width: 800px;
  margin-top: 50px;
}
</style>
