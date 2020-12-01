<template>
  <v-container>
    <v-card class="scroll pa-3" width="400" color="#E3F2FD" height="800">
      <v-card v-for="chat in chats" :key="chat.id" class="ma-2">
        <v-row>
          <v-col md="4" class="text-center">
            <v-icon size="65">
              mdi-account-circle
            </v-icon>
          </v-col>
          <v-col md="6" >
            <h3>{{ chat.company.name }}</h3>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import ChatService from '@/services/chat/chat-service'

export default {
  name: "listChats",
  data(){
    return{
      chats: []
    }
  },
  methods: {
    retrieveGetAllChatsByCustomerId(id){
      ChatService.getAllChatsByCustomerId(id)
      .then(response => {
        this.chats = response.data;
      })
      .catch(e => {
        console.log(e);
      })
    }
  },
  mounted() {
    this.retrieveGetAllChatsByCustomerId(1);
  }
}
</script>

<style scoped>
.scroll {
  overflow-y: scroll;
}
</style>
