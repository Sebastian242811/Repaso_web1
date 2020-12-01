// company.service.js
// User Data Service

import html from '../../http-common'
import authCompanyHeader from "@/services/security/dealer/auth-dealer-header";

class DealerService {
    getAll() {
        console.log(authCompanyHeader());
        return html.get('/dealer', {headers: authCompanyHeader()});
    }
}

export default new DealerService();
