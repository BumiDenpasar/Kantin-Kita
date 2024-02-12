import React from 'react'
import { NavbarItem } from './NavbarItem'
import { MenuIcon } from '../assets/MenuIcon'
import { PesananIcon } from '../assets/PesananIcon'
import { ProfileIcon } from '../assets/ProfileIcon'
import { HomeIcon } from '../assets/HomeIcon'

export const Navbar = () => {
  return (
    <div className='w-screen fixed flex items-center justify-center bottom-0 right-0 left-0'>
      <div className='w-[90%] flex items-end justify-between space-x-3 bg-white shadow-lg rounded-full px-7 py-3 fixed bottom-3'>
        <NavbarItem 
          link='/'
          icon={<HomeIcon />}
          name='Home'
        />
        <NavbarItem 
          link='/menu'
          icon={<MenuIcon />}
          name='Menu'
        />
        <NavbarItem 
          link='/pesanan'
          icon={<PesananIcon />}
          name='Pesanan'
        />
        <NavbarItem 
          link='/profil'
          icon={<ProfileIcon />}
          name='Profil'
        />
      </div>

      <div className='w-screen h-32  bg-gradient-to-t from-neutral-200 to-transparent'>

      </div>
    </div>
  )
}
