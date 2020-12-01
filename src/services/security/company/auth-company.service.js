// auth-company.service.js
// Authentication Service
import axios from 'axios';

const API_URL = 'https://tec-soft-web.azurewebsites.net/api/companies/authenticate';
class AuthCompanyService {
    login(company) {
        return axios.post(API_URL, {
            username: company.username,
            password: company.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(`company: ${response.data}`);
                    localStorage.setItem('company', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('company');
    }
    register(company) {
        return axios.post(API_URL + 'sign-up', {
            number: company.number,
            ruc: company.ruc,
            email: company.email,
            username: company.username,
            password: company.password
        });
    }
}

export default new AuthCompanyService();
