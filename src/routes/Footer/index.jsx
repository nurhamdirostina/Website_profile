import React from 'react';
import { Layout } from 'antd';

import './style.css';

const { Footer } = Layout;

function Last(){
    return (
        <Footer className="footer">
            <div>
                <h1 className="hire__text">Contact </h1>
                <p className="hire__text white">Connect with me via phone:</p>
                <p className="hire__text white"><strong>+6285797328386</strong> or email<a href="https://mail.google.com/mail/u/0/#inbox" className="footerLink"><strong> nurhamdirostina@gmail.com</strong></a></p>
            </div>
            <div className="sosmed">
            <a href="https://www.linkedin.com/in/nurhamdi-rostina-b97453241" className="footerLink">
                <img src="https://nurhamdirostina.github.io/Website_profile/linkedin.png" alt="icon" />
            </a>
            <a href="https://github.com/nurhamdirostina/Website_profile" className="footerLink">
                <img src="https://nurhamdirostina.github.io/Website_profile/github.png" alt="icon" />
            </a>
            <a href="https://www.instagram.com/nrhmdi_rst" className="footerLink">
                <img src="https://nurhamdirostina.github.io/Website_profile/instagram.png" alt="icon" />
            </a>
            <span className="copyright"> Copyright ©2022 Created by Nurhamdi Rostina.</span>
            </div>
            
        </Footer>
    );
}

export default Last;

// align__items__center justify__content__space__between pz-10