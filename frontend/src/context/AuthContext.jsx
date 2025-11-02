import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../services/api.js';

const decodeTokenPayload = (jwtToken) => {
  if (!jwtToken) return null;
  try {
    const base64Url = jwtToken.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    console.error('No se pudo decodificar el token JWT', error);
    return null;
  }
};

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('aportura_user') || localStorage.getItem('training_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('aportura_token') || localStorage.getItem('training_token');
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (token) {
      localStorage.setItem('aportura_token', token);
      localStorage.removeItem('training_token');
    } else {
      localStorage.removeItem('aportura_token');
      localStorage.removeItem('training_token');
    }
  }, [token]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem('aportura_user', JSON.stringify(user));
      localStorage.removeItem('training_user');
    } else {
      localStorage.removeItem('aportura_user');
      localStorage.removeItem('training_user');
    }
  }, [user]);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/login', {
        correo: credentials.email.trim(),
        ['contraseña']: credentials.password,
        contrasena: credentials.password,
      });
      setToken(data.token);
      const payload = decodeTokenPayload(data.token);
      if (payload) {
        setUser({
          id: payload.id,
          name: payload.nombre,
          email: payload.correo,
          role: payload.role,
        });
      }
      return { success: true };
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.mensaje ||
        error.response?.data?.message ||
        error.message ||
        'Error al iniciar sesión';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/register', {
        nombre: payload.name.trim(),
        correo: payload.email.trim(),
        ['contraseña']: payload.password,
        contrasena: payload.password,
      });
      const message = data?.mensaje || 'Usuario registrado exitosamente ✅';
      return { success: true, data, message };
    } catch (error) {
      console.error(error);
      const message =
        error.response?.data?.mensaje ||
        error.response?.data?.message ||
        error.message ||
        'Error al registrar usuario';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('aportura_user');
      localStorage.removeItem('training_user');
      localStorage.removeItem('aportura_token');
      localStorage.removeItem('training_token');
    }
  };

  const value = useMemo(() => ({
    user,
    token,
    loading,
    login,
    register,
    logout,
    isAuthenticated: Boolean(token),
    isAdmin: user?.role === 'admin',
    hasPremium: user?.subscriptions?.includes?.('premium') || user?.isPremium,
  }), [user, token, loading]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};
