// company.service.js
// User Data Service
import html from '../../http-common'
import authCompanyHeader from "@/services/security/company/auth-company-header";

class CompanyService {
    getAll() {
        console.log(authCompanyHeader());
        return html.get('/companies', {headers: authCompanyHeader()});
    }
    asignDispatcher(companyId, dispatcherId){
        return html.put(`/companies/company/${companyId}/dispatcher/${dispatcherId}`, {},{headers: authCompanyHeader()});
    }

}

export default new CompanyService();
