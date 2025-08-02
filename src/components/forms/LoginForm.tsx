import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ThemeContext } from "../../context/ThemeContext";
import { Form, Button, Spinner, Card } from "react-bootstrap";

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
    // TODO: Dispatch login logic
  };

  return (
    <Card
      bg={theme === "dark" ? "dark" : "light"}
      text={theme === "dark" ? "white" : "dark"}
      className="shadow-sm p-4"
    >
      <h4 className="mb-4 text-center">Login</h4>

      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            isInvalid={!!errors.email}
            {...register("email")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Password */}
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            isInvalid={!!errors.password}
            {...register("password")}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Submit Button */}
        <Button type="submit" variant="primary" className="w-100" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" /> Logging in...
            </>
          ) : (
            "Login"
          )}
        </Button>
      </Form>
    </Card>
  );
};

export default LoginForm;
