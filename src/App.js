
import React from "react";
import ReactDOM from "react-dom/client ";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
    
    const Applayout = () =>{
        return(
            <>
            <Header/>
            <Body/>
            <Footer/>
            </>
        );
    };
    const root = ReactDOM.createRoot(document.getElementById('root'))
    root.render(<Applayout/>)





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