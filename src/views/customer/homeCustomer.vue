<template>
  <div>
    <h1>Paquetes en Progreso</h1>
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
import packageService from '@/services/customer/package.service'
export default {
  name: "homeCustomer",
  data(){
    return{
      packages:[]
    }
  },
  methods: {
    getall() {
      packageService.getnonShippedUserPackages(1).then(response => {
        this.packages = response.data;
      });
    },
    navigatetoPackageInfo(id){
      this.$router.push({name:`PackageInfo`,params:{id:id}}).catch(() => {});
    }
  },
  mounted() {
    this.getall();
  }
}
</script>

<style scoped>

</style>