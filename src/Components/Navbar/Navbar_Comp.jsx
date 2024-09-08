import React, { useEffect, useState, useContext } from "react";

import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { CreateContext1 } from "../state Manage/CreateOne";
import { useForm } from "react-hook-form";

const Navbar_Comp = () => {
  const { trackLogin, tracktoken, setQuery, setDocName } =
    useContext(CreateContext1);

  const [trackLogout, setTrackLogout] = useState(0);
  const isLogin = localStorage.getItem("token");

  const handleLogout = () => {
    setTrackLogout((pre) => pre + 1);
    localStorage.removeItem("token");
  };

  useEffect(() => {}, [trackLogout, trackLogin, tracktoken]);

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);

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

    setQuery(data.search);
    navigate("/search");

    reset();
  };

  return (
    <>
      <nav>
        <input type="checkbox" id="check" />

        <Link
          to="/"
          style={{
            cursor: "pointer",
            borderRadius: "20px",
            padding: "8px 12px",
          }}
        >
          <label
            className="logo"
            style={{ cursor: "pointer", borderRadius: "20px" }}
          >
            SecureX
          </label>
        </Link>

        <form onSubmit={handleSubmit(onSubmit)} className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            name="search"
            {...register("search")}
          />
          <button className="search-btn">
            <span className="search-icon">&#128269;</span>
          </button>
        </form>

        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          {isLogin ? (
            <>
              <li>
                <Link to="/documents">Documents</Link>
              </li>
              <li>
                <Link to="/Profile">Profile</Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/Signup">Signup</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </>
          )}
        </ul>
        <label htmlFor="check" className="checkbtn">
          <div className="hamburger"></div>
          <div className="hamburger"></div>
          <div className="hamburger"></div>
        </label>
      </nav>
    </>
  );
};

export default Navbar_Comp;
