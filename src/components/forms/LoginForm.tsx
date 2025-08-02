import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThemeContext } from "../../context/ThemeContext";

interface LoginFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required("Password is required"),
});

const LoginForm: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    console.log("Login data submitted:", data);
    // TODO: Call Redux login action here
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`p-4 border rounded shadow-sm bg-${theme === "dark" ? "dark text-white" : "light"}`}
    >
      <h4 className="mb-4">Login</h4>

      {/* Email */}
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input
          type="email"
          className={`form-control ${errors.email ? "is-invalid" : ""}`}
          placeholder="Enter email"
          {...register("email")}
        />
        {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
      </div>

      {/* Password */}
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input
          type="password"
          className={`form-control ${errors.password ? "is-invalid" : ""}`}
          placeholder="Enter password"
          {...register("password")}
        />
        {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary w-100" disabled={isSubmitting}>
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
