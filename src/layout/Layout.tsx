import { Outlet } from "react-router";
import Header from "@/layout/Header";

export default function Layout() {
  return (
   <>
   <Header />
    <Outlet />
   </>
  )
}
