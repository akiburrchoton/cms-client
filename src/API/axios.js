import axios from 'axios';

// Create a new Axios instance with your backend URL
const API = axios.create({
    baseURL: 'https://learningloopserver.vercel.app/',
});

// ⭐ Add the request interceptor
// This function will run before every single request
API.interceptors.request.use((config) => {
    // This will ensure every request made with this 'api' instance
    // automatically includes the cookie.
    config.withCredentials = true;
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
);

export default API;