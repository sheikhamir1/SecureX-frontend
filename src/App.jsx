import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect, useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar_Comp from "./Components/Navbar/Navbar_Comp";
import Footer from "./Components/Footer/Footer_Comp";
import Signup_Comp from "./Components/Signup/Signup_Comp";
import Login_Comp from "./Components/Login/Login_Comp";
import Profile_Comp from "./Components/Profile/Profile_Comp";
import Contactus_Comp from "./Components/Contact/Contactus_Comp";
import { CreateContext1 } from "./Components/state Manage/CreateOne";
import Documents_Comp from "./Components/Document/Documents_Comp";
import FetchDoc_Comp from "./Components/Document/FetchDoc_Comp";
import ShareDoc_Comp from "./Components/ShareDoc/ShareDoc_Comp";
import FetchSharedDocument from "./Components/ShareDoc/FetchShareDoc_Comp";
import DeleteSharedDocument from "./Components/ShareDoc/DeleteShareDoc_Comp";
import VerifyEmail_Comp from "./Components/EmailVerify/VerifyEmail_Comp";
import SearchComponent from "./Components/Search/Search_Comp";

function App() {
  const { setTracktoken } = useContext(CreateContext1);

  useEffect(() => {
    const clearLocalStorageAfterTimeout = () => {
      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {
        const currentTime = Date.now();
        const timeElapsed = currentTime - loginTime;

        // Check if more than 30 minutes (1,800,000 milliseconds) has passed
        if (timeElapsed > 1800000) {
          localStorage.clear();
          console.log("Local storage cleared after 30 minutes");
          setTracktoken((pre) => pre + 1);
          alert("Session expired. Please login again.");
        } else {
          // Set a timeout to clear the storage after the remaining time
          setTimeout(() => {
            localStorage.clear();
            console.log("Local storage cleared after 30 minutes");
          }, 1800000 - timeElapsed);
        }
      }
    };

    clearLocalStorageAfterTimeout();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar_Comp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup_Comp />} />
          <Route path="/login" element={<Login_Comp />} />
          <Route path="/profile" element={<Profile_Comp />} />
          <Route path="/contact" element={<Contactus_Comp />} />
          <Route path="/documents" element={<Documents_Comp />} />
          <Route path="/getalldoc" element={<FetchDoc_Comp />} />
          <Route path="/sharedoc/:documentId" element={<ShareDoc_Comp />} />
          <Route
            path="/fetchsharedoc/:documentId"
            element={<FetchSharedDocument />}
          />
          <Route
            path="/deletesharedoc/:documentId"
            element={<DeleteSharedDocument />}
          />
          <Route path="/verifyemail/:token" element={<VerifyEmail_Comp />} />
          <Route path="/search" element={<SearchComponent />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
