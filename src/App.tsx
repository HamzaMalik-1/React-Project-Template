import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Container } from "react-bootstrap";

// 🔁 Lazy-loaded Pages
const Home = React.lazy(() => import("./pages/Home"));
const Login = React.lazy(() => import("./pages/Login"));
const AdminPanel = React.lazy(() => import("./pages/AdminPanel"));
const Unauthorized = React.lazy(() => import("./pages/Unauthorized"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const ServerError = React.lazy(() => import("./pages/ServerError"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));
const SettingsPage = React.lazy(() => import("./pages/SettingsPage"));

// 🧩 Layout & Route Guard
const Layout = React.lazy(() => import("./components/layout/Layout"));
import ProtectedRoute from "./routes/ProtectedRoute";

// 🛠 Error Handling
import ErrorBoundary from "./components/common/ErrorBoundary";

// 🎨 Theme & Auto Logout
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/common/ThemeToggle";
import { useAutoLogout } from "./hooks/useAutoLogout";

// ✅ Confirm Dialog
import { ConfirmProvider } from "./context/ConfirmDialogContext";

// 🌍 i18n & Styles
import "./i18n";
import "react-toastify/dist/ReactToastify.css";
import "./styles/theme.css";

// 🌀 Spinner
import Spinner from "./components/common/Spinner";

function AppContent() {
  useAutoLogout(); // 🔐 Auto logout on token expiration

  return (
    <Container fluid className="py-3">
      {/* Theme Switcher */}
      <div className="d-flex justify-content-end">
        <ThemeToggle />
      </div>

      <Suspense fallback={<Spinner />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
          <Route path="/server-error" element={<ServerError />} />

          {/* Protected Admin Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <Layout />
              </ProtectedRoute>
            }
          >
            <Route index element={<AdminPanel />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <ToastContainer position="top-right" autoClose={3000} />
    </Container>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <ErrorBoundary>
            <ConfirmProvider>
              <AppContent />
            </ConfirmProvider>
          </ErrorBoundary>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
