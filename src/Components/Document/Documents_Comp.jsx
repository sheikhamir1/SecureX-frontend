import React from "react";
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Documents.css";
import { Link } from "react-router-dom";

const primaryColor = "#ff9800"; // Navbar color

const Documents_Comp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);

    const formData = new FormData();
    formData.append("documentName", data.documentName);
    formData.append("documentType", data.documentType);
    formData.append("file", data.file[0]); // file is an array, so we take the first element

    try {
      const response = await fetch("http://localhost:3000/api/doc/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const responseData = await response.json();
      if (responseData.success === true) {
        // console.log(responseData);
        alert("Document uploaded successfully");
        reset(); // Reset the form on successful submission
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="document-upload-form-container">
        <Form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4">
          <h3 className="text-center" style={{ color: primaryColor }}>
            Upload Document
          </h3>

          <Form.Group className="mb-3">
            <Form.Label>Document Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter document name"
              {...register("documentName", { required: true })}
              className={`form-control ${
                errors.documentName ? "is-invalid" : ""
              }`}
            />
            {errors.documentName && (
              <div className="invalid-feedback">Document Name is required</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Document Type</Form.Label>
            <Form.Control
              as="select"
              {...register("documentType", { required: true })}
              className={`form-control ${
                errors.documentType ? "is-invalid" : ""
              }`}
            >
              <option value="">Select document type</option>
              <option value="Mark Sheet">Mark Sheet</option>
              <option value="PAN Card">PAN Card</option>
              <option value="Passport">Passport</option>
              <option value="Driver's License">Driver's License</option>
              <option value="Voter ID Card">Voter ID Card</option>
              <option value="Degree Certificates">Degree Certificates</option>
              <option value="Bank Statements">Bank Statements</option>
              <option value="Income Tax Returns">Income Tax Returns</option>
              <option value="Insurance Policies">Insurance Policies</option>
              <option value="Health Insurance Documents">
                Health Insurance Documents
              </option>
              <option value="Birth Certificates">Birth Certificates</option>

              <option value="Other">Other</option>
            </Form.Control>
            {errors.documentType && (
              <div className="invalid-feedback">Document Type is required</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Upload Document (eg: .jpg,.jpeg,.png)</Form.Label>
            <Form.Control
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              placeholder="Enter document file"
              {...register("file", { required: true })}
              className={`form-control ${errors.file ? "is-invalid" : ""}`}
            />

            {errors.file && (
              <div className="invalid-feedback">Document File is required</div>
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ backgroundColor: primaryColor, borderColor: primaryColor }}
          >
            Submit You Document
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Documents_Comp;
