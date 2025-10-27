import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "@/layout/Layout";

export default function RoutePage() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="" element={<Layout />}>
        
        </Route>
        </Routes>
    </BrowserRouter>
  )
}
