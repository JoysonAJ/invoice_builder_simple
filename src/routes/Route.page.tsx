import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@/layout/Layout";
import { loginRoute,registerRoute } from "@/routes/route";
import Register from "@/pages/auth/Register";
import Login from "@/pages/auth/Login";

export default function RoutePage() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Layout />}>
        <Route path={registerRoute.path} element={<Register />} />
        <Route path={loginRoute.path} element={<Login/>} />
        </Route>
        </Routes>
    </BrowserRouter>
  )
}
