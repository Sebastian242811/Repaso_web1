import http from '../http-common'

class PackageService{
    getAllbyUser(id){
        return http.get(`/packages/package/customer/${id}`);
    }
    getnonShippedUserPackages(id){
        return http.get(`/packages/packagestate/customer/${id}`);
    }
    getPackagebyId(id){
        return http.get(`/packages/${id}`);
    }
    getbypackagestate(id,state){
        return http.get(`/packages/packagestate/customer/${id}/state/${state}`);
    }
    savePackage(data){
        return http.post('/packages',data);
    }
}

export default new PackageService();
