import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://buymanasapi.ru.xsph.ru/index.php/api/'
})




export const usersApi = {
    getUser(userId) {
        return instance.get(`users/${userId}`);
    },
    newAvatar(userId, avatar) {
        const formData = new FormData();
        formData.append("file", avatar)
        return instance.post(`images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(r => {
            return instance.put(`users/${userId}`, {
                "images": r ? [`/api/images/${r.data.id}`] : []
            })
        })
    },
    editProfile(userId, profileData) {
        return instance.put(`users/${userId}`, {
            "name": profileData.name,
            "email": profileData.email,
            "phone": profileData.phone,
            "faculty": profileData.faculty
        })
    },
}



export const facultiesApi = {
    getfaculties() {
        return instance.get(`faculties`);
    }
}



export const departmentsApi = {
    getDepartments() {
        return instance.get(`departments`);
    }
}



export const postersApi = {
    getPosts() {
        return instance.get(`posters`)
    },
    getOnePost(postId) {
        return instance.get(`posters/${postId}`)
    },
    newPostImage(images) {
        const formData = new FormData();
        formData.append("file", images)
        return instance.post(`images`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    newPost(newPostData, r) {
        return instance.post(`posters`, {
            "title": newPostData.title,
            "description": newPostData.description,
            "publishedAt": newPostData.publishedAt,
            "author": newPostData.author,
            "department": newPostData.department ? `/api/departments/${newPostData.department}` : null,
            "cost": parseInt(newPostData.cost),
            "rating": 0,
            "images": r ? [`/api/images/${r.data.id}`] : []
        })
    },
    newComment(commentData) {
        return instance.post(`comments`, {
            "content": commentData.newComment,
            "publishedAt": commentData.publishedAt,
            "author": commentData.author,
            "poster": commentData.poster
        })
    },
    getFacultiesPosts(facultyId) {
        return instance.get(`posters?department.faculty.id=${facultyId}&page=1`)
    },
    getFacultiesNullPosts() {
        return instance.get(`posters?exists[department]=false&page=1`)
    },
    getPostsByTitle(title) {
        return instance.get('posters', { params: { 'title': title } })
    }
}



export const authApi = {
    checkUser(username) {
        return instance.get(`users`, { params: { 'username': username } })
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
            "faculty": formData.faculty ? `/api/faculties/${formData.faculty}` : null
        })
    }
}