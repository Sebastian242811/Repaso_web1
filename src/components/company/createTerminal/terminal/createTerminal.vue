<template>
  <v-card width="600" class="mx-auto ma-10" align="center">
    <h2 class="style-card-without-dispatcher">Crea tu nuevo terminal</h2>
    <v-row>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Name" type="text" v-model="terminalRequest.name">
        </v-text-field>
      </v-col>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-text-field
            label="Adress" type="text" v-model="terminalRequest.adress">
        </v-text-field>
      </v-col>
      <v-col md="5" align="right">
        <v-icon class="pa-2 pb-5" size="50">mdi-account-search</v-icon>
      </v-col>
      <v-col md="4">
        <v-select
            v-model="terminalRequest.cityId"
            :items="cities"
            item-value="id"
            item-text="name"
            label="Ciudad"
        ></v-select>
      </v-col>
      <v-col md="12">
        <v-btn class="mb-6" @click="createTerminal">Crear</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import CityService from '@/services/city/city-service'
import TerminalService from  '@/services/terminal/terminal-service'

export default {
  name: "createTerminal",
  data(){
    return{
      valid: false,
      existId: '',
      terminalRequest: {
        name: '',
        adress: '',
        cityId: 0,
        companyId: 0
      },
      cities: []
    }
  },
  computed:{
    currentCompany(){
      console.log(this.$store.state.authCompany.company);
      return this.$store.state.authCompany.company;
    }
  },
  methods: {
    retrieveCities(){
      CityService.getAll().then(response => {
        this.cities = response.data;
      }).catch(e => {
        console.log(e);
      })
    },
    createTerminal(){
      this.terminalRequest.companyId = this.currentCompany.id;
      TerminalService.createTerminal(this.terminalRequest).then(() => {
        console.log("Agregado")
        this.$router.push({name: 'Terminal'})
      }).catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrieveCities();
  }
}
</script>

<style scoped>

</style>
