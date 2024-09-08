import React, { useEffect, useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Profile.css";
import { Link } from "react-router-dom";

const primaryColor = "#ff9800"; // Primary color

const Profile_Comp = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/profile/fetchprofile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData));
        }

        const responseData = await response.json();
        if (responseData.success === true) {
          setUserProfile(responseData.user);
          // Set the form data with fetched user profile
          reset({
            aadhaarNumber: responseData.user.aadhaarNumber,
            name: responseData.user.name,
            email: responseData.user.email,
            phone: responseData.user.phone,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProfile();
  }, [reset]);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:3000/api/profile/updateprofile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const responseData = await response.json();
      console.log("Profile updated successfully:", responseData);

      if (responseData.success) {
        setUserProfile((prev) => ({
          ...prev,
          ...data,
        }));
        handleClose();
      } else {
        console.log("Update failed:", responseData);
      }
    } catch (error) {
      console.log("Error updating profile:", error);
    }
  };

  if (!userProfile) {
    return <div className="text-center">Loading...</div>;
  }

  // Define the fields to display
  const fields = [
    { label: "Aadhaar Number", value: userProfile.aadhaarNumber },
    { label: "Name", value: userProfile.name },
    { label: "Email", value: userProfile.email },
    { label: "Phone", value: userProfile.phone },
    { label: "Verified", value: userProfile.isVerified ? "Yes" : "No" },
  ];

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Card className="profile-card shadow-lg">
            <Card.Header
              className="text-center"
              style={{ backgroundColor: primaryColor, color: "white" }}
            >
              <h4>
                <strong> Welcome {userProfile.name}</strong>
              </h4>
            </Card.Header>
            <Card.Body>
              <div className="profile-details">
                {fields.map(({ label, value }) => (
                  <div className="profile-item" key={label}>
                    <span className="profile-label">{label}:</span>
                    <span className="profile-value">{value}</span>
                  </div>
                ))}
                <div className="text-center mt-3">
                  <Button
                    variant="warning"
                    onClick={handleShow}
                    style={{
                      backgroundColor: primaryColor,
                      borderColor: primaryColor,
                    }}
                  >
                    Update Profile
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
          {/* <Link to={"/fetchsharedoc/:documentId"}>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
              }}
            >
              Share Your Document
            </Button>
          </Link> */}
          <Link to={"/getalldoc"}>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              style={{
                backgroundColor: primaryColor,
                borderColor: primaryColor,
              }}
            >
              View You All Documents
            </Button>
          </Link>
        </div>
      </div>

      {/* Update Profile Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formAadhaarNumber">
              <Form.Label>Aadhaar Number</Form.Label>
              <Form.Control
                type="text"
                name="aadhaarNumber"
                {...register("aadhaarNumber")}
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" {...register("name")} />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" {...register("email")} />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" name="phone" {...register("phone")} />
            </Form.Group>
            <div className="text-center mt-3">
              <Button
                variant="warning"
                type="submit"
                style={{
                  backgroundColor: primaryColor,
                  borderColor: primaryColor,
                }}
              >
                Save Changes
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Profile_Comp;
