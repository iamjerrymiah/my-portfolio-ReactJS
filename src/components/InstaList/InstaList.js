import React from "react";
import Product from "../Product/Product";
import { instaProds } from "../../data";

import './InstaList.css';

const InstaList = ( props ) => {
    return(
        <div className="il">
            <div className="il-texts">
                <h1 className="il-title">Instagram Clone</h1>
                <p className="il-desc">
                   An Instagram Clone built entirely from scratch with ReactJs. 
                   This web apilication has some core similarities with the actual Instagram application but quite lacking in some features.
                </p>
            </div>
            <div className="il-list">
                {instaProds.map((item) => (
                     <Product 
                     key={item.id} 
                     img={item.img} 
                     link={item.link}/>
                ))} 
            </div>
        </div>
    )
}

export default InstaList;