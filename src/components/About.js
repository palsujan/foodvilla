// import { Outlet } from "react-router-dom";
import Profile from "./Profile";

const About = () =>{
    return (
       <>
            <h1>About Us Page</h1>
            <p>
                This is the practice react Class session 07
            </p>
            {/* <Outlet/> */}
            <Profile/>
       </>
    )
}

export default About;