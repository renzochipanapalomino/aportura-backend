import axios from 'axios';

const resolveBaseUrl = () => {
  const envUrl = import.meta.env.VITE_API_URL;
  if (envUrl && envUrl.trim().length > 0) {
    return envUrl.replace(/\/$/, '');
  }

  if (typeof window !== 'undefined') {
    const { origin, hostname } = window.location;
    const isLocalhost = ['localhost', '127.0.0.1'].includes(hostname);
    return isLocalhost ? 'http://localhost:4000' : origin;
  }

  return 'http://localhost:4000';
};

const API_BASE_URL = resolveBaseUrl();

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
