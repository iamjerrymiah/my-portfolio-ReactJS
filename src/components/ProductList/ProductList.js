import React from "react";
import Product from "../Product/Product";
import { products } from "../../data";

import './ProductList.css';

const ProductList = ( props ) => {
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Burger Builder</h1>
                <p className="pl-desc">
                   A burger builder built entirely from scratch with ReactJs. 
                   This web application allows one to build a tasty burger from anywhere and make an order according to their taste.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                     <Product 
                     key={item.id} 
                     img={item.img} 
                     link={item.link}/>
                ))} 
            </div>
        </div>
    )
}

export default ProductList;