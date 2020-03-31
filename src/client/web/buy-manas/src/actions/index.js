let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const setFaculties = faculties => ({
    type: 'SET_FACULTIES',
    faculties
})

export const setPostsAC = posts => ({
    type: 'SET_POSTS',
    posts
})

export const setAuthUserData = (id, email, username) => ({ 
    type: 'SET_AUTH_USER_DATA',
    data: {id, email, username} 
})

export const setUserData = (userData) => ({ 
    type: 'SET_USER_DATA',
    userData
})