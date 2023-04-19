import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../config';
import { Shimmer } from './Shimmer';

const RestaurantMenu = () => {
    const {id} = useParams();

    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState([])

    useEffect(()=> {
      getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
      const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`);
      const json = await data.json();
      console.log(json)
      setRestaurant(json?.data?.cards[0]?.card.card.info)

      const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      console.log(menuData)
      setMenu(menuData)
    }

  return (!restaurant)?  <Shimmer/> : (
    <div className='menu'>
        <div>
        <h1>Restaurant id: {id}</h1>
        <h2>{restaurant?.name}</h2>
        <img src={`${IMG_CDN_URL}` + restaurant?.cloudinaryImageId} alt=''/>
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>                                                                                                                                                                                                                                                                                                        
        <h3>{restaurant?.costForTwo}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {menu?.map((menuItem, index) => {
              return <li key={index}>{menuItem?.card?.info?.name}</li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default RestaurantMenu