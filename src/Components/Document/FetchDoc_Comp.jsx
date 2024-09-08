import React, { useEffect, useState, useContext } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import "./Documents.css";
import { CiShare1 } from "react-icons/ci";
import { MdViewKanban } from "react-icons/md";
import { Link } from "react-router-dom";
import { CreateContext1 } from "../state Manage/CreateOne";

const primaryColor = "#ff9800"; // Primary color

const FetchDoc_Comp = () => {
  const { setDocName } = useContext(CreateContext1);

  const [documents, setDocuments] = useState([]);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  // console.log("documents", documents);

  // Fetch all documents
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/doc/fetchdoc", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(JSON.stringify(errorData));
        }

        const responseData = await response.json();
        if (responseData.success === true) {
          setDocuments(responseData.documents);
          setDocName(responseData.documents);
          // console.log(
          //   "Documents fetched successfully:",
          //   responseData.documents
          // );
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDocuments();
  }, []);

  // Handle update document modal
  const handleShow = (doc) => {
    setSelectedDoc(doc);
    reset({
      documentName: doc.documentName,
      documentType: doc.documentType,
    });
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  // Handle document update
  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("documentName", data.documentName);
      formData.append("documentType", data.documentType);
      if (data.file[0]) {
        formData.append("file", data.file[0]); // Ensure "file" is the correct field name
      }

      const response = await fetch(
        `http://localhost:3000/api/doc/updatedoc/${selectedDoc._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const responseData = await response.json();
      // console.log("Document updated successfully:", responseData);

      if (responseData.success) {
        setDocuments((prev) =>
          prev.map((doc) =>
            doc._id === selectedDoc._id
              ? { ...doc, ...responseData.document }
              : doc
          )
        );
        handleClose();
      } else {
        console.log("Update failed:", responseData);
      }
    } catch (error) {
      console.log("Error updating document:", error);
    }
  };

  // Handle document deletion
  const handleDelete = async (docId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/doc/deletedoc/${docId}`,
        {
          method: "DELETE",
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
      // console.log("Document deleted successfully:", responseData);

      if (responseData.success) {
        setDocuments((prev) => prev.filter((doc) => doc._id !== docId));
      } else {
        console.log("Delete failed:", responseData);
      }
    } catch (error) {
      console.log("Error deleting document:", error);
    }
  };

  const getFileExtension = (url) => {
    return url.split(".").pop();
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          {documents.map((doc) => (
            <Card className="document-card shadow-lg mb-3" key={doc._id}>
              <Card.Header
                className="text-center"
                style={{ backgroundColor: primaryColor, color: "white" }}
              >
                <h4>{doc.documentName}</h4>
              </Card.Header>
              <Card.Body>
                <div style={{ display: "flex" }}>
                  <Link to={`/sharedoc/${doc._id}`}>
                    <CiShare1 className="custom-icon" />
                  </Link>
                  <strong style={{ marginLeft: "5px", marginTop: "3px" }}>
                    Share Document
                  </strong>
                </div>
                <div style={{ display: "flex" }}>
                  <Link to={`/fetchsharedoc/${doc._id}`}>
                    <MdViewKanban className="custom-icon" />
                  </Link>
                  <strong style={{ marginLeft: "5px", marginTop: "3px" }}>
                    View Shared Document
                  </strong>
                </div>
                <div className="document-details">
                  <div className="document-item">
                    <strong className="document-label">Type: </strong>
                    <span className="document-value">{doc.documentType}</span>
                  </div>
                  <div className="document-item">
                    <strong className="document-label">Name: </strong>
                    <span className="document-value">{doc.documentName}</span>
                  </div>
                  <div className="document-item">
                    <strong className="document-label">Created At: </strong>
                    <span className="document-value">
                      {new Date(doc.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="document-item">
                    <strong className="document-value">Updated At: </strong>
                    <span className="document-value">
                      {new Date(doc.updatedAt).toLocaleString()}
                    </span>
                  </div>

                  <div className="document-item">
                    <span className="document-label">Document:</span>
                    {getFileExtension(doc.documentUrl) === "pdf" ? (
                      <a
                        href={doc.documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-info"
                        style={{ margin: "10px" }}
                      >
                        Download PDF
                      </a>
                    ) : (
                      <img
                        src={doc.documentUrl}
                        alt={doc.documentName}
                        className="document-image"
                      />
                    )}
                  </div>

                  <div className="text-center mt-3">
                    <Button
                      variant="warning"
                      onClick={() => handleShow(doc)}
                      style={{
                        backgroundColor: primaryColor,
                        borderColor: primaryColor,
                      }}
                    >
                      Update Document
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(doc._id)}
                      className="m-2"
                    >
                      Delete Document
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>

      {/* Update Document Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Document</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formDocumentName">
              <Form.Label>Document Name</Form.Label>
              <Form.Control
                type="text"
                name="documentName"
                {...register("documentName")}
              />
            </Form.Group>
            <Form.Group controlId="formDocumentType">
              <Form.Label>Document Type</Form.Label>
              <Form.Control
                as="select"
                name="documentType"
                {...register("documentType")}
              >
                <option value="Mark Sheet">Mark Sheet</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Passport">Passport</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formDocumentFile">
              <Form.Label>Upload Document</Form.Label>
              <Form.Control type="file" name="file" {...register("file")} />
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

export default FetchDoc_Comp;
