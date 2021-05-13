import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://thedogsapi.com/'
});

export default instance;