import React from 'react'
import { SuggestedItem } from '../component/SuggestedItem'
import { MainHero } from '../component/MainHero'
import { Ads } from '../component/Ads'
import { Navbar } from '../component/Navbar'

const Beranda = () => {
  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} className='flex flex-col items-center pb-10 bg-neutral-100'>
        <div className='relative h-[46rem]'>
            <div className='static'>
                <MainHero/>
                <div className='absolute bottom-0 right-0 left-0'>
                    <SuggestedItem/>
                </div>
            </div>
        </div>

        <div className='w-[90%] mt-5'>
            <Ads />
        </div>
        < Navbar />
    </div>
  )
}

export default Beranda