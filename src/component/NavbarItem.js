import React from 'react'
import { Link } from "react-router-dom";


export const NavbarItem = (props) => {
  return (
    <Link to={props.link} className='flex flex-col font-semibold text-[12px] text-main items-center justify-center space-y-[1px]'>
        {props.icon}
        <h6>{props.name}</h6>
    </Link>
  )
}
