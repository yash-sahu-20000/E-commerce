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
