import html from '../http-common'

class CityService{
    getAll(){
        return html.get('/cities')
    }
}

export default new CityService();
