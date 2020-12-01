<template>
  <div v-if="showNothing === true">
    <div v-for="pack in packages" :key="pack.id">
      <v-card
          class="mx-auto mb-15"
          max-width="600"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ pack.id }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ pack.description }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ pack.observations }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-card-actions v-if="name === 'DispatcherState1'">
          <v-btn
              outlined
              rounded
              text
              @click="updateState(pack.id,2)"
          >
            Adelante
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </div>
  <div v-else>
    <v-flex class="text-center">
      <v-icon
          x-large
      >mdi-clipboard-remove-outline</v-icon>
      <h1 style="color: darkgrey">No tiene ningun paquete</h1>
    </v-flex>
  </div>
</template>

<script>
import PackageService from '@/services/dispatcher/package-service'

export default {
  name: "PackageState1",
  data(){
    return {
      packages: [],
      name: '',
      showNothing: false
    }
  },
  methods: {
    retrievePackageState(id){
      PackageService.getAllByState(id, this.$route.params.dispatcherId)
          .then(response => {
            this.packages = response.data;
            if(response.data.length === 0){
              this.showNothing = false;
            }
            else{
              this.showNothing = true;
            }
          })
          .catch(e => {
            console.log(e);
          })
    },
    refresh(id){
      this.retrievePackageState(id);
    },
    updateState(id,value){
      PackageService.updatePackageState(id,value)
      .then(() => {
        this.refresh(1);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrievePackageState(1);
    this.name = this.$route.name;
  }
}
</script>

<style scoped>

</style>
