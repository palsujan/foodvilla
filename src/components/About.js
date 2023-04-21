// import { Outlet } from "react-router-dom";
import React from "react";
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import { Component } from "react";

// const About2 = () =>{
//     return (
//        <>
//             <h1>About Us Page</h1>
//             <p>
//                 This is the practice react Class session 07
//             </p>
//             {/* <Outlet/> */}
//             <Profile name={"Sujan props assing"}/>
//             <ProfileClass name={"Sujan Class Props Passing"}/>
//        </>
//     )
// }

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent-constrator");
    }
    componentDidMount(){
        console.log("Parent - ComponentDidMount")
    }
    render(){
        return (
            <>
                 <h1>About Us Page</h1>
                 <p>
                     This is the practice react Class session 07
                 </p>
                 {/* <Outlet/> */}
                 <Profile name={"Sujan props assing"}/>
                 {/* <ProfileClass name={"Sujan Class Props Passing"}/> */}
            </>
         )
    }
}

export default About;