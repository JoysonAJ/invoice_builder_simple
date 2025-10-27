import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginSchema } from "@/utils/validationSchemas";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type{ User } from "@/types";
import { Link, useNavigate } from "react-router";
import { homeRoute, registerRoute } from "@/routes/route";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";

type LoginFormProps = {
  onLoginSuccess?: () => void;
}

type LoginValues = {
  email: string;
  password: string;
}

const initialValues: LoginValues = { email: "", password: "" };

export default function LoginForm({ onLoginSuccess }: LoginFormProps) {

  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [users] = useLocalStorage<User[]>("users", []);

  useEffect(() => {
    if (user) navigate(homeRoute.path);
  }, [user, navigate]);
  
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">Login</h2>

      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <Field
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don’t have an account?{" "}
              <Link to={registerRoute.path} className="text-blue-600 hover:underline">
                Register
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  )

  function handleSubmit(values: LoginValues){
    const found = users.find(
      (user:User) => user.email.toLowerCase() === values.email.toLowerCase() && user.password === values.password
    );

    if (!found) {
      alert("❌ Invalid credentials. Please try again.");
      return;
    }

    login(found);
    alert(`✅ Welcome back, ${found.fullName}!`);
    onLoginSuccess?.();
  };
}
