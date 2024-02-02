import React, {useEffect, useState } from "react";
import "../styles/men.css";
import toast  from "react-hot-toast";
import axios from "axios";

import img1 from "../assets/men/images/IMG_0047_9520c34b-d935-43b6-9cf0-37b92034e179_765x.jpg"
import img2 from "../assets/men/images/HERO_2a678e66-56a6-4f1d-a9fd-6292fb4585b4_1200x.jpg"
import img3 from "../assets/men/images/IMG_6fa51afc-f3a0-4584-899d-1d054bd3fd8e_1200x.jpg"
import img4 from  "../assets/men/images/IMG_0021_bfdaba48-14eb-455d-95f2-1222ae03a255_765x.jpg"
import img5 from "../assets/men/images/IMG_0037_12_1200x.jpg"
import img6 from "../assets/men/images/IMG_0047_9520c34b-d935-43b6-9cf0-37b92034e179_765x.jpg"
import img7 from "../assets/men/images/IMG_0129_1_66d03ed8-a563-4445-a87b-526999bb532a_765x.jpg"
import img8 from "../assets/men/images/IMG_0202_1_b1b5b8c7-b39a-4eee-97bf-34bfac937320_765x.jpg"
import img9 from "../assets/men/images/IMG_0203_7a039149-9678-457a-a5ed-a66f12fae163_765x.jpg"
import img10 from "../assets/men/images/Layer8_6bb8e88c-6836-42bc-af3b-994b9a733be7_1200x.jpg"
import img11 from "../assets/men/images/PEARLSPINK_1200x.jpg"
import img12 from "../assets/men/images/RABBITTEE2_765x.jpg"
import img13 from "../assets/men/images/ROTAR_765x.jpg"


import { useDispatch } from "react-redux";

const Men = () => {
  // const products = [
  //   {
  //     id:1,
  //     image: img1,
  //     name: "printed brown shirt",
  //     price: 3499,
  //   },
  //   {
  //     id: 2,
  //     image: img2,
  //     name: "printed maroon-yellow shirt ",
  //     price: 2999,
  //   },
  //   {
  //     id: 3,
  //     image:img3,
  //     name: "plain white tshirt",
  //     price: 2999,
  //   },
  //   {
  //     id: 4,
  //     image:img4,
  //     name: "plain red shirt",
  //     price: 2299,
  //   },
  //   {
  //     id: 5,
  //     image: img5,
  //     name: "checked light-yellow shirt",
  //     price: 2699,
  //   },

  //   {
  //     id: 6,
  //     image: img6,
  //     name: "printed blue-flower tshirt",
  //     price: 3499,
  //   },
  //   {
  //     id: 7,
  //     image:img7,
  //     name: "checked blue shirt",
  //     price: 2599,
  //   },
  //   {
  //     id: 8,
  //     image:img8,
  //     name: "black bazer",
  //     price: 2999,
  //   },
  //   {
  //     id: 9,
  //     image:img9,
  //     name: "plain violet shirt",
  //     price: 2799,
  //   },
  //   {
  //     id: 10,
  //     image:img10,
  //     name: "blue casuals ",
  //     price: 2899,
  //   },
  //   {
  //     id: 11,
  //     image: img11 ,
  //     name: "light pink sweatshirt",
  //     price: 2399,
  //   },
  //   {
  //     id: 12,
  //     image: img12 ,
  //     name: "light orange tshirt",
  //     price: 1799,
  //   },
  //   {
  //     id: 13,
  //     image: img13 ,
  //     name: "printed white shirt",
  //     price: 3199,
  //   },
  // ];


  const [products , setProducts] = useState([]);


//   useEffect(() => {
   
//     axios.get("http://localhost:3000/men")
//     .then((response) => setProducts(response.data))
//     .catch(err => console.log(err))
//     // console.log(products)
//  },[products])
 



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
    <div className="container product_template">
      <div className="row ">
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
    <div className=" col-12 col-md-6 col-lg-3 col-sm-12 my-4">
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

export default Men;
