import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../services/api.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window === 'undefined') return null;
    const stored = localStorage.getItem('training_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [token, setToken] = useState(() => {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('training_token');
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (token) {
      localStorage.setItem('training_token', token);
    } else {
      localStorage.removeItem('training_token');
    }
  }, [token]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (user) {
      localStorage.setItem('training_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('training_user');
    }
  }, [user]);

  const login = async (credentials) => {
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/login', credentials);
      setUser(data.user);
      setToken(data.token);
      return { success: true };
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || 'Error al iniciar sesión';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const register = async (payload) => {
    setLoading(true);
    try {
      const { data } = await api.post('/api/auth/register', payload);
      return { success: true, data };
    } catch (error) {
      console.error(error);
      const message = error.response?.data?.message || 'Error al registrar usuario';
      return { success: false, message };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
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
