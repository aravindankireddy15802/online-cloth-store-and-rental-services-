import React from "react";
import "../styles/men.css";
import img1 from  "../assets/suit/mensuits/3_3e487665-0815-489c-b3ac-b7adb6454b9e.jpg"
import img2 from  "../assets/suit/mensuits/7b51b73ABFRL-ASSUTSLFT98764_1.jpg"
import img3 from  "../assets/suit/mensuits/9bf5381PIDP00241-V7_1.jpg"
import img4 from  "../assets/suit/mensuits/52fe4edRRR-ARABSU5526_01.jpg"
import img5 from  "../assets/suit/mensuits/97e6941NL-DO-NAULL3-Wine_1.jpg"
import img6 from  "../assets/suit/mensuits/5107369PIS3ONSFE81762_1.jpg"
import img7 from  "../assets/suit/mensuits/CPNM1284R2BA21FL_1.jpg"
import img8 from  "../assets/suit/mensuits/CPNM1369T1BS22FL_1.jpg"
import img9 from  "../assets/suit/mensuits/ef7c2a0PIDP00245-O7_1.jpg"
import img10 from "../assets/suit/mensuits/greycs_1_26236b0f.jpg"
import img11 from "../assets/suit/mensuits/hangup-cs_d39whitetr_1_b375882b.jpg"
import img12 from "../assets/suit/mensuits/Sienna_Dobby_Wedding_Tuxedo_In_Wine_Color_Slim_Fit-CPNM1269E1PA21FL-Image1.jpg"
import img13 from "../assets/suit/mensuits/Solid_Formal_2_Pcs_Suits_In_Teal_Cabrey-CPNM1459T1BA22FL-image1.jpg"
import img14 from "../assets/suit/mensuits/Textured_Formal_Suits_In_Light_Blue_Riten-CPPM1370B1BA22FL-image1.jpg"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Suits = () => {
  const products = [
    {
      id: 201,
      image: img1,
      name: "printed brown shirt",
      price: 3499,
    },
    {
      id: 202,
      image: img2,
      name: "printed maroon-yellow shirt ",
      price: 2999,
    },
    {
      id:203,
      image:img3,
      name: "plain white tshirt",
      price: 2999,
    },
    {
      id: 204,
      image:img4,
      name: "plain red shirt",
      price: 2299,
    },
    {
      id:205,
      image: img5,
      name: "checked light-yellow shirt",
      price: 2699,
    },

    {
      id: 206,
      image: img6,
      name: "printed blue-flower tshirt",
      price: 3499,
    },
    {
      id: 207,
      image:img7,
      name: "checked blue shirt",
      price: 2599,
    },
    {
      id: 208,
      image:img8,
      name: "black bazer",
      price: 2999,
    },
    {
      id: 209,
      image:img9,
      name: "plain violet shirt",
      price: 2799,
    },
    {
      id: 210,
      image:img10,
      name: "blue casuals ",
      price: 2899,
    },
    {
      id: 211,
      image: img11 ,
      name: "light pink sweatshirt",
      price: 2399,
    },
    {
      id: 212,
      image: img12 ,
      name: "light orange tshirt",
      price: 1799,
    },
    {
      id: 213,
      image: img13 ,
      name: "printed white shirt",
      price: 3199,
    },
    {
        id:214,
        image: img14,
        name: "printed brown shirt",
        price: 3499,
      },
  ];


  
  const dispatch = useDispatch();
  const addToCartHandler = (options) => {
    dispatch({
      type: "addToCart",
      payload: options
    });
    
    dispatch({ type: "calculatePrice" });
    toast.success("added to cart")
  };
  return (
    <div className="container  product_template">
      <div className="row">
        {
         products.map((product) => (
          <ProductTemplate
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
            id={product.id}
            handler={addToCartHandler}
          />
        ))
       }
      </div>
    </div>
  );
};

const ProductTemplate = ({ image, name, price, id, handler }) => {
  
  return (
    <div className=" col-12 col-md-6 col-lg-4 col-sm-12 my-4">
      <div className="card card_men_inner ">
        <img
          className="card-img-top card_men_img"
          src={image}
          alt={id}
        />
        <div className="card-body">
          <h6 className="card-title ">{name}</h6>
          <p className="card-text fw-bold">
            <i className="fa-solid  fa-indian-rupee-sign"></i> {price}
          </p>
        </div>
        <div className="d-flex container justify-content-center gap-3 mb-3 mt-0">
          <button className="btn btn-warning w-50 buy"
           onClick={() => handler({ image, id, name, price, quantity: 1 })}>rent {Math.round(price*0.15)}/day</button>
          <button
            onClick={() => handler({ image, id, name, price, quantity: 1 })}
            className="btn btn-dark w-50 text-light addToCart"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Suits;
