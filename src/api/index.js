import axios from 'axios'

const url = 'http://localhost:5000/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)
export const deletePost = (id) => axios.delete(`${url}/${id}`)

export const signIn = (formData) => axios.post('/user/signin', formData);
export const signUp = (formData) => axios.post('/user/signup', formData);
