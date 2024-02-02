import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("navbarNav");
    if (x.style.display === "inline-block") {
      x.style.display = "none";
    } else {
      x.style.display = "inline-block";
    }
  }
  return (
    <nav className="navbar navbar-expand-sm fixed-top navbar-expand-md">
      <div className="container">
        <Link className="link" to={"/home"}>
          <a className="navbar-brand" >
            CL<span style={{ color: " red" }}>O</span>TH
            <span style={{ color: " red" }}>O</span>N
          </a>
        </Link>
        <button
          onClick={myFunction}
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto nav_items ">
            <li className="nav-item">
              <a className="nav-link " aria-current="page">
                <Link onClick={myFunction} className="link" to={"/home"}>
                  
                  Home
                </Link>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link " aria-current="page">
                <Link onClick={myFunction} className="link" to={"/about"}>
                
                  about
                </Link>
              </a>
            </li> */}

            <li className="nav-item">
              <a className="nav-link">
                <Link onClick={myFunction} className="link" to={"/user"}>
                  {" "}
                  <i className="fa-solid fa-user"></i>
                </Link>
              </a>
            </li>
            <li className="nav-item">
              <Link onClick={myFunction} to={"/cart"}>
                <i
                  className="fa-solid fa-cart-shopping"
                  style={{
                    color: "black",
                    fontSize: "1.5rem",
                  }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
