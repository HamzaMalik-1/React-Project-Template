import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/useTypedHooks";
import { loginSuccess } from "../features/auth/authSlice";
import { ThemeContext } from "../context/ThemeContext";
import { toast } from "react-toastify";

interface LoginFormInputs {
  email: string;
  password: string;
}

// ✅ Yup Validation Schema
const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  // 🔐 Submit Handler
  const onSubmit = async (data: LoginFormInputs) => {
    try {
      // Simulate login request
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Store token/role (normally received from API)
      localStorage.setItem("token", "demo-token");
      dispatch(loginSuccess({ role: "admin" }));

      toast.success("Login successful!");
      navigate("/admin");
    } catch (error) {
      toast.error("Login failed. Try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={`p-4 border rounded shadow-sm ${theme === "dark" ? "bg-dark text-white" : "bg-light"}`}
        >
          <h4 className="mb-4 text-center">Login</h4>

          {/* Email Field */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              id="email"
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              placeholder="Enter email"
              {...register("email")}
            />
            {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
          </div>

          {/* Password Field */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              id="password"
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              placeholder="Enter password"
              {...register("password")}
            />
            {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
