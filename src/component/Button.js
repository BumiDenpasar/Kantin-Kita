import React from 'react'

export const Button = (props) => {
    const bgColor = {
        color: props.backgroundColor ? 'main' : 'neutral-300'
    }
  return (
    <button className={`bg-${bgColor.color} px-5 py-3 rounded-md w-${props.w}`} onClick={!props.disabled ? props.onClick : null}>
        <h5 className='text-white text-sm font-semibold'>{props.name}</h5>
    </button>
  )
}
