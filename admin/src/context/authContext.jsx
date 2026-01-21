import { createContext, useContext, useEffect, useState } from "react";

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

  const login = (data) => {
    localStorage.setItem("admin", JSON.stringify(data));
    setAdmin(data);
  };

  const logout = () => {
    localStorage.removeItem("admin");
    setAdmin(null);
  };

  const register = async (formData) => {
  try {
    const res = await api.post('/auth/register'); 
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
         }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
