import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('training_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const fetchCourses = async () => {
  const { data } = await api.get('/api/courses');
  return data;
};

export const fetchCourseById = async (id) => {
  const { data } = await api.get(`/api/courses/${id}`);
  return data;
};

export const createCourse = async (payload) => {
  const { data } = await api.post('/api/courses', payload);
  return data;
};

export const updateCourse = async (id, payload) => {
  const { data } = await api.put(`/api/courses/${id}`, payload);
  return data;
};

export const deleteCourse = async (id) => {
  const { data } = await api.delete(`/api/courses/${id}`);
  return data;
};

export const fetchProfile = async () => {
  const { data } = await api.get('/api/users/me');
  return data;
};
