import React from 'react'

export const Button = (props) => {
    const bgColor = {
        color: props.backgroundColor ? 'main' : 'inactive',
        img: props.backgroundColor ? 'grayscale-0' : 'grayscale',
        text: props.backgroundColor ? 'font-semibold text-white' : 'font-medium text-neutral-400'
    }
  return (
    <button className={`bg-${bgColor.color} flex space-x-${props.space} justify-center items-center px-5 py-3 transition-all duration-200 rounded-md w-${props.w}`} onClick={!props.disabled ? props.onClick : null}>
        <img src={props.img} className={`h-7 ${bgColor.img}`}/>
        <h5 className={`text-sm ${bgColor.text}`}>{props.name}</h5>
    </button>
  )
}
