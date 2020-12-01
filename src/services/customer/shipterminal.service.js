import http from '../http-common'

class ShipTerminalService{
    getAll(){
        return http.get('/shipTerminals');
    }
}

export default new ShipTerminalService();
