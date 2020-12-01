// company.service.js
// User Data Service

import html from '../../http-common'
import authCompanyHeader from "@/services/security/customer/auth-customer-header";

class CustomerService {
    getAll() {
        console.log(authCompanyHeader());
        return html.get('/companies', {headers: authCompanyHeader()});
    }
}

export default new CustomerService();
