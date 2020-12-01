import html from '../http-common'

class DispatcherService{
    getAll(){
        return html.get('/dispatchers')
    }

    getId(id){
        return html.get(`/dispatchers/${id}`)
    }
}

export default new DispatcherService();
