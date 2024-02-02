import React, { useState} from "react";
import "../styles/User.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";


const User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });
  const dispatch = useDispatch();
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
    <>
      <center>
        <div className="user container-fluid ">
          <div className="container-fluid contact_form_box">
            <form className="contact_form" onSubmit={handleSubmit}>
              <h1>CONTACT</h1>
              <label>NAME </label>
              <br />
              <input
                name="name"
                value={formData.name}
                onChange={handleChangeEvent}
                type="text"
              />
              <br />

              <label>EMAIL </label>
              <br />
              <input
                name="email"
                value={formData.email}
                onChange={handleChangeEvent}
                type="email"
              />
              <br />

              <label>MOBILE</label>
              <br />
              <input
                name="mobile"
                value={formData.mobile}
                onChange={handleChangeEvent}
              />
              <br />
              <label>ADDRESS</label>
              <br />
              <input
                name="address"
                value={formData.address}
                onChange={handleChangeEvent}
              />
              <br />
              <input id="submit" type="submit" />
            </form>
          </div>
        </div>
      </center>
      {/* <Data /> */}
    </>
  );
};

// const Data = () => {
//   return (
//     <div>
//       <table class="table text-light">
//         <thead>
//           <tr>
//             <th scope="col">name</th>
//             <th scope="col">email</th>
//             <th scope="col">message</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr>

//             <td>Larry</td>
//             <td>the Bird</td>
//             <td>@twitter</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default User;
