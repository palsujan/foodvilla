import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FETCH_MENU_URL, IMG_CDN_URL } from '../config';
import { Shimmer } from './Shimmer';
import useRestraurant from '../utils/useRestraurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  //How to read a dynamic URL params
    const {id} = useParams();

    const [restaurant, setRestaurant] = useState(null)
    const [menu, setMenu] = useState([])


    // const resturant = useRestraurant(id)
    useEffect(()=> {
      getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
      const data = await fetch(FETCH_MENU_URL + id);
      const json = await data.json();
      console.log(json)
      setRestaurant(json?.data?.cards[0]?.card.card.info)

      const menuData = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
      console.log(menuData)
      setMenu(menuData)
    }

    const dispatch = useDispatch();
    const addFoodItem = (menuItem) =>{
      dispatch(addItem(menuItem));
    }
    
  return (!restaurant)?  <Shimmer/> : (
    <div className='container'>
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
          <ul className='menuList'>
            {menu?.map((menuItem, index) => {
              return <li key={index}>
                <img src={`${IMG_CDN_URL}` + menuItem?.card?.info?.imageId} alt='FoodImg'/>
                <h5>{menuItem?.card?.info?.name}</h5> 
                <p>{menuItem?.card?.info?.description}</p> 
                <p>category:{menuItem?.card?.info?.category}</p> 
                <p>₹{menuItem?.card?.info?.price/100}</p> 
                <button onClick={()=> addFoodItem(menuItem)}>Add</button></li>
            })}
          </ul>
        </div>
    </div>
    </div>
  )
}

export default RestaurantMenu