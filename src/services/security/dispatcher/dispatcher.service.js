// company.service.js
// User Data Service

import html from '../../http-common'
import authCompanyHeader from "@/services/security/company/auth-company-header";
import authDispatcherHeader from "@/services/security/dispatcher/auth-dispatcher-header";

class DispatcherService {
    getAll() {
        console.log(authCompanyHeader());
        return html.get('/dispatchers', {headers: authDispatcherHeader()});
    }
    getById(id){
        return html.get(`/dispatchers/${id}`, {headers: authCompanyHeader()});
    }
    getByCompany(id){
        return html.get(`/dispatchers/company/${id}`, {headers: authCompanyHeader()});
    }
    unAssign(id){
        return html.put(`/companies/unAssign/${id}`,{},{headers: authCompanyHeader()});
    }
}

export default new DispatcherService();
