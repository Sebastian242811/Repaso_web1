<template>
  <div class="div-size mx-auto">
    <v-row>
      <v-col md="12">
      <v-card-actions>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#BABABA" @click="navigateToCreateTerminal">Crear Terminales</v-btn>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#36DB4C" @click="navigateToAttachTerminal">Unir Terminales</v-btn>
      </v-card-actions>
      </v-col>
    </v-row>
    <v-card class="mb-15 pb-2 mx-auto" v-for="terminal in terminals" :key="terminal.id">
      <v-row>
        <v-col md="4">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Nombre: </v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Direccion: </v-card-subtitle>
        </v-col>
        <v-col md="8">
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">{{ terminal.name }}</v-card-subtitle>
          <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-left">{{ terminal.adress }}</v-card-subtitle>
        </v-col>
      </v-row>
      <v-card-actions class="pb-5">
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="error" @click="deleteTerminal(terminal.id)">Eliminar</v-btn>
        <v-btn class="mx-auto pa-5 white--text text-sm-h6" color="#50ACF3">Actualizar</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import TerminalService from '@/services/terminal/terminal-service'

export default {
  name: "listTerminal",
  data(){
    return{
      terminals: []
    }
  },
  methods:{
    navigateToCreateTerminal(){
      this.$router.push({name: 'CreateTerminal'});
    },
    retrieveListTerminal(){
      TerminalService.getAll().then(response => {
        this.terminals = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    },
    navigateToAttachTerminal(){
      this.$router.push({name: 'AttachTerminal'});
    },
    deleteTerminal(id){
      TerminalService.deleteById(id).then(() => {
        this.retrieveListTerminal();
      }).catch(e => console.log(e));
    }
  },
  mounted() {
    this.retrieveListTerminal();
  }
}
</script>

<style scoped>
.div-size{
  width: 650px;
}
</style>
