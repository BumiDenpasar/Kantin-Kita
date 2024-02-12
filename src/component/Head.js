import React from 'react'

export const Head = (props) => {
  return (
    <div className='bg-selected w-screen text-white h-max pt-14 pb-5 px-5'
    style={{ borderRadius: '0px 0px 100px 0px' }} 
    >
        <h1 className='font-medium text-3xl '>{props.title}</h1>
        <p className='text-sm font-medium tracking-wide'>{props.desc}</p>
        <div className='mt-5'>
            {props.addons}
        </div>
    </div>
  )
}
