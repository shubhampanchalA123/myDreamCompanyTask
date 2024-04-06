import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  let userid = 1234;
  return (
    <>
      {userid ? (
        <div className="position-relative" style={{ height: "70px" }}>
          <nav className="navbar navbar-expand-lg bg-dark fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img style={{ width: "100px" }} src="https://ekartlogistics.com/assets/images/ekWhiteLogo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active text-white" aria-current="page" to="/Home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/About">
                      About
                    </Link>
                  </li>
           
                </ul>

                <div className="login-container text-white me-5 ">
                <li className="nav-item dropdown login">
                    <a className=" nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="dropdown-item text-black" href="">
                          Signup
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-black" href="#">
                          Login
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form> */}
              </div>
            </div>
          </nav>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
