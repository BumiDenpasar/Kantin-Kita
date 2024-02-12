import React from 'react'
import defaultImg from '../assets/food-image.png'
import { AddButton } from './AddButton'

export const Product = (props) => {
    console.log(props)
  return (
    <div className='bg-white rounded-lg shadow-lg shadow-neutral-200 w-full px-5 py-4 h-max flex space-x-3 items-start.' key={props.key}>
        <img src={props.image == null ? defaultImg : props.image}
        className='w-20 rounded-xl' />
        <div className='w-full'>
          <h1 className='font-semibold'>{props.nama}</h1>
          <h1>{props.deskripsi}</h1>
          <h1>{props.harga}</h1>
          <div className='w-full flex justify-end'>
            <AddButton />
          </div>
        </div>
    </div>
  )
}
