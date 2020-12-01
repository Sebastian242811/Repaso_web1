import html from '../http-common'

class ChatService{
    getAll(){
        return html.get('/messages');
    }
    getAllChatsByCustomerId(id){
        return html.get(`/chats/customer/${id}`);
    }
    create(data){
        return html.post('/messages', data)
    }
}

export default new ChatService();
