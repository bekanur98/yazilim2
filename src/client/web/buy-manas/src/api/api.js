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
        return instance.get(`posters`)
    },
    getOnePost(postId){
        return instance.get(`posters/${postId}`)
    },
    postPost(newPostData){
        return instance.post(`posters`, {
            "title": newPostData.title,
            "description": newPostData.description,
            "publishedAt": newPostData.publishedAt,
            "author": newPostData.author,
            "department": newPostData.department,
            "cost": parseInt(newPostData.cost),
            "rating": 0
        })
    },
    newPostImage(images){
        debugger
        const formData = new FormData();
        formData.append("file", images)
        return instance.post(`images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export const searchPostsApi = {
    getPostsByTitle(title){
        return instance.get('posters',{ params: {'title': title}})
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
            "name": formData.name,
            "email": formData.email,
            "phone": formData.number,
            "faculty": formData.faculty.value
        })
    }
}