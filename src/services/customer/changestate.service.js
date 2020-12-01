import http from '../http-common'
import authCustomerHeader from "@/services/security/customer/auth-customer-header";

class ChangestateService{
    getallChangesData(){
        return http.get(`changestates`, {headers: authCustomerHeader()});
    }
    getPackageChanges(id){
        return http.get(`changestates/package/${id}`,{headers: authCustomerHeader()})
    }
    getChangeState(id,initState,finalState){
        return http.get(`changestates/package/${id}/state/${initState}/state/${finalState}`, {headers: authCustomerHeader()});
    }
}

export default new ChangestateService();
