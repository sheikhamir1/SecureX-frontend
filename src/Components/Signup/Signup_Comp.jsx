import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, FormGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Signup.css";
import { Link } from "react-router-dom";

const primaryColor = "#ff9800"; // Primary color

const Signup_Comp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
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
      console.log(responseData);
      if (responseData.success === true) {
        alert("Registered successfully");
        reset();
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
              Sign Up form
            </h2>

            <Form.Group className="mb-3" controlId="formAadhaarNumber">
              <Form.Label>Aadhaar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadhaarNumber"
                placeholder="Enter Aadhaar Number"
                {...register("aadhaarNumber", {
                  required: "Aadhaar Number is required",
                })}
                className={`form-control-custom ${
                  errors.aadhaarNumber ? "is-invalid" : ""
                }`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.aadhaarNumber?.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", { required: "Name is required" })}
                className={`form-control-custom ${
                  errors.name ? "is-invalid" : ""
                }`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name?.message}
              </Form.Control.Feedback>
            </Form.Group>

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

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                {...register("phone", { required: "Phone number is required" })}
                className={`form-control-custom ${
                  errors.phone ? "is-invalid" : ""
                }`}
              />
              <Form.Control.Feedback type="invalid">
                {errors.phone?.message}
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
              Sign Up
            </Button>
            <FormGroup className="mt-3">
              <Form.Label>Already have an account?</Form.Label>
              <Link
                to="/login"
                style={{
                  color: "black",
                  padding: "8px 12px",
                  borderRadius: "20px",
                  fontWeight: "500",
                }}
              >
                Login
              </Link>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup_Comp;
