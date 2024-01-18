import { combineReducers } from "@reduxjs/toolkit";

import wishlistReducer from "../Slices/WishlistSlice" 

const rootReducer = combineReducers({ 
    wishlist: wishlistReducer, 
})

export default rootReducer