import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Head } from '../component/Head'
import PickupMethod from '../component/PickupMethod'
import { Navbar } from '../component/Navbar'
import { Categories } from '../component/Categories'
import { Product } from '../component/Product'

const Menu = () => {
  const [categories, setCategories] = useState([
    {
     category: 'Drinks',
     link : '#drinks',
     selected : true 
    },
    {
      category: 'Foods',
      link : '#foods' 
    },
    {
      category: 'Snacks',
      link : '#snacks' 
    },
    {
      category: 'Others',
      link : '#others' 
    }, 
  ])

  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/menus');
        setMenus(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, []);
  

  return (
    <div style={{ fontFamily: 'Montserrat, sans-serif' }} className='bg-neutral-100 h-max pb-24' >
      <Head 
      title="Hai, Bumi"
      desc="Kamu mau beli apa hari ini?"
      addons={<PickupMethod />}
      />
      <div className='mt-10 flex flex-col px-8 space-y-5'>
        {menus.map((menu, key) => (
          <Product
            key={key}
            nama={menu.nama_menu}
            deskripsi={menu.deskripsi_menus}
            harga={menu.harga}
          />
        ))}
      </div>
      
      <Navbar />
    </div>
  )
}

export default Menu