<template>
  <v-card
      width="1500"
      class="mx-auto"
  >
    <v-app-bar
        dark
        color="blue"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Chat Customer y Company</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-row>
      <v-col md="3">
        <list-chats></list-chats>
      </v-col>
      <v-col>
        <message-chat></message-chat>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

import MessageChat from "@/components/customer/chat/messageChat";
import ListChats from "@/components/customer/chat/listChats";

export default {
  name: "Chat",
  components: {ListChats, MessageChat}
}
</script>

<style scoped>
</style>
