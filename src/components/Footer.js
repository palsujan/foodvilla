import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useContext } from "react";

const Footer = () =>{
    const {user} = useContext(UserContext)
    return(
        <div className="footerText">
            <p>Developed By <Link target="_blank" to ="https://www.sujanpal.in/" >{user.name}</Link></p>

        </div>
    )
}

export default Footer;