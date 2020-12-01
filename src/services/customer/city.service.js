import http from '../http-common'

class CityService{
    getById(id){
        return http.get(`/cities/${id}`);
    }
    getAll(){
        return http.get(`/cities`);
    }
}

export default new CityService();
