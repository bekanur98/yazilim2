import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://buymanasapi.ru.xsph.ru/index.php/api/'
})

export const usersApi = {
    getUser(userId){
        return instance.get(`users/${userId}`);
    }
}
 


export const facultiesApi = {
    getfaculties(){
        return instance.get(`faculties`);
    }
}


export const postersApi = {
    getPosts(){
        return instance.get(`posters.json`)
    }
}


export const authApi = { 
    login(userId, username, password) {
        return instance.post(`users/${userId}`, {userId, username, password})
    },
    logout(userId) {
        return instance.delete(`users/${userId}`)
    }
}