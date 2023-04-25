import React from "react";

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        //create State
        this.state = {
            userInfo: {
               name: "Dummy Name",
               location: "Dummy Location",
            },   
       };
       console.log("Child-constrator");
    }
  async componentDidMount(){
    //API Calls
    const  data = await fetch("https://api.github.com/users/palsujan");
        const json =await data.json();
        console.log(json)
        this.setState({
            userInfo: json, 
        })
        console.log("Child - ComponentDidMount")
  }
  componentDidUpdate(){
    console.log("ComponentDidUpdate")
  }
    render(){
         const {avatar_url, name, location, bio} = this.state.userInfo;
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={avatar_url} alt="Github_image"/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h3>Bio: {bio}</h3>
            </div>
        )
    }
}



/**
 * Parenet constructor
 * Parent render
 * Child constructor
 * Child Render
 * Parent componentDidMount
 * **commit phase**
 * 
 * DOM updated API call
 * json is logged in console
 * Child ComponentDidMount
 * 
 * 
 * 
 */
export default ProfileClass;