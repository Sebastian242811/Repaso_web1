<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-card v-if="existList === false" width="800" class="mx-auto mt-xl-16 pa-4 mb-16">
      <h2 class="text-center">No tiene ninguna Terminal relacionado</h2>
      <v-card-actions class="pa-4 mt-4 justify-center">
        <v-btn class="pa-5" @click="navigateToMyTerminal">Relacionar Terminales</v-btn>
      </v-card-actions>
    </v-card>
    <list-ship-terminal v-if="existList === true"></list-ship-terminal>
  </v-card>
</template>

<script>
import ShipTerminalService from '@/services/ship-terminal/ship-terminal-service'
import ListShipTerminal from "@/components/company/createTerminal/ship-terminal/listShipTerminal";

export default {
  name: "MyShipTerminal",
  components: {ListShipTerminal},
  data(){
    return{
      existList: '',
      shipTerminalRequest: []
    }
  },
  methods: {
    retrieveShipTerminal(){
      ShipTerminalService.getAll().then(response => {
        if(response.data.length === 0){
          this.existList = false;
        }
        else{
          this.existList = true;
        }
      }).catch(e => {
        console.log(e);
      })
    },
    navigateToMyTerminal(){
      this.$router.push({name: 'Terminal'});
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
