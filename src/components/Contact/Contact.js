import React, { useRef, useContext} from "react";
import phone from '../../assets/images/phone1.png';
import email from '../../assets/images/email.png';
import address from '../../assets/images/address.png';
import { ThemeContext } from '../../Context';

import './Contact.css';

const Contact = ( props ) => {
    const formRef = useRef();
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSummit = (e) => {
        e.preventDefault();
        alert('Sorry the service is unavailable at the moment!! Please Kindly send a mail to nwaforjerrymiah123@gmail.com')
    }

    return(
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project!</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={phone} 
                            className="c-icon" 
                            alt="pic"/>
                            +234 9132479118
                        </div>
                        <div className="c-info-item">
                            <img src={email} 
                            className="c-icon" 
                            alt="pic"/>
                            Nwaforjerrymiah123@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img src={address} 
                            className="c-icon" 
                            alt="pic"/>
                            14 Joe Vincent drive satellite town, Lagos Nigeria. 
                        </div>
                    </div>
                </div>

                <div className="c-right">
                    <p className="c-desc">
                        <b>What's your story?</b> Get in touch. Always 
                            available for freelancing if the right project comes along me.
                    </p>
                    <form ref={formRef} onSubmit={handleSummit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Name" name="user_name"/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows="5"  placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;