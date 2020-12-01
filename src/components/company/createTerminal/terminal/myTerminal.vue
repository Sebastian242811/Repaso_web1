<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <h1 class="text-center pt-8 pb-8">Hola, listo para crear tu terminal</h1>
    <v-card v-if="existList === false" width="600" class="mx-auto ma-10 pt-5 pb-5" align="center">
      <h2 class="style-card-without-dispatcher">Usted no posee ningun terminal</h2>
      <div>
        <v-icon class="pa-2 pb-5" size="50">mdi-alert-circle-outline</v-icon>
      </div>
      <v-btn class="mb-6" @click="navigateToCreateTerminal">Agregar tu primer terminal</v-btn>
    </v-card>
    <list-terminal v-if="existList === true"></list-terminal>
  </v-card>
</template>

<script>
import ListTerminal from "@/components/company/createTerminal/terminal/listTerminal";
import TerminalService from '@/services/terminal/terminal-service'

export default {
  name: "MyTerminal",
  components: {ListTerminal},
  data(){
    return{
      existList: ''
    }
  },
  methods: {
    navigateToCreateTerminal(){
      this.$router.push({name: 'CreateTerminal'});
    },
    retrieveTerminals(){
      TerminalService.getAll().then(response => {
        if(response.data.length === 0){
          this.existList = false;
        }
        else{
          this.existList = true;
        }
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrieveTerminals();
  }

}
</script>

<style scoped>

</style>
