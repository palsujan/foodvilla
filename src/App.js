
import React, { Children } from "react";
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



    const Applayout = () =>{
        return(
            <>
            <Header/>
            <Outlet/>
            <Footer/>
            </>
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
                    element: <Body/>,
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
                }
            ]
        },
        
    ])

    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<RouterProvider router = {appRouter}/>)





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