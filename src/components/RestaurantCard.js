import {IMG_CDN_URL} from "../config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, totalRatingsString, lastMileTravelString,user}) =>{
    // const {cloudinaryImageId, name, cuisines, totalRatingsString} = restaurant.data.data;
    return(
        <div className="card">
            <img src={`${IMG_CDN_URL}` + cloudinaryImageId} alt="Hungrilla"/>
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <h4>{totalRatingsString}</h4>
            <h5>{lastMileTravelString}</h5>
            <h5>{user?.name}</h5>
            <h5>{user?.phone}</h5>
        </div>
    )
}

export default RestaurantCard;