// src/pages/ProtectedRoute.tsx
import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "@/context/AuthContext";
import { loginRoute } from "./route";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-600">
        Loading...
      </div>
    );
  }

 
  if (!isAuthenticated) {
    return <Navigate to={loginRoute.path} replace />;
  }

  return <>{children}</>;
}
