import React, { createContext, useEffect, useState } from "react";
import type { User } from "@/types";

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  register: (user: User) => void;
  isLoading: boolean;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    // if (storedUser) setUser(JSON.parse(storedUser));
    if (storedUser) {
      setIsAuthenticated(true);
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("loggedInUser");
    }
  }, [user]);

  const register = (newUser: User) => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    setUser(newUser);
  };

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // console.log({ isAuthenticated: !!user });

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        login,
        logout,
        register,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
