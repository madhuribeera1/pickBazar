import { configureStore } from "@reduxjs/toolkit";

import {productSlice} from "./products";
import {categorieSlice} from "./categories"
import { cartSlice } from "./cart";



export const store=configureStore({
    reducer:{
        products: productSlice.reducer,
        category: categorieSlice.reducer,
        cart: cartSlice.reducer
        
    }
})