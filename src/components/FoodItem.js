import { useContext } from "react";
import {IMG_CDN_URL} from "../config";
import { UserContext } from "../utils/UserContext";


const FoodItem = ({name, description, price, imageId
    // user
}) =>{
    // const {cloudinaryImageId, name, cuisines, totalRatingsString} = restaurant.data.data;
    const {user} = useContext(UserContext)
    return(
        <div className="card">
            <img src={`${IMG_CDN_URL}` + imageId} alt="FoodImage"/>
            <h2>{name}</h2>
            <p>{description}</p>
            <h5> ₹{price/100}</h5>
        </div>
    )
}

export default FoodItem;