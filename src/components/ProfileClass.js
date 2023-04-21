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
        return (
            <div>
                <h1>Profile Class Component</h1>
                <img src={this.state?.userInfo?.avatar_url} alt="Github_image"/>
                <h2>Name: {this.state?.userInfo?.name}</h2>
                <h3>Location: {this.state?.userInfo?.location}</h3>
                <h3>Bio: {this.state?.userInfo?.bio}</h3>
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