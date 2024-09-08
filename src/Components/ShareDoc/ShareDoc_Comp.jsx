import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const ShareDocument = () => {
  const { documentId } = useParams();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/sharedoc/share/${documentId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(data),
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
        alert("Document shared successfully");
        reset();
      } else {
        alert(result.message || "Failed to share document");
      }
    } catch (error) {
      alert("Error sharing document");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 mb-10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Share Document
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Aadhaar Number:
        </label>
        <input
          type="text"
          name="aadhaarNumber"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("aadhaarNumber", {
            required: "Aadhaar number is required",
          })}
        />
        {errors.aadhaarNumber && (
          <p className="text-red-500">{errors.aadhaarNumber.message}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Name:</label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Relation:</label>
        <input
          type="text"
          name="relation"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("relation", { required: "Relation is required" })}
        />
        {errors.relation && (
          <p className="text-red-500">{errors.relation.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Share Document
      </button>
    </form>
  );
};

export default ShareDocument;
