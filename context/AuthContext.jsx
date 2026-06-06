import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (userData) => {
    setUser(userData);
  };

   const logout = async () => {
    await fetch("/api/auth/logout")
    setUser(null);
  };

  useEffect(()=> {
    async function loadUser(){
      try{
        const response = await fetch("/api/auth/me");
        const data = await response.json();

        if(data.success){
          setUser(data.user);
        }
      } catch (error){
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  },[]);

  return(
    <AuthContext.Provider value={{
        user,
        login,
        logout,
        loading,
    }}>
        {children}
    </AuthContext.Provider>
  )
};

export function useAuth(){
    return useContext(AuthContext);
}
