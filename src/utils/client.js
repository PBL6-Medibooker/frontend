import axios from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:4000', // Địa chỉ của API backend
    timeout: 10000, // Thời gian chờ (10 giây)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default client;
