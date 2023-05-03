import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect, useContext } from "react";
import {Shimmer} from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { UserContext } from "../utils/UserContext";

const Body = ({}) =>{
    
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const {user, setUser} = useContext(UserContext);

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
    
    // const isOnline = useOnline();
    // if(!isOnline){
    //     return <h1>Please check your internet connection</h1>
    // }

    //Conditional renderning

    //not render component (Early retrun) =>
    if(!allRestaurants) return null;

    return (allRestaurants?.length === 0 ) ? (
    <Shimmer/> 
    ) : (
        <>
            <div className="container">
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

                <input value={user.name} onChange={
                    e => setUser({
                    name: e.target.value,
                    email: e.target.value,
                })}/>
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
            </div>
        </>
    )
}

export default Body;