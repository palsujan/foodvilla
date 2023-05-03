
import React, { Children, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client ";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import { Shimmer } from "./components/Shimmer";
import RestaurantCard from "./components/RestaurantCard";
import { UserContext } from "./utils/UserContext";
// import Instamart from "./components/Instamart";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const Instamart = lazy(() => import("./components/Instamart"));
// Upon On demand loading -> upon render -> suspend loading

    const Applayout = () =>{
        const [user, setUser] = useState({
            name:"Sujan Pal",
            phone: 7005674037,
            email: "sujanpal79@gmail.com"
        })
        return(
            <UserContext.Provider value={{
                user:user,
                setUser:setUser,
            }}>
            <Header/> 
            <Outlet/>
            <Footer/>
            </UserContext.Provider>
        );
    };

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Applayout/>,
            errorElement:<Error/>,
            children:[
                {
                    path: "/",
                    element: <Body user={
                        {
                            name:"Foodvilla",
                            phone: 7005674037,
                        }
                    }/>,
                },
                {
                    path: "/about",
                    element: <About/>,
                    children:[
                        {
                            path: "profile",
                            element:<Profile/>
                        }

                    ]
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                },
                {
                    path: "/cart",
                    element: <Cart/>,
                },
                {
                    path: "/restaurant/:id",
                    element: <RestaurantMenu/>,
                },
                {
                    path: "/instamart",
                    element: (
                        <Suspense fallback={<Shimmer></Shimmer>}>
                            <Instamart/>
                        </Suspense>
                    ),
                }
            ]
        },
        
    ])

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<RouterProvider router = {appRouter}/>)



/**
    Applayout
    (state=user)
     - <Body user={user}/>
        - <RestaurantContainer user =>
         - RestaurantCard  user ={user}
          - <h4>{user}</h4>

   Props Drilling       
 */

    // const heading = document.createElement("h1");
    // heading.innerHTML = "Namaste Everyone";
    // const root = document.getElementById('root');
    // root.appendChild(heading )

    // const heading = React.createElement("h1",
    //     {id:'title', 
    //     key:"h1",
    //     },
    //     "heading1"
    //     );
    //     const heading2 = React.createElement("h2",
    //     {id:'container',
    //     key:"h2",
    // },
    //     "Heading2"
    //     );
    //     const container = React.createElement("h1",
    //     {id:'container'},
    //     [heading, heading2]
    //     );