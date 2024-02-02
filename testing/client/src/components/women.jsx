import React from "react";
import "../styles/men.css";
import "../styles/women.css";
import img1 from "../assets/women/images/8e3b095771f69254d1832ff08823196e.jpg"
import img2 from "../assets/women/images/368ea2b34da28516923994e6464bc1c5.jpg"
import img3 from "../assets/women/images/A36I2299_765x.webp"
import img4 from "../assets/women/images/a50546a3e02f2bde9866514c47eb83ef.jpg"
import img5 from "../assets/women/images/cd811f8a6b424c16deabc062e3e3a62d.jpg"
import img6 from "../assets/women/images/fdb05b7bd85e503c8d88bbaec9b3269b.jpg"
import img7 from "../assets/women/images/IMG_0005_1_bad33902-e2f8-4340-9e37-d86aa6880b37_765x.webp"
import img8 from "../assets/women/images/IMG_0042_27471975-1667-4578-bb9c-8d90316b9a5c_1200x.webp"
import img9 from "../assets/women/images/IMG_0045_1_045bf02f-cfe8-452e-aaea-e84b5f0f3173_1200x.webp"
import img10 from "../assets/women/images/IMG_0048_0991cc94-f087-4670-974d-65d8fad1a6fe_1200x.webp"
import img11 from "../assets/women/images/IMG_0102_dcb42cc2-9f6a-4aba-ab64-3eb9df4dd98f_765x.webp"
import img12 from "../assets/women/images/IMG_0110_a7fbb303-7605-4adc-be51-b83d0a1ab894_1200x.webp"
import img13 from "../assets/women/images/IMG_0166_ff5802bb-2b08-41a5-bc7b-92e39356190b_1200x.webp"
import img14 from "../assets/women/images/IMG_0311_c3b6086d-b60f-47b4-aaef-7f97ebc94cc7_1200x.webp"
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const Women = () => {
  const products = [
    // {
    //   id: 101,
    //   image: img1,
    //   name: "printed brown shirt",
    //   price: 3499,
    // },
    // {
    //   id: 102,
    //   image: img2,
    //   name: "printed maroon-yellow shirt ",
    //   price: 2999,
    // },
    {
      id:103,
      image:img3,
      name: "plain white tshirt",
      price: 2999,
    },
    // {
    //   id: 104,
    //   image:img4,
    //   name: "plain red shirt",
    //   price: 2299,
    // },
    // {
    //   id:105,
    //   image: img5,
    //   name: "checked light-yellow shirt",
    //   price: 2699,
    // },

    // {
    //   id: 106,
    //   image: img6,
    //   name: "printed blue-flower tshirt",
    //   price: 3499,
    // },
    {
      id: 107,
      image:img7,
      name: "checked blue shirt",
      price: 2599,
    },
    {
      id: 108,
      image:img8,
      name: "black bazer",
      price: 2999,
    },
    {
      id: 109,
      image:img9,
      name: "plain violet shirt",
      price: 2799,
    },
    {
      id: 110,
      image:img10,
      name: "blue casuals ",
      price: 2899,
    },
    {
      id: 111,
      image: img11 ,
      name: "light pink sweatshirt",
      price: 2399,
    },
    {
      id: 112,
      image: img12 ,
      name: "light orange tshirt",
      price: 1799,
    },
    {
      id: 113,
      image: img13 ,
      name: "printed white shirt",
      price: 3199,
    },
    {
        id:114,
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
    <div className=" col-12 col-md-4 col-lg-3 col-sm-12 my-4">
      <div className="card card_men_inner  ">
        <img
          className=" card-img-top women_img"
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
           onClick={() => handler({ image, id, name, price, quantity: 1 })}>buy now</button>
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

export default Women;
