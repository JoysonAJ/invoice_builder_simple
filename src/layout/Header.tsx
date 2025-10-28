import { AuthContext } from "@/context/AuthContext";
import { loginRoute, registerRoute } from "@/routes/route";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const isLoginPage = location.pathname === loginRoute.path;
  const dynamicAuthRoute = isLoginPage ? registerRoute : loginRoute;

  return (
    <nav className="bg-white shadow-md py-3 px-6 flex justify-between items-center">
      {/* App Logo or Title */}
      <h1
        onClick={() => navigate("/")}
        className="text-xl font-bold text-blue-600 cursor-pointer select-none"
      >
        invoice app
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {isAuthenticated ? (
          <div className="flex items-center gap-3">
            

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-200"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link
            to={dynamicAuthRoute.path}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {dynamicAuthRoute.name}
          </Link>
        )}
      </div>
    </nav>
  );

  function handleLogout() {
    logout();
    alert("👋 Logged out successfully.");
    navigate(loginRoute.path);
  }
}
