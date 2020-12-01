<template>
  <div>
    <div class="mx-auto mb-15"
            style="width: 600px">
      <v-row>
        <v-col
            cols="auto"
            class="mr-auto"
        >
          <v-row align="center">
            <v-col cols="12">
              <v-select
                  :items="packages"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  item-text="description"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
        <v-col
            cols="auto"
        >
          <v-row align="center">
            <v-col cols="12">
              <v-select
                  :items="packages"
                  :menu-props="{ top: false, offsetY: true }"
                  label="Label"
                  item-text="description"
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div v-for="pack in packages" :key="pack.id">
      <v-card
          class="mx-auto mb-15"
          max-width="600"
          outlined
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="headline mb-1">
              <v-row>
                <v-col cols="20" md="6">
                  {{ pack.name }}
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="auto">
                    <v-chip color="primary">
                      {{ pack.shipTerminal.terminalOrigin.name }}
                    </v-chip>
                </v-col>
                <v-col cols="auto">
                  <v-chip color="error">
                    {{ pack.shipTerminal.terminalDestiny.name }}
                  </v-chip>
                </v-col>
              </v-row>
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ pack.description }}
            </v-list-item-subtitle>
            <v-list-item-content>
              <v-row>
                <v-col cols="20" md="6">
                  {{ pack.observations }}
                </v-col>
                <v-col cols="auto" md="6" class="pa-1">
                  <v-flex class="text-right">
                    <v-btn color="#00C83A" class="white--text">
                      Agregar Paquete
                    </v-btn>
                  </v-flex>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
import PackageService from '@/services/dispatcher/package-service'

export default {
  name: "PackageNull",
  data(){
    return {
      packages: [],
      name: ''
    }
  },
  methods: {
    retrievePackageState(){
      PackageService.getPackageByDispatcherNull()
          .then(response => {
            this.packages = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    refresh(){
      this.retrievePackageState();
    },

    updateState(id,value){
      PackageService.updatePackageState(id,value)
          .then(() => {
            this.refresh();
          })
          .catch(e => {
            console.log(e);
          })
    }
  },
  mounted() {
    this.retrievePackageState();
    this.name = this.$route.name;
  }
}
</script>

<style scoped>

</style>
