<template>
  <v-card>
    <h1>Bienvenido {{ dispatcher.name }}</h1>
  </v-card>
</template>

<script>
import DispatcherService from '@/services/dispatcher/dispatcher-service'

export default {
  name: "HomeDispatcher",
  data(){
    return{
      dispatcher: []
    }
  },
  methods: {
    retrieveDispatcher(id){
      DispatcherService.getId(id)
      .then(response => {
        this.dispatcher = response.data;
        console.log(this.dispatcher);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrieveDispatcher(this.$route.params.dispatcherId);
  }

}
</script>

<style scoped>

</style>
