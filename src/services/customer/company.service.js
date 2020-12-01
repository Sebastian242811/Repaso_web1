// company.service.js
// User Data Service

import http from '../http-common'
import authCustomerHeader from "@/services/security/customer/auth-customer-header";

class CompanyService{
    getCompanyById(id){
        return http.get(`companies/${id}`, {headers: authCustomerHeader()});
    }
}

export default new CompanyService();
