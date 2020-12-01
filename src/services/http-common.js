import axios from 'axios'

export default axios.create({
    baseURL: 'https://tec-soft-web.azurewebsites.net/api',
    headers:{
        'Content-type': 'application/json'
    }
});
