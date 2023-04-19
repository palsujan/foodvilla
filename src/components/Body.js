import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";

const filterData = (searchInput, restaurants) =>{
    return restaurants.filter((restaurant) =>
            restaurant?.data?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    )
    
}
const Body = () =>{
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");

     useEffect(() => {

        //API call

        getRestaurants();
    }, [])

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")
        const json = await  data.json();

        //optional Chaining
        setAllRestaurants(json?.data?.cards)
        setFilteredRestaurants(json?.data?.cards)
    }
    

    //Conditional renderning

    //not render component (Early retrun) =>
    if(!allRestaurants) return null;

    // if(filteredRestaurants?.length ===  0)
    //  return <h1>No Restaurant match your found</h1>;

    return (allRestaurants?.length === 0 ) ? (
    <Shimmer/> 
    ) : (
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

                <button 
                className="search-btn"
                onClick={() => {
                    //Need to filter the data
                    const data = filterData(searchInput, allRestaurants);

                    //Update the state -restaurant
                    setFilteredRestaurants(data);
                }}
                >Search</button>
            </div>
            <div className="restaurant-list">
                { filteredRestaurants.map(restaurant =>{
                        return  <Link to={"/restaurant/" + restaurant.data.data.id} 
                        key={restaurant.data.data.id}
                        >
                            <RestaurantCard {...restaurant.data.data}/>
                        </Link>
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