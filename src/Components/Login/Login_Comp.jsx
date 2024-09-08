import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Signup/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext1 } from "../state Manage/CreateOne";

const primaryColor = "#ff9800"; // Primary color

const Login_Comp = () => {
  const { setTrackLogin } = useContext(CreateContext1);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        // Throw an error with the full response data
        throw new Error(JSON.stringify(errorData));
      }

      const responseData = await response.json();
      if (responseData.success === true) {
        setTrackLogin((pre) => pre + 1);
        // console.log(responseData);
        localStorage.setItem("token", responseData.token);
        localStorage.setItem("loginTime", Date.now());
        localStorage.setItem("user", responseData.user);
        reset();
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <Form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white p-4 rounded shadow-sm"
          >
            <h2
              className="text-center mb-4 "
              style={{
                color: primaryColor,
                fontWeight: "bold",
                fontSize: "30px",
              }}
            >
              Login Here
            </h2>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email address",
                  },
                })}
                className={`form-control-custom ${
                  errors.email ? "is-invalid" : ""
                }`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className={`form-control-custom ${
                  errors.password ? "is-invalid" : ""
                }`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              variant="warning"
              type="submit"
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
              }}
              className="w-100 mt-3 hover:shadow-lg transition-transform transform hover:scale-105"
            >
              Login
            </Button>
            <FormGroup className="mt-3">
              <Form.Label>Don't have an account?</Form.Label>
              <Link
                to="/signup"
                style={{
                  color: "black",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
                Signup
              </Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login_Comp;
