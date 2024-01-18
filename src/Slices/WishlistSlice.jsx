import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
    wishlist: localStorage.getItem("wishlist")
        ? JSON.parse(localStorage.getItem("wishlist"))
        : [],
    total: localStorage.getItem("total")
        ? JSON.parse(localStorage.getItem("total"))
        : 0,
    totalItems: localStorage.getItem("totalItems")
        ? JSON.parse(localStorage.getItem("totalItems"))
        : 0,
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: { 
        addToWishlist: (state, action) => {
            const item = action.payload 
            state.wishlist.push(item) 
            state.totalItems++
            state.total += item.price 
            localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
            localStorage.setItem("total", JSON.stringify(state.total))
            localStorage.setItem("totalItems", JSON.stringify(state.totalItems)) 
            toast.success("Item added to wishlist")
        },
        
        removeFromWishlist: (state, action) => {
            const itemId = action.payload
            const index = state.wishlist.findIndex((item) => item._id === itemId)

            if (index >= 0) {
                
                state.totalItems--
                state.total -= state.wishlist[index].price
                state.wishlist.splice(index, 1) 
                localStorage.setItem("wishlist", JSON.stringify(state.wishlist))
                localStorage.setItem("total", JSON.stringify(state.total))
                localStorage.setItem("totalItems", JSON.stringify(state.totalItems)) 
                toast.success("Item removed from wishlist")
            }
        },
    }
})

export const { addToWishlist, resetWishlist, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer;
