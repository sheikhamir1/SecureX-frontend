import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const DeleteSharedDocument = () => {
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
        `http://localhost:3000/api/sharedoc/shareremove/${documentId}`,
        {
          method: "DELETE",
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
        alert("Document unshared successfully");
        reset();
      } else {
        alert(result.message || "Failed to unshare document");
      }
    } catch (error) {
      alert("Error unsharing document");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg mt-10 mb-10"
    >
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Unshare Document
      </h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          Aadhaar Number:
        </label>
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          {...register("aadhaarNumber", {
            required: "Aadhaar number is required",
          })}
        />
        {errors.aadhaarNumber && (
          <p className="text-red-500">{errors.aadhaarNumber.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Unshare Document
      </button>
    </form>
  );
};

export default DeleteSharedDocument;
