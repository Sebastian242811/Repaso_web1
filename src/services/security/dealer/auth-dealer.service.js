// auth-company.service.js
// Authentication Service
import axios from 'axios';

const API_URL = 'https://tec-soft-web.azurewebsites.net/api/dealers/authentication';
class AuthDealerService {
    login(dealer) {
        return axios.post(API_URL, {
            username: dealer.username,
            password: dealer.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(`dealer: ${response.data}`);
                    localStorage.setItem('dealer', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('dealer');
    }
    register(dealer) {
        return axios.post(API_URL + 'sign-up', {
            number: dealer.number,
            brithday: dealer.brithday,
            email: dealer.email,
            username: dealer.username,
            password: dealer.password,
            cityId: dealer.cityId
        });
    }
}

export default new AuthDealerService();
