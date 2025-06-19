import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: {
        'x-api-key': 'ylX4blBYT9FaoVd6OhvR', // move to .env in production
    },
});

export default api;