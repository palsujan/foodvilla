import { useState, useEffect } from "react";

const useOnline = () => {
 
    const [useOnline, setIsOnline] = useState(true);
    useEffect(() => {
        const handelOnline = () => {
          setIsOnline(true);
         }
         const handelOffline = () => {
          setIsOnline(false);
         }
        window.addEventListener("online", handelOnline);
        window.addEventListener("offline", handelOffline);
        return ()=>{
          window.removeEventListener("online", handelOnline);
          window.removeEventListener("offline", handelOffline);
        }
    }, [])
    
  return useOnline ; //return true or false
}

export default useOnline