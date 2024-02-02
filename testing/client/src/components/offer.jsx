import React from "react";
import "../styles/Offer.css";

const Offer = () => {
  return (
    <div className="container-fluid" id="offer_box">
      <div id="offer_box_inner">
        <h1 className="offer_text">
          GET UPTO 40% OFF <br /> <p className="offer_text_child"> on first order...</p>
          & <br />UPTO 10% OFF <br />
          <p className="offer_text_child">on purchase orders above 2499rs *</p>
        </h1>
      </div>
    </div>
  );
};

export default Offer;
