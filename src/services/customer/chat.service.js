import http from '../http-common'

class PackageService{
    getAll(){
        return http.get('/messages');
    }
    getAllChatsByCustomerId(id){
        return http.get(`/chats/customer/${id}`);
    }
    create(data){
        return http.post('/messages', data)
    }
    existChat(customerId, companyId){
        return http.get(`/chats/company/${companyId}/customer/${customerId}`);
    }
    createChat(data){
        return http.post('/chats',data);
    }
}


export default new PackageService();
