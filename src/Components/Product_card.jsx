import React from 'react'
import { addToWishlist } from '../Slices/WishlistSlice';
import { useDispatch } from 'react-redux'; 
import { CiHeart } from "react-icons/ci";

const Product_card = ({ dataObj }) => {
    const dispatch = useDispatch();

    const handleAddToWishlist = () => {
        console.log("dispatching add to Wishlist")
        dispatch(addToWishlist(dataObj)); 
        return;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '70px',
                justifyContent: 'space-around',
                marginTop: '70px'
            }}
        >
            <div
                style={{
                    width: "15em",
                    backgroundColor: "#35D841",
                    padding: 2,
                    borderRadius: 10,
                    marginBlock: 10,
                }}
            >
                <p style={{ fontSize: 20, color: 'black' }}>{dataObj.title}</p>
                <img src={dataObj.image} alt="" height={200} width={200} 
                    style={{
                        borderRadius: "15px",
                    }}
                />
                <p>{dataObj.description}</p>
                     
                <CiHeart onClick={handleAddToWishlist} size={35} color='white'/>
                    
            </div>
        </div>
    )
}

export default Product_card
