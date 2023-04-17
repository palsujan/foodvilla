import { Link } from "react-router-dom";

const Footer = () =>{
    return(
        <div className="footerText">
            <p>Developed By <Link target="_blank" to ="https://www.sujanpal.in/" >Sujan Pal</Link></p>

        </div>
    )
}

export default Footer;