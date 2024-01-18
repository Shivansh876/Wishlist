import { useSelector } from "react-redux"
import RenderwishlistItems from "./RenderWishlistItems"

export default function Wishlist() {
    const {total, totalItems} = useSelector((state) => state.wishlist) 
    return (
        <div >
            <h1>Your wishlist</h1>
            <p >{totalItems} Items in wishlist</p>
            {
                total>0 
                ? (
                    <div >
                        <RenderwishlistItems /> 
                    </div>
                )
                : (
                    <p>Your wishlist is empty</p>
                )
            }
        </div>
    )
}