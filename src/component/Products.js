import React, { useState } from 'react'
import { Product } from './Product'

export const Products = (props) => {
    const [menus, setMenus] = useState([])
  return (
    <div>
        {menus.map((menu, key) => (
          <Product
            key={key}
            nama={menu.nama_menu}
            deskripsi={menu.deskripsi_menu}
            harga={menu.harga}
          />
        ))}
    </div>
  )
}
