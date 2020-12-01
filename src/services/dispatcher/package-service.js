import http from '../http-common'

class PackageService{
    getAllByState(stateId, dispatcherId){
        return http.get(`/packages/state/${stateId}/dispatcher/${dispatcherId}`)
    }

    updatePackageState(id,value){
        return http.put(`/packages/updatestate/${id}?value=${value}`);
    }

    getPackageByDispatcherNull(){
        return http.get('/packages/dispatcher/null');
    }
}

export default new PackageService();
