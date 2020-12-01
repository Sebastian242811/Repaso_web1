<template>
  <div>
    <v-row >
      <h1>Mis Paquetes</h1>
        <v-col cols="2">
          <v-select
              v-model="select"
              :hint="`${select.state}`"
              :items="items"
              item-text="state"
              item-value="abbr"
              label="Select"
              persistent-hint
              return-object
              single-line
          ></v-select>
        </v-col>
    </v-row>
  <v-container class="grey lighten-5" fluid="xl">
    <v-row>
      <v-col v-for="packae in packages" :key="packae" cols="1" sm="4">
        <v-card class="mx-auto" max-width="344" outlined rounded="xl">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-4">
                {{ packae.state }}
              </div>
              <v-list-item-title class="headline mb-1">
                {{packae.name}}
              </v-list-item-title>
              <v-list-item-subtitle>{{packae.description}}</v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>

          <v-card-actions>
            <v-btn @click="navigatetoPackageInfo(packae.id)" outlined rounded text>
              Info
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
import PackageService from '@/services/customer/package.service'
export default {
  name: "myPackages",
  data(){
    return{
      packages:[],
      select: { state: 'En espera', abbr:1},
      items: [
        { state: 'En espera',abbr:1 },
        { state: 'En ruta',abbr:2 },
        { state: 'En terminal destino',abbr:3 },
        { state: 'Entregado',abbr:4 }
      ],
      stateid: 0,
    }
  },
  methods:{
    getPackagesbyUser(id){
      PackageService.getAllbyUser(id).then(response=>{this.packages=response.data});
    },
    navigatetoPackageInfo(id){
      this.$router.push({name:`PackageInfo`,params:{id:id}}).catch(() => {});
    },
    getpackagebystate(id,stat){
      PackageService.getbypackagestate(id,stat).then(response=>{this.packages=response.data});
    }
  },
  mounted() {
    this.getpackagebystate(1,1);
  }
}
</script>

<style scoped>

</style>