import React from "react";
import Product from "../Product/Product";
import { ourtechProds } from "../../data";

import './ourTechList.css';

const Ourtechengineering = ( props ) => {
    return(
        <div className="ou">
            <div className="ou-texts">
                <h1 className="ou-title">OurTech Engineering</h1>
                <p className="ou-desc">
                    OurTech Engineering is a prestigious company that formulated a very sophisticated LED drivers that has cool 
                    features and properties. This web app was built to showcase the company's invention and easy communication with their customers.
                </p>
            </div>
            <div className="ou-list">
                {ourtechProds.map((item) => (
                     <Product 
                     key={item.id} 
                     img={item.img} 
                     link={item.link}/>
                ))} 
            </div>
        </div>
    )
}

export default Ourtechengineering;