import html from '../http-common'

class ShipTerminalService{
    getAll(){
        return html.get('/shipTerminals');
    }
    postShipTerminal(data){
        return html.post('/shipTerminals',data);
    }
    deleteShipTerminalById(originId, destinyId){
        return html.delete(`/shipTerminals/originId/destinyId?originId=${originId}&destinyId=${destinyId}`);
    }
}

export default new ShipTerminalService();
