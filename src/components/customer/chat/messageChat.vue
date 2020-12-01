<template>
  <v-container>
    <v-card class="scroll"
            height="700"
    >
      <div :style="changeSize">
      </div>

      <div ref="laWidth">
        <v-container fluid fill v-for="message in messages" :key="message.id">
          <v-layout v-if="message.companyId !== 0">
            <v-card color="error" class="ma-1" max-width="48%">
              <h2 class="pa-2 white--text font-weight-regular">
                {{ message.description }}
              </h2>
            </v-card>
          </v-layout>
          <v-layout v-else>
            <v-spacer></v-spacer>
            <v-card color="primary" class="ma-1" max-width="48%">
              <h2 class="pa-2 white--text font-weight-regular">
                {{ message.description }}
              </h2>
            </v-card>
          </v-layout>
        </v-container>
      </div>
    </v-card>
    <v-card height="110" color="#94D7FF">
      <v-row class="pa-4">
        <v-col sm="1">
        </v-col>
        <v-col cols="12"
               sm="0"
               md="9">
          <v-text-field
              v-model="messageResource.description"
              class="background-text rounded-xl"
              placeholder="Escribe un mensaje aqui"
              hide-details
              solo
          >
          </v-text-field>
        </v-col>
        <v-col
        >
          <v-btn class="rounded-circle pa-0" min-width="48" height="48" @click="click">
            <v-icon class="mx-auto">
              mdi-check-bold
            </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import ChatService from '@/services/chat/chat-service'

export default {
  name: "MessageChat",
  data (){
    return{
      totalHeight: 0,
      messages: [],
      messageResource:{
        id: 0,
        companyId: 0,
        customerId: 0,
        chatId: 0,
        description: ''
      }
    }
  },
  computed: {
    changeSize(){
      return{
        height: `${700 - this.totalHeight}px`,
        width: '100%'
      }
    }
  },
  methods:{
    retrieveChat(){
      ChatService.getAll()
          .then(response => {
            this.messages = response.data;
          })
          .catch(e => {
            console.log(e);
          })
    },
    click(){
      this.messageResource.chatId = 1;
      this.messageResource.customerId = 1;
      this.messageResource.companyId = 0;
      ChatService.create(this.messageResource)
      .then(() => {
        this.retrieveChat();
        this.messageResource = '';
      })
      .catch(e => {
        console.log(e);
      })
    },
    logout(){
      this.$store.dispatch('authDispatcher/logout');
      this.$router.push('/login');
    }
  },
  mounted() {
    this.retrieveChat();
  },
  updated() {
    if(this.totalHeight <= 700) {
      this.totalHeight = this.$refs.laWidth.clientHeight;
    }
    else {
      this.totalHeight = 650;
    }
  }
}
</script>

<style scoped>
.my-text-style >>> .v-text-field__slot input {
  color: blue;
  border-bottom-color: black;
}
.my-text-style >>> fieldset {
  border-color: rgba(192, 0, 250, 0.986);
}
.my-text-style >>> label{
  color: blue;
}

.scroll {
  overflow-y: scroll;
}

.background-text{
  background-color: white;
}
</style>
