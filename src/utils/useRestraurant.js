import { useState,useEffect } from "react";

const useRestraurant = (id) => {

    const [restaurant,setRestaurant] = useState(null);
    const [menu, setMenu] = useState([null])
    //Get data from API
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
    //return restaurant data
    return restaurant;
}

export default useRestraurant;