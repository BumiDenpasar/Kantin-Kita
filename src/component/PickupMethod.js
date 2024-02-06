import React from "react";
import pickupIcon from "../assets/pickup-icon.png"
import deliveryIcon from "../assets/delivery-icon.png"

const PickupMethod = () =>{
   

    return (
        <div className="flex space-x-3">
            <button className="bg-main flex items-center space-x-2 text-sm text-white font-semibold px-5 py-3 rounded-md w-max">
                <img src={pickupIcon} className="h-7" alt="pickup icon" />
                <h3>Pickup</h3>
            </button>
            <button className="bg-main flex items-center space-x-2 text-sm text-white font-semibold px-5 py-3 rounded-md w-max">
                <img src={deliveryIcon} className="h-6" alt="delivery icon" />
                <h3>Delivery</h3>
            </button>
        </div>

    )
}

export default PickupMethod