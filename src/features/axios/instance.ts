import axios, { AxiosError } from "axios"
export const api = axios.create({
    baseURL: 'http://localhost:3001',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            switch (error.response.status) {
                case 404:
                    console.error('Не найдено');
                    break;
                case 500:
                    console.error('Ошибка сервера');
                    break;
            }
        } else if (error.request) {
            console.error('Ошибка сети');
        } else {
            console.error('Ошибка настройки запроса:', error.message);
        }
        return Promise.reject(error);
    }
);