import {restaurantList} from "../config"
import RestaurantCard from "./RestaurantCard"
const Body = () =>{
    let searchText = "KFC"
    return(
        <>
            <div className="search-container">
                <input 
                type="text" 
                className="search-inpu" 
                placeholder="Search" 
                value = {searchText}
                onChange={(e)=>e.target.value}
                />
                <button className="search-btn">Search</button>
            </div>
            <div className="resturant-list">
                {
                    restaurantList.map(restaurant =>{
                        return  <RestaurantCard {...restaurant.data.data} key={restaurant.data.data.id}/>
                    })
                }
              
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