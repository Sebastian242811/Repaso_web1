<template>
  <div>
    <h1>Bienvenido Enlazar Terminales</h1>
    <v-card class="ma-10">
      <v-row class="mx-auto">
        <v-col md="1">
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="4">
          <v-select
              :items="terminal"
              v-model="terminalOrigin"
              item-text="name"
              label="Terminal de Origen"
              return-object
          ></v-select>
        </v-col>
        <v-col md="2">
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="4">
          <v-select
              v-model="terminalDestiny"
              :items="terminal"
              item-text="name"
              label="Terminal de Llegada"
              return-object
          ></v-select>
        </v-col>
      </v-row>
      <v-row class="mx-auto">
        <v-col md="1">
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="4">
          <v-card class="mb-16" v-if="terminalOrigin !== null">
            <v-card-title class="justify-center">Terminal Origin</v-card-title>
            <v-row>
              <v-col md="5" class="text-end">
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Id:</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Name:</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Adress:</v-card-subtitle>
              </v-col>
              <v-col md="7" class="text-left">
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalOrigin.id }}</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalOrigin.name }}</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalOrigin.adress }}</v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col md="2">
          <v-spacer></v-spacer>
        </v-col>
        <v-col md="4">
          <v-card class="mb-16" v-if="terminalDestiny !== null">
            <v-card-title class="justify-center">Terminal Destiny</v-card-title>
            <v-row>
              <v-col md="5" class="text-end">
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Id:</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Name:</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">Adress:</v-card-subtitle>
              </v-col>
              <v-col md="7" class="text-left">
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalDestiny.id }}</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalDestiny.name }}</v-card-subtitle>
                <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ terminalDestiny.adress }}</v-card-subtitle>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-row md="12" v-if="terminalDestiny !== null && terminalOrigin !== null">
          <v-col sm="5">
            <v-spacer></v-spacer>
          </v-col>
          <v-col md="2">
          <v-text-field
              v-model.number="cost"
              type="number"
              label="Costo de Envio">
          </v-text-field>
          </v-col>
        </v-row>
        <v-col md="12" v-if="terminalDestiny !== null && terminalOrigin !== null && cost !== 0">
          <v-card-actions>
            <v-btn class="pa-5 mx-auto white--text" color="#005C90" @click="saveShipTerminal">UnirTerminal</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import TerminalService from '@/services/terminal/terminal-service'
import ShipTerminalService from '@/services/ship-terminal/ship-terminal-service'

export default {
  name: "attach-terminal",
  data(){
    return{
      cost: 0,
      terminal: [],
      terminalDestiny: null,
      terminalOrigin: null,
      shipTerminal: {
        terminalOriginId : 0,
        terminalDestinyId: 0,
        price: 0
      }
    }
  },
  methods:{
    retrieveTerminal(){
      TerminalService.getAll().then(response => {
        this.terminal = response.data;
      }).catch(e => {
        console.log(e);
      })
    },
    saveShipTerminal(){
      this.shipTerminal.price = this.cost;
      this.shipTerminal.terminalDestinyId = this.terminalDestiny.id;
      this.shipTerminal.terminalOriginId = this.terminalOrigin.id;
      console.log(this.shipTerminal);
      ShipTerminalService.postShipTerminal(this.shipTerminal).then(() => {
        this.$router.push({name: 'ShipTerminal'});
      }).catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrieveTerminal();
  }
}
</script>

<style scoped>

</style>
