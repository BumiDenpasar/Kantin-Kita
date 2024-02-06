import React from 'react'
import { RecentItems } from './RecentItems'
import PickupMethod from './PickupMethod'
import { Button } from './Button'

export const SuggestedItem = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[90%] bg-white shadow-lg rounded-xl h-max py-5 px-4'>
            <h3 className='text-lg font-semibold'>Hai, Bumi</h3>
            <p className='text-sm text-neutral-400 mt-5'>Hari ini kamu mau...</p>
            <div className='mt-2'>
                <RecentItems />
            </div>
            <p className='text-sm mt-7 text-neutral-400'>Mau dianter atau ambil sendiri nih...</p>
            <div className='mt-2'>
                <PickupMethod />
            </div>
            <h2 className='mt-4 mb-5 font-semibold text-lg text-neutral-300 tracking-wide'>Total : Rp. 5000</h2>

            <Button 
            w='full'
            backgroundColor
            name='Pesan'
            />
        </div>
    </div>
  )
}
