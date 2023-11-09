import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Suspense } from "react";

function MainLayout() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default MainLayout;
