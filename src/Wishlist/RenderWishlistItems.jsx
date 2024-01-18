import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {RiDeleteBin6Line} from "react-icons/ri"
import { removeFromWishlist } from '../Slices/WishlistSlice'  

export default function RenderWishlistItems() {
 
    const {wishlist} = useSelector((state) => state.wishlist)
    const dispatch = useDispatch(); 

  return (
    <div> 
        {
            wishlist.map((dataObj, index) => (
                <div 
                    key={index} 
                    className={`flex w-full flex-wrap items-start justify-between gap-6 
                        ${index !== wishlist.length - 1 && "border-b border-b-richblack-400 pb-6"} 
                        ${index !== 0 && "mt-6"} `
                    }
                >
                     <div>
                        <div>
                            {dataObj.title}
                        </div>
                        <img src={dataObj.image} width={200} height={150}
                         alt="" />
                        <p>
                            {dataObj.description}
                        </p>
                     </div>

                    <div>
                        <button 
                            onClick={() => dispatch(removeFromWishlist(dataObj._id))}
                        >
                            Remove from wishlist  <RiDeleteBin6Line size={20}/> 
                        </button> 
                    </div>
                </div>
            ))
        }
    </div>
  )
}