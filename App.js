
import React from "react";
import ReactDOM from "react-dom/client ";

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

    const heading = (
        <h1 id="title" key="h2">Namaste Sujan Pal</h1>
    )
    const Title = () =>(
        <a href="/">
            <img 
                className="logo"
                src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
                alt="Food villa logo"
            />
        </a>
    );
    const Header = () =>{
        return(
            <div className="header">
                <Title/>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    };
    const resturantList =[
        {
            "cardType": "restaurant",
            "layoutAlignmentType": "VERTICAL",
            "data": {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "32603",
                "name": "Leon's - Burgers & Wings (Leon Grill)",
                "uuid": "8ce1ad82-7221-4e26-a63f-c0e50d268c9e",
                "city": "1",
                "area": "Indiranagar",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "mtfco4meitoh97jynjxd",
                "cuisines": [
                  "American",
                  "Snacks",
                  "Turkish",
                  "Portuguese",
                  "Continental"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "slaString": "34 MINS",
                "lastMileTravel": 5.699999809265137,
                "slugs": {
                  "restaurant": "leon-grill-indiranagar-indiranagar",
                  "city": "bangalore"
                },
                "cityState": "1",
                "address": "#298, 100ft Rd, Indiranagar, Bangalore-560038",
                "locality": "Indiranagar",
                "parentId": 371281,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 5200,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 5200,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "5200",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6458693~p=25~eid=00000187-6b6e-2d1c-24dc-c3f5006e1943",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "5.6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "32603",
                  "deliveryTime": 34,
                  "minDeliveryTime": 34,
                  "maxDeliveryTime": 34,
                  "lastMileTravel": 5.699999809265137,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.3",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            "parentWidget": false
          },
          {
            "cardType": "restaurant",
            "layoutAlignmentType": "VERTICAL",
            "data": {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "34301",
                "name": "Sri Udupi Park (100ft Road)",
                "uuid": "82e5a42b-6a2d-45c7-a096-320333bd6c4e",
                "city": "1",
                "area": "Indiranagar",
                "totalRatingsString": "10000+ ratings",
                "cloudinaryImageId": "jxp8y1chnqljwqylpkov",
                "cuisines": [
                  "South Indian",
                  "North Indian",
                  "Chaat",
                  "Beverages",
                  "Chinese"
                ],
                "tags": [
                  
                ],
                "costForTwo": 10000,
                "costForTwoString": "₹100 FOR TWO",
                "deliveryTime": 42,
                "minDeliveryTime": 42,
                "maxDeliveryTime": 42,
                "slaString": "42 MINS",
                "lastMileTravel": 6,
                "slugs": {
                  "restaurant": "sri-udupi-park-indiranagar-indiranagar",
                  "city": "bangalore"
                },
                "cityState": "1",
                "address": "#273 100 FEET ROAD DIFFENCE COLONY 6TH MAIN INDIRANAGAR BANGALORE-38",
                "locality": "Defence Colony",
                "parentId": 194697,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 6000,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 6000,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "6000",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 1,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "6 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "34301",
                  "deliveryTime": 42,
                  "minDeliveryTime": 42,
                  "maxDeliveryTime": 42,
                  "lastMileTravel": 6,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "IT_IS_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "4.4",
                "totalRatings": 10000,
                "new": false
              },
              "subtype": "basic"
            },
            "parentWidget": false
          },
          {
            "cardType": "restaurant",
            "layoutAlignmentType": "VERTICAL",
            "data": {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "424558",
                "name": "La Pino'z Pizza",
                "uuid": "8148a6cf-ec13-4800-a649-285af0ac2364",
                "city": "1",
                "area": "Basavanagudi",
                "totalRatingsString": "1000+ ratings",
                "cloudinaryImageId": "mocil3npmwpcdcfaxql1",
                "cuisines": [
                  "Pizzas"
                ],
                "tags": [
                  
                ],
                "costForTwo": 22000,
                "costForTwoString": "₹220 FOR TWO",
                "deliveryTime": 34,
                "minDeliveryTime": 34,
                "maxDeliveryTime": 34,
                "slaString": "34 MINS",
                "lastMileTravel": 4.400000095367432,
                "slugs": {
                  "restaurant": "la-pino'z-pizza-basavanagudi-basavanagudi",
                  "city": "bangalore"
                },
                "cityState": "1",
                "address": "No.99, Gandhi Bazaar Main road, Basavanagudi, Bengaluru",
                "locality": "Gandhi Bazaar Main Road",
                "parentId": 4961,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "aggregatedDiscountInfo": {
                  "header": "Flat ₹125 off",
                  "shortDescriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹249",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "aggregatedDiscountInfoV2": {
                  "header": "₹125 OFF",
                  "shortDescriptionList": [
                    {
                      "meta": "Use MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "descriptionList": [
                    {
                      "meta": "Flat ₹125 off on orders above ₹249 | Use code MATCHDEAL125",
                      "discountType": "Flat",
                      "operationType": "RESTAURANT"
                    }
                  ],
                  "subHeader": "",
                  "headerType": 0,
                  "superFreedel": ""
                },
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 3700,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 3700,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "3700",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "4.4 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "424558",
                  "deliveryTime": 34,
                  "minDeliveryTime": 34,
                  "maxDeliveryTime": 34,
                  "lastMileTravel": 4.400000095367432,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 1000,
                "new": false
              },
              "subtype": "basic"
            },
            "parentWidget": false
          },
          {
            "cardType": "restaurant",
            "layoutAlignmentType": "VERTICAL",
            "data": {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "564750",
                "name": "Kailash Parbat",
                "uuid": "59cff30b-f632-4898-923e-b4c2ded13c49",
                "city": "1",
                "area": "Commercial Street",
                "totalRatingsString": "100+ ratings",
                "cloudinaryImageId": "npielplbuoiimnjocfvc",
                "cuisines": [
                  "North Indian",
                  "Street Food"
                ],
                "tags": [
                  
                ],
                "costForTwo": 30000,
                "costForTwoString": "₹300 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 2.9000000953674316,
                "slugs": {
                  "restaurant": "kailash-parbat-ebrahim-sahib-street-central-bangalore",
                  "city": "bangalore"
                },
                "cityState": "1",
                "address": "NO, 68, GROUND FLOOR, EBRAHIM SAHIB STREET, BANGALORE, Shivajinagara, B.B.M.P East, Karnataka-560001",
                "locality": "Ibrahim  Sahib Street",
                "parentId": 1933,
                "unserviceable": false,
                "veg": true,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "ribbon": [
                  {
                    "type": "PROMOTED"
                  }
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "cid=6381963~p=28~eid=00000187-6b6e-2d1c-24dc-c3f6006e1c0f",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.9 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "564750",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "lastMileTravel": 2.9000000953674316,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": true,
                "avgRating": "4.1",
                "totalRatings": 100,
                "new": false
              },
              "subtype": "basic"
            },
            "parentWidget": false
          },
          {
            "cardType": "restaurant",
            "layoutAlignmentType": "VERTICAL",
            "data": {
              "type": "restaurant",
              "data": {
                "type": "F",
                "id": "10575",
                "name": "Pizza Hut",
                "uuid": "2362d8b0-38df-4405-989b-53c5b08ce381",
                "city": "1",
                "area": "Langford Town",
                "totalRatingsString": "5000+ ratings",
                "cloudinaryImageId": "evfa6jofvgu4fjuc01ul",
                "cuisines": [
                  "Pizzas"
                ],
                "tags": [
                  
                ],
                "costForTwo": 60000,
                "costForTwoString": "₹600 FOR TWO",
                "deliveryTime": 27,
                "minDeliveryTime": 27,
                "maxDeliveryTime": 27,
                "slaString": "27 MINS",
                "lastMileTravel": 2.700000047683716,
                "slugs": {
                  "restaurant": "pizza-hut-oshngness-road-central-bangalore",
                  "city": "bangalore"
                },
                "cityState": "1",
                "address": "4/1, O'Shaughnessy Road, Richmond Town, Langford Gardens, Bengaluru, Karnataka 560025",
                "locality": "O'Shngnessy Road",
                "parentId": 721,
                "unserviceable": false,
                "veg": false,
                "select": false,
                "favorite": false,
                "tradeCampaignHeaders": [
                  
                ],
                "chain": [
                  
                ],
                "feeDetails": {
                  "fees": [
                    {
                      "name": "distance",
                      "fee": 2900,
                      "message": ""
                    },
                    {
                      "name": "time",
                      "fee": 0,
                      "message": ""
                    },
                    {
                      "name": "special",
                      "fee": 0,
                      "message": ""
                    }
                  ],
                  "totalFees": 2900,
                  "message": "",
                  "title": "Delivery Charge",
                  "amount": "2900",
                  "icon": ""
                },
                "availability": {
                  "opened": true,
                  "nextOpenMessage": "",
                  "nextCloseMessage": ""
                },
                "longDistanceEnabled": 0,
                "rainMode": "NONE",
                "thirdPartyAddress": false,
                "thirdPartyVendor": "",
                "adTrackingID": "",
                "badges": {
                  "imageBased": [
                    
                  ],
                  "textBased": [
                    
                  ],
                  "textExtendedBadges": [
                    
                  ]
                },
                "lastMileTravelString": "2.7 kms",
                "hasSurge": false,
                "sla": {
                  "restaurantId": "10575",
                  "deliveryTime": 27,
                  "minDeliveryTime": 27,
                  "maxDeliveryTime": 27,
                  "lastMileTravel": 2.700000047683716,
                  "lastMileDistance": 0,
                  "serviceability": "SERVICEABLE",
                  "rainMode": "NONE",
                  "longDistance": "NOT_LONG_DISTANCE",
                  "preferentialService": false,
                  "iconType": "EMPTY"
                },
                "promoted": false,
                "avgRating": "3.9",
                "totalRatings": 5000,
                "new": false
              },
              "subtype": "basic"
            },
            "parentWidget": false
          }

        ]
    const ResturentCard = ({cloudinaryImageId, name, cuisines, totalRatingsString, lastMileTravelString}) =>{
        // const {cloudinaryImageId, name, cuisines, totalRatingsString} = restaurant.data.data;
        return(
            <div className="card">
                <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="Hungrilla"/>
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <h4>{totalRatingsString}</h4>
                <h5>{lastMileTravelString}</h5>
            </div>
        )
    }
    const Body = () =>{
        return(
            <div className="resturant-list">
                {
                    resturantList.map(resturant =>{
                        return  <ResturentCard {...resturant.data.data} key={resturant.data.data.id}/>
                    })
                }
              
               {/* <ResturentCard {...resturantList[1].data.data}/>  
               <ResturentCard {...resturantList[2].data.data}/>
               <ResturentCard {...resturantList[3].data.data}/>
               <ResturentCard {...resturantList[4].data.data}/> */}
               {/* <ResturentCard 
               name = {resturantList[0].data.data.name}
               cuisines={resturantList[0].data.data.cuisines}
               />  */}
               {/* <ResturentCard restaurant = {resturantList[4]}/>  */}

            </div>
        )
    }
    const Footer = () =>{
        return(
            <h4>Footer</h4>
        )
    }
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