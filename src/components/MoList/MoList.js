import React from "react";
import Product from "../Product/Product";
import { moquizzProds } from "../../data";

import './MoList.css';

const MoList = ( props ) => {
    return(
        <div className="mo">
            <div className="mo-texts">
                <h1 className="mo-title">Moquizz</h1>
                <p className="mo-desc">
                    Moquizz is an application built entirely from scratch with ReactJs. 
                    This application is a musical app that's built focusing on the design.
                </p>
            </div>
            <div className="mo-list">
                {moquizzProds.map((item) => (
                     <Product 
                     key={item.id} 
                     img={item.img} 
                     link={item.link}/>
                ))} 
            </div>
        </div>
    )
}

export default MoList;