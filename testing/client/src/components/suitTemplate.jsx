import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Typewriter from "react-ts-typewriter";
import "../styles/suit.css";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";

const suitproducts = [
  {
    Id: "s1",
    image: "mensuits/3_3e487665-0815-489c-b3ac-b7adb6454b9e.jpg",
    name: "full black suit with red tie",
    price: 8799,
  },
  {
    Id: "s3",
    image: "mensuits/7b51b73ABFRL-ASSUTSLFT98764_1.jpg",
    name: "yellow suit with black trouser",
    price: 6699,
  },
  {
    Id: "s4",
    image: "mensuits/9bf5381PIDP00241-V7_1.jpg",
    name: "full black suit",
    price: 8799,
  },
  {
    Id: "s5",
    image: "mensuits/52fe4edRRR-ARABSU5526_01.jpg",
    name: "full cream suit",
    price: 12899,
  },
  {
    Id: "s6",
    image: "mensuits/CPNM1284R2BA21FL_1.jpg",
    name: "full maroon suit",
    price: 11999,
  },
  {
    Id: "s7",
    image: "mensuits/CPNM1369T1BS22FL_1.jpg",
    name: "full blue suit with violet tie",
    price: 10699,
  },
  {
    Id: "s8",
    image: "mensuits/ef7c2a0PIDP00245-O7_1.jpg",
    name: "shiny full brown",
    price: 5599,
  },
  {
    Id: "s9",
    image: "mensuits/greycs_1_26236b0f.jpg",
    name: "full gray suit",
    price: 6599,
  },
  {
    Id: "s10",
    image: "mensuits/hangup-cs_d39whitetr_1_b375882b.jpg",
    name: "printed blue blazer with white truoser",
    price: 11899,
  },
  {
    Id: "s11",
    image:
      "mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.jpg",
    name: "full maroon with maroon tie  ",
    price: 11999,
  },
  {
    Id: "s12",
    image:
      "mensuits/Solid_Formal_2_Pcs_Suits_In_Teal_Cabrey-CPNM1459T1BA22FL-image1.jpg",
    name: "full blue suit",
    price: 12399,
  },
  {
    Id: "s13",
    image:
      "mensuits/Textured_Formal_Suits_In_Light_Blue_Riten-CPPM1370B1BA22FL-image1.jpg",
    name: "sky blue blazer with grey trouser",
    price: 12799,
  },
  {
    Id: "s14",
    image:
      "mensuits/Trailek_2_Pcs_Dobby_Suits_In_Beige-CPPM1368A2BS22FL-image1_.jpg",
    name: "full cream suit with violet tie  ",
    price: 12599,
  },
];

const txt =
  "Get suit for your special days without burning a hole in your wallet with this list of best suit rental plans. ";
const Suit = () => {
  // const ref = useRef(null)
  const suitproducts = [
    {
      Id: "s1",
      image: "mensuits/3_3e487665-0815-489c-b3ac-b7adb6454b9e.jpg",
      name: "full black suit with red tie",
      price: 8799,
    },
    {
      Id: "s3",
      image: "mensuits/7b51b73ABFRL-ASSUTSLFT98764_1.jpg",
      name: "yellow suit with black trouser",
      price: 6699,
    },
    {
      Id: "s4",
      image: "mensuits/9bf5381PIDP00241-V7_1.jpg",
      name: "full black suit",
      price: 8799,
    },
    {
      Id: "s5",
      image: "mensuits/52fe4edRRR-ARABSU5526_01.jpg",
      name: "full cream suit",
      price: 12899,
    },
    {
      Id: "s6",
      image: "mensuits/CPNM1284R2BA21FL_1.jpg",
      name: "full maroon suit",
      price: 11999,
    },
    {
      Id: "s7",
      image: "mensuits/CPNM1369T1BS22FL_1.jpg",
      name: "full blue suit with violet tie",
      price: 10699,
    },
    {
      Id: "s8",
      image: "mensuits/ef7c2a0PIDP00245-O7_1.jpg",
      name: "shiny full brown",
      price: 5599,
    },
    {
      Id: "s9",
      image: "mensuits/greycs_1_26236b0f.jpg",
      name: "full gray suit",
      price: 6599,
    },
    {
      Id: "s10",
      image: "mensuits/hangup-cs_d39whitetr_1_b375882b.jpg",
      name: "printed blue blazer with white truoser",
      price: 11899,
    },
    {
      Id: "s11",
      image:
        "mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.jpg",
      name: "full maroon with maroon tie  ",
      price: 11999,
    },
    {
      Id: "s12",
      image:
        "mensuits/Solid_Formal_2_Pcs_Suits_In_Teal_Cabrey-CPNM1459T1BA22FL-image1.jpg",
      name: "full blue suit",
      price: 12399,
    },
    {
      Id: "s13",
      image:
        "mensuits/Textured_Formal_Suits_In_Light_Blue_Riten-CPPM1370B1BA22FL-image1.jpg",
      name: "sky blue blazer with grey trouser",
      price: 12799,
    },
  ];
  return (
    <div className="carousal_box">
      <p className="car_head">Suits for rent</p>
      <span className="suit_box">
        <span className="box_text">
          <p className="head">Suits for rent</p>
          <h6 className="element">
            <Typewriter text={txt} />
          </h6>
        </span>
        <span className="carousel_inner_box">
          <Carousel
            autoPlay={true}
            interval={1500}
            infiniteLoop={true}
            showIndicators={false}
            showThumbs={false}
            showStatus={false}
            className="carousel"
          >
            {suitproducts.map((i) => (
              <Item data={i.image} />
            ))}
          </Carousel>
          <Link style={{textDecoration:"none",color:"black"}}  to={"/suits"}>
          <button  className="btn card_button">SHOP NOW</button>
          </Link>
        </span>
      </span>
    </div>
  );
};

const Item = (props) => (
  <div className="carousel_image">
    <img src={require("../assets/suit/" + props.data)} alt="img.jpg" />
  </div>
);

export default Suit;
