import React from "react";
import portPic2 from "../../assets/images/portfolio2.png";

import './About.css';

const About = ( props ) => {
    return(
        <div className="a">
            <div className="a-left">
            <div className="a-card bg"></div>
                <div className="a-card">
                <img 
                src="https://source.unsplash.com/1600x1900?male,portrait" 
                className="a-img" 
                alt="pic"/>
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    I am a graduate in software engineering. So I have gained all the basic knowledge from my study. 
                    That's why I know many works related to web development before entering into this business.
                </p>
                <p className="a-desc">
                    I have always satisfied my past clients with my works. That's why all of them give me a five-star rating 
                    which of course is a huge achievement for me. They also recommended me for web programming projects. 
                    I have always meet deadlines. Never hesitate to make the best use of my skill and knowledge in order to complete a project successfully.
                </p>
                <div className="a-award">
                    <img src={portPic2} className="a-award-img" alt="awrd"/>
                    <div className="a-award-texts">
                        <h4 className="a-award-title">Javascript Certification</h4>
                            <div className="a-award-desc">
                                Certified as a well knowledged Javascript developer. Well versed in ReactJs, NodeJS and Vanilla Javascript.
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;