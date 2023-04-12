import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState } from "react";

const filterData = (searchInput, restaurants) =>{
    return restaurants.filter((restaurant) =>
            restaurant.data.data.name.includes(searchInput)
    )
    
}
const Body = () =>{

    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchInput, setSearchInput] = useState("");

    // const searchClicked = false;
    // const [searchClicked, setSearchClicked] = useState("false")

    
    return(
        <>
            <div className="search-container">
                <input 
                type="text" 
                className="search-input" 
                placeholder="Search" 
                value = {searchInput}
                onChange={(e)=>{
                        setSearchInput(e.target.value);
                    }   
                }
                />
                {/* {searchClicked} */}
                <button 
                className="search-btn"
                onClick={() => {
                    //Need to filter the data
                    const data = filterData(searchInput, restaurants);

                    //Update the state -restaurant
                    setRestaurants(data);
                    // setSearchClicked("true")
                }}
                >Search</button>
            </div>
            <div className="resturant-list">
                { restaurants.map(restaurant =>{
                        return  <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
                    })}
              
               {/* <ResturentCard {...resturantList[1].data.data}/>  
               <ResturentCard {...resturantList[2].data.data}/>
               <ResturentCard {...resturantList[3].data.data}/>
               <ResturentCard {...resturantList[4].data.data}/> */}
               {/* <ResturentCard 
               name = {resturantList[0].data.data.name}
               cuisines={resturantList[0].data.data.cuisines}
               />  */}
               {/* <ResturentCard restaurant = {resturantList[4]}/>  */}
    
            </div>
        </>
    )
}

export default Body;