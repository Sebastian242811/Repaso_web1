import html from '../http-common'

class TerminalService{
    getAll(){
        return html.get('/terminals');
    }
    createTerminal(data){
        return html.post('/terminals',data);
    }
    getById(id){
        return html.get(`/terminals/${id}`);
    }
    deleteById(id){
        return html.delete(`/terminals/${id}`);
    }
}

export default new TerminalService();
