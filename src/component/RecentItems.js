import React, { useEffect, useState } from 'react'
import { Button } from './Button'
import axios from 'axios';

export const RecentItems = () => {
  const [topMenus, setTopMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/menus/toploves');
        setTopMenus(res.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
    console.log(topMenus)
  }, []);

  const [buttonsState, setButtonsState] = useState({});

  useEffect(() => {
    const initialState = {};
    topMenus.forEach((menu, index) => {
      initialState[`button${index + 1}`] = false;
    });
    setButtonsState(initialState);
  }, [topMenus]);

  const handleClick = (buttonName) => {
    setButtonsState(prevState => ({
      ...prevState,
      [buttonName]: !prevState[buttonName]
    }));
  };



  return (
    <div className='flex overflow-x-auto whitespace-nowrap space-x-3'>
      {topMenus.map((menu, index) => (
        <Button 
          key={index}
          onClick={() => handleClick(`button${index + 1}`)}
          name={menu.nama_menu}
          backgroundColor={buttonsState[`button${index + 1}`]}
        />
      ))}
    </div>
  )
}


