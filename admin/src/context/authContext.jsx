import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const storedAdmin = localStorage.getItem("admin");
  if (storedAdmin) {
      setAdmin(JSON.parse(storedAdmin));
  }
  setLoading(false);
  }, []);

  const login = async (data) => {
    const res = await api.post('/auth/login', data);
    localStorage.setItem("admin", JSON.stringify(res.data));
    setAdmin(res.data.user || res.data);  
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  const register = async (formData) => {
  try {
    const res = await api.post('/auth/register', formData); 
    login(res.data); 
    return res.data;
  } catch (err) {
    toast.error('Registration failed');
    throw err;
  }
};

  return (
    <AuthContext.Provider 
    value={{
        admin,
        isAuthenticated: !!admin,
        login,
        logout,
        loading,
        register
         }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
