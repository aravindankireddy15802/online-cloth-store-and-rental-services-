import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="container-fluid">
        <center>
        <p className="footer_text"> aravindankireddy15802@gmail.com</p>
          <p className="footer_text"> CALL +91 8247702752</p>
          
          <div className="container icon_box">
            <p className="footer_text">FOLLOW US</p>
            <span>
              <a
                className="follow_icons"
                href="https://www.instagram.com/arvind_ankireddy/"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="follow_icons">
                <i className="fa-sharp fa-solid fa-envelope"></i>
              </a>
            </span>
          </div>
          
          <a className="navbar-brand" href="#">
            CL<span style={{ color: "red " }}>O</span>TH
            <span style={{ color: "red" }}>O</span>N
          </a>
        </center>
      </footer>
    </div>
  );
};

export default Footer;
