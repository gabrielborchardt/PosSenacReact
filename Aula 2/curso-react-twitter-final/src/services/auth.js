import api from './api'

export const loginUser = data => api.post('/login', data)

export const signUp = user => api.post('/users', user)

export const updateUser = user => api.put(`/users`, user)
