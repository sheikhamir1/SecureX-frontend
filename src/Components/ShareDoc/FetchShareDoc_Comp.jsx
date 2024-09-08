import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./My.css";
import { RiDeleteBin6Fill } from "react-icons/ri";

const FetchSharedDocument = () => {
  const [sharedWith, setSharedWith] = useState([]);

  const { documentId } = useParams();

  useEffect(() => {
    const fetchSharedData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/sharedoc/fetchdoc/${documentId}`,
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
          // Throw an error with the full response data
          throw new Error(JSON.stringify(errorData));
        }

        const result = await response.json();
        // console.log("result", result);

        if (response.ok) {
          setSharedWith(result.sharedWith);
        } else {
          alert(result.message || "Failed to fetch shared document details");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchSharedData();
  }, [documentId]);

  if (sharedWith.length === 0) {
    return (
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          No Shared With
        </h2>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 mb-10">
      <Link to={`/deletesharedoc/${documentId}`}>
        <RiDeleteBin6Fill className="custom-icon" />
      </Link>
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">
        Shared With:
      </h2>
      <ul className="space-y-4">
        {sharedWith.map((entry, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4  rounded-lg border border-orange-200"
          >
            <div className="text-gray-900 mb-2 sm:mb-0 sm:mr-4">
              <strong className="block sm:inline">Name: </strong>
              {entry.name}
            </div>
            <div className="text-gray-700 mb-2 sm:mb-0 sm:mr-4">
              <strong className="block sm:inline">Aadhaar: </strong>
              {entry.aadhaarNumber}
            </div>
            <div className="text-gray-600">
              <strong className="block sm:inline">Relation: </strong>
              {entry.relation}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchSharedDocument;
