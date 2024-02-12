import React, { useState } from "react";
import pickupIcon from "../assets/pickup-icon.png"
import deliveryIcon from "../assets/delivery-icon.png"
import { Button } from "./Button";

const PickupMethod = () =>{
    const [buttonsState, setButtonsState] = useState({
        pickup: true,
        delivery: false,
      });
    
      const handleClick = (buttonName) => {
        setButtonsState(prevState => ({
          pickup: buttonName === 'pickup' ? true : false,
          delivery: buttonName === 'delivery' ? true : false
        }));
      };

    return (
        <div className="flex space-x-3">
            <Button 
                onClick={() => handleClick('pickup')}
                img={pickupIcon}
                name='Pickup'
                space='2'
                backgroundColor={buttonsState.pickup}
            />
            <Button 
                onClick={() => handleClick('delivery')}
                img={deliveryIcon}
                name='Delivery'
                space='2'
                backgroundColor={buttonsState.delivery}
            />
        </div>

    )
}

export default PickupMethod