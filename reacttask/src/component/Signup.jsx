import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userGmail, setUserGmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [signupdata, updatesignupdata] = useState([]);

  function signupdatasubmit(event) {
    event.preventDefault();
  
    let signData = {
      userName,
      userSurname,
      userGmail,
      userPassword,
    };
  
    // Update the state and get the updated value
    updatesignupdata((prevSignupData) => {
      const newSignupData = [...prevSignupData, signData];
  
      // Save to local storage using the updated value
      localStorage.setItem("signData", JSON.stringify(newSignupData));
      
      // Return the updated value to set it in the state
      return newSignupData;
    });
  
    alert("Your account has been successfully created. You can now log in.");
  
    // Reset the form
    setUserName("");
    setUserSurname("");
    setUserGmail("");
    setUserPassword("");
  }
  

  
  return (
    <>
      <div className="Signup-template d-flex justify-content-center align-items-center vh-80 bg-primary">
        <div className="form-container p-5 rounded bg-white m-2 " style={{ width: "400px", height: "600px" }}>
          <form onSubmit={signupdatasubmit}>
            <h3 className="text-center mb-4">Sign-Up</h3>

            <div className="mb-3">
              <label htmlFor="fname" className="form-label">
                Name
              </label>
              <input value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter Name." className="form-control" id="fname" />
            </div>

            <div className="mb-3">
              <label htmlFor="lname" className="form-label">
                Surname
              </label>
              <input value={userSurname} onChange={(e) => setUserSurname(e.target.value)} type="text" placeholder="Enter Surname." className="form-control" id="lname" />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input value={userGmail} onChange={(e) => setUserGmail(e.target.value)} type="email" placeholder="Enter email here." className="form-control" id="email" />
            </div>

            <div className="mb-3">
              <label htmlFor="inputPassword5" className="form-label">
                Password
              </label>
              <input value={userPassword} onChange={(e) => setUserPassword(e.target.value)} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
              <div id="passwordHelpBlock" className="form-text">
                Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Sign-Up
              </button>
            </div>
            <p className="text-end mt-2">
              Already registered
              <Link to="/" className="ms-2">
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
