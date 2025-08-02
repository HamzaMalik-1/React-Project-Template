import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100">
      {/* Top Header */}
      <Header />

      {/* Sidebar + Main Content */}
      <div className="d-flex flex-grow-1">
        {/* Sidebar on the left */}
        <Sidebar />

        {/* Main page content */}
        <main className="flex-grow-1 p-4 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
