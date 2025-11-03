import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token =
      localStorage.getItem('aportura_token') ||
      localStorage.getItem('training_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const fetchCourses = async () => {
  const { data } = await api.get('/api/cursos');
  return data;
};

export const fetchCourseById = async (id) => {
  const { data } = await api.get(`/api/cursos/${id}`);
  return data;
};

export const createCourse = async (payload) => {
  const { data } = await api.post('/api/cursos', payload);
  return data;
};

export const updateCourse = async (id, payload) => {
  const { data } = await api.put(`/api/cursos/${id}`, payload);
  return data;
};

export const deleteCourse = async (id) => {
  const { data } = await api.delete(`/api/cursos/${id}`);
  return data;
};

export const fetchProfile = async () => {
  const { data } = await api.get('/api/auth/perfil');
  return data;
};
