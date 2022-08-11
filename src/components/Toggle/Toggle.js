import React, { useContext } from "react";
import sun from '../../assets/images/sun.png';
import moon from '../../assets/images/moon.png'; 

import './Toggle.css';
import { ThemeContext } from "../../Context";

const Toggle = ( props ) => {
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"});
    }
    return(
        <div className="t">
            <img src={sun} className="t-icon" alt="ima"/>
            <img src={moon} className="t-icon" alt="ima"/>
            <div 
            className="t-button" 
            onClick={handleClick} 
            style={{left: theme.state.darkMode ? 0 : 25}}></div>
        </div>
    )
}

export default Toggle;