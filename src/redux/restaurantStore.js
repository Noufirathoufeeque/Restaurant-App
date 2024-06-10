import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";


const restaurantStore = configureStore({
    reducer:{
        productReducer:productSlice
    }
})

export default restaurantStore