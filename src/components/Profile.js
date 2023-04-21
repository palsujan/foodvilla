import React from 'react'
import { useState, useEffect } from 'react';

const Profile = (props) => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
      const timer= setInterval(()=>{
        console.log("useEffect InterVal")
      },1000);
    
      return () => {
        clearInterval(timer)
        console.log("useEffect Return ")
      }
    }, [])
    
  return (
    <div>
        <h1>Its my profile</h1>
        <h2>Name: {props.name}</h2>
        <h3>count: {count}</h3>
        <button onClick={() => { 
            setCount(1);
        }}>Count</button>
    </div>
  )
}

export default Profile