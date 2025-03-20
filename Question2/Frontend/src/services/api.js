import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000', // Backend base URL
});

export const fetchTopUsers = () => API.get('/users');
export const fetchPosts = (type) => API.get(`/posts?type=${type}`);
