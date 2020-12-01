// auth-company.service.js
// Authentication Service
import axios from 'axios';

const API_URL = 'https://tec-soft-web.azurewebsites.net/api/dispatchers/authentication';
class AuthDispatcherService {
    login(dispatcher) {
        return axios.post(API_URL, {
            username: dispatcher.username,
            password: dispatcher.password
        })
            .then(response => {
                if (response.data.token) {
                    console.log(`dispatcher: ${response.data}`);
                    localStorage.setItem('dispatcher', JSON.stringify(response.data));
                }
                return response.data;
            });
    }
    logout() {
        localStorage.removeItem('dispatcher');
    }
    register(dispatcher) {
        return axios.post(API_URL + 'sign-up', {
            number: dispatcher.number,
            brithday: dispatcher.brithday,
            email: dispatcher.email,
            username: dispatcher.username,
            password: dispatcher.password,
            cityId: dispatcher.cityId
        });
    }
}

export default new AuthDispatcherService();
