import {configureStore} from "@reduxjs/toolkit";
import { cartReducer,userReducer } from "./reducers";

const store = configureStore({
    reducer : {
       cart : cartReducer,
       user :  userReducer,
    },
})
export default store;


