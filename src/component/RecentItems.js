import React, { useState } from 'react'
import { Button } from './Button'

export const RecentItems = () => {
  const [buttonsState, setButtonsState] = useState({
    button1: true,
    button2: false,
    button3: false
  });

  const handleClick = (buttonName) => {
    setButtonsState(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName]
    }));
  };

  return (
    <div className='flex overflow-x-auto whitespace-nowrap space-x-3'>
       <Button 
         onClick={() => handleClick('button1')}
         name='Mie Aceh'
         backgroundColor={buttonsState.button1}
       />
       <Button 
         onClick={() => handleClick('button2')}
         name='Es Vanilla Blue'
         backgroundColor={buttonsState.button2}
       />
       <Button 
         onClick={() => handleClick('button3')}
         name='Mochi'
         backgroundColor={buttonsState.button3}
       />
    </div>
  )
}
