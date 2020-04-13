import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://buymanasapi.ru.xsph.ru/index.php/api/'
})

export const usersApi = {
    getUser(userId) {
        return instance.get(`users/${userId}`);
    }
}



export const facultiesApi = {
    getfaculties() {
        return instance.get(`faculties`);
    }
}


export const postersApi = {
    getPosts() {
        return instance.get(`posters.json`)
    }
}


export const authApi = {
    checkUser(formData) {
        return instance.get(`users`, { params: { 'username': formData.username } })
    },
    login(userId) {
        return instance.get(`users/${userId}`)
    }, 
    register(formData) {
        return instance.post(`users`, {
            "username": formData.username,
            "password": formData.regPassword,
            "name": 'test',
            "email": formData.email,
            "phone": formData.number,
        })
    }
}