import React from "react";
import portPic1 from "../../assets/images/portfolio1.jpg";

import './Intro.css';

const Intro = ( props ) => {
    return(
        <div className="Intro">
            <div className="Intro-left">
                <div className="Intro-left-wrap">
                    <h2 className="Intro-intro">Hi, My name is</h2>
                    <h1 className="Intro-name">Nwafor Jeremiah</h1>
                    <div className="Intro-title">
                        <div className="Intro-title-wrap">
                            <div className="Intro-title-item">Web Developer</div>
                            <div className="Intro-title-item">ReactJS</div>
                            <div className="Intro-title-item">NodeJS</div>
                            <div className="Intro-title-item">Full-Stack</div>
                            <div className="Intro-title-item">Content Creator</div>
                        </div>
                    </div>
                    <div className="Intro-desc">
                    I am a full stack web developer with experience in building web application for small, medium and large sized businesses.
                    I’m experienced in NODE.JS, REACT.JS, HTML, CSS and vanilla Javascript,
                    Regular communication is really important to me, so let’s keep in touch!
                    </div>
                </div>
            </div>
            <div className="Intro-right">
                <div className="Intro-bg"></div>
                <img src={portPic1} className="Intro-img" alt="pic"/>
            </div>
        </div>
    )
}

export default Intro;