<template>
  <v-card
      width="1000"
      class="mx-auto"
  >
    <v-card class="mx-auto ma-8" width="800">
      <v-row>
        <v-col md="9">
          <v-card-title  class="text-md-h4 mb-12">{{ company.name }}</v-card-title>
          <v-row>
            <v-col md="4">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Correo: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Ruc: </v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0 text-end">Numero: </v-card-subtitle>
            </v-col>
            <v-col md="8">
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ company.email }}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ company.ruc }}</v-card-subtitle>
              <v-card-subtitle class="text-md-h6 pb-0 pl-0">{{ company.number }}</v-card-subtitle>
            </v-col>
          </v-row>
        </v-col>
        <v-col class="pt-md-16 mt-16" md="3">
          <v-icon size="150">
            mdi-account-circle
          </v-icon>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12">
          <v-card-actions>
            <keep-alive>
              <v-btn class="mx-auto" @click="navigateToChat(company.id)">Comunicate con nosotros</v-btn>
            </keep-alive>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </v-card>
</template>

<script>
import CompanyService from '@/services/customer/company.service'
import ChatService from '@/services/customer/chat.service'
import chat from "@/components/customer/chat/chat";

export default {
  name: "moreInfo",
  data(){
    return {
      company: [],
      companyName: "",
      companyRuc: "",
      companyEMail: "",
      companynumber: "",
      validation: '',
      chat: {
        customerId: 0,
        companyId: 0
      }
    }
  },
  computed: {
    currentCustomer() {
      return this.$store.state.authCustomer.customer;
    }
  },
  methods:{
    retrieveCompanyInfo(){
      if(!this.currentCustomer){
        this.$router.push('/login-customer');
      }

      CompanyService.getCompanyById(1).then(
          response => {
              this.company = response.data;
              console.log("bien");
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            console.log("error");
          }
      )
    },
    navigateToChat(companyId){

      ChatService.existChat(companyId, this.currentCustomer.id).then(() => {
            this.$router.push({name: 'Chat'});
      },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            console.log("error");
          }
      )
      this.chat.companyId = companyId;
      this.chat.customerId = this.currentCustomer.id;
      ChatService.createChat(chat).then(() => {
            this.$router.push({name: 'Chat'});
          },
          error => {
            this.message = (error.response && error.response.data)
                || error.toString();
            console.log("error");
          }
      )
    }

  },
  mounted() {
    this.retrieveCompanyInfo();
    console.log(this.$route.params.id);
  }
}
</script>

<style scoped>

</style>
