import React from "react";
import "../styles/category.css";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <div className="container-fluid text-center page_2">
       
        <div className="row card_container card_category">
          <div className="col-sm-6  card_box" id="men_box" >
            <img
              className="section_image"
              src={require("../assets/Men.jpg")}
              alt="image.jpg"
            />
            <Link to="/men">
              <button className="card_button" >MEN</button>
            </Link>
          </div>
          <div className="col-sm-6  card_box " id="women_box">
            <img
              className="section_image"
              src={require("../assets/women.jpg")}
              alt="image.jpg"
            />
            <Link to={"/women"}>
            <button className="card_button">WOMEN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
