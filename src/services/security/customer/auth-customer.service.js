// auth-company.service.js
// Authentication Service
import axios from 'axios';

const API_URL = 'https://tec-soft-web.azurewebsites.net/api/customers/authentication';
class AuthCustomerService {
    login(customer) {
        return axios.post(API_URL, {
            username: customer.username,
            password: customer.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(`customer: ${response.data}`);
                    localStorage.setItem('customer', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('customer');
    }
    register(company) {
        return axios.post(API_URL + 'sign-up', {
            number: company.number,
            brithday: company.brithday,
            email: company.email,
            username: company.username,
            password: company.password,
            cityId: company.cityId
        });
    }
}

export default new AuthCustomerService();
