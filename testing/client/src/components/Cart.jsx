import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import "../styles/cart.css";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
const Cart = () => {
  const { cartItems, subTotal, tax, delivery_charges, total } = useSelector(
    (state) => state.cart
  );
  
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: { id },
    });
    dispatch({ type: "calculatePrice" });
  };

  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id,
    });
    dispatch({ type: "calculatePrice" });
  };

  // const placeOrder = () =>{

  //   const [name,email,number,address] = {userData};
  //    if(name!=null && email!=null  && number!=null &&  address !=null){

  //    }

  // }
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
 
  const handleChangeEvent = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/user", formData);
      console.log(response.data);
      toast.success(" successfully registered");
      
      dispatch({
        type: "userDetails",
        payload: formData,
      });
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="container-fluid cart_box">
      <main className="cart_main row ">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              decrement={decrement}
              increment={increment}
              key={item.id}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <div className="row h-100 text-center ">
            <h1 className="text-light my-auto">NO ITEMS YET !</h1>
          </div>
        )}
      </main>
      <aside className="price_details  ">
        <span className="details_box">
          <div className="note_box">
            <h6 className="note">NOTE:</h6>
            <p className="note_text">
              delivery charges are excluded on order above Rs:2000/-
              <br />
              GST: which is 18% of order price included
            </p>
          </div>

          <div>
            <h1 className="details">price details</h1>
            <p className="price">sub-total :{subTotal} rs </p>
            <p className="price">GST: {tax} rs</p>
            <p className="price">delivey charges :{delivery_charges} </p>
            <p id="total" className="price ">
              TOTAL: {total} rs
            </p>
            <button
              // onClick={placeOrder}
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
              className="btn text-dark border-dark payment_btn"
            >
              Place order
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Register
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          name
                        </label>
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          id="recipient-name"
                          onChange={handleChangeEvent}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          email
                        </label>
                        <input
                          type="text"
                          name="email"
                          class="form-control"
                          id="recipient-name"
                          onChange={handleChangeEvent}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          mobile
                        </label>
                        <input
                          type="number"
                          name="mobile"
                          class="form-control"
                          id="recipient-name"
                          onChange={handleChangeEvent}
                        />
                      </div>
                      <div class="mb-3">
                        <label for="recipient-name" class="col-form-label">
                          address
                        </label>
                        <input
                          type="text"
                          name="address"
                          class="form-control"
                          id="recipient-name"
                          onChange={handleChangeEvent}
                        />
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <input type="button" class="btn btn-primary" />
                      
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </span>
      </aside>
    </div>
  );
};
const CartItem = ({
  image,
  name,
  price,
  quantity,
  decrement,
  increment,
  id,
  deleteHandler,
}) => {
  return (
    <div className="col-12 cart_product ">
      <img className="cart_img" src={image} alt={name} />
      <div className="cart_product_text">
        <h5>{name}</h5>
        <p>rs {price}</p>
      </div>
      <div className="product_qty">
        <button className="qty_btn" onClick={() => decrement(id)}>
          -
        </button>
        <p className="product_qty my-auto">{quantity}</p>
        <button className="qty_btn" onClick={() => increment(id)}>
          +
        </button>
      </div>
      <AiFillDelete className="delete" onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default Cart;
