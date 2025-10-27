import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerSchema } from "@/utils/validationSchemas";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import type { User } from "@/types";
import { Link } from "react-router";
import { loginRoute } from "@/routes/route";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

type RegisterFormProps = {
  onRegisterSuccess?: () => void;
};

type RegisterValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const initialValues: RegisterValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegisterForm({ onRegisterSuccess }: RegisterFormProps) {

  const { register} = useContext(AuthContext);


  const [users, setUsers] = useLocalStorage<User[]>("users", []);
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Create Account
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Full Name
              </label>
              <Field
                name="fullName"
                placeholder="Antony Joyson "
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="fullName"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <Field
                name="email"
                type="email"
                placeholder="ajoyson@example.com"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Password
              </label>
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>

      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <Link to={loginRoute.path} className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </div>
  );

  function handleSubmit(
    values: RegisterValues,
    formikHelpers: FormikHelpers<RegisterValues>
  ) {
    //already users exists
    const exists = users.some(
      (user: User) => user.email.toLowerCase() === values.email.toLowerCase()
    );

    if (exists) {
      // Basic UX feedback; in production prefer inline form errors
      alert("A user with this email already exists.");
      formikHelpers.setSubmitting(false);
      return;
    }

    const newUser: User = {
      email: values.email,
      fullName: values.fullName,
      password: values.password,
    };

    register(newUser)

    setUsers([...users, newUser]);
    formikHelpers.resetForm();
    formikHelpers.setSubmitting(false);

    alert("Registration successful!");
    onRegisterSuccess?.();
  }
}
