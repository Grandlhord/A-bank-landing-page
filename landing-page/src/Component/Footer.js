import React from "react";
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import ig from '../images/icon-instagram.svg'
import banklogo from '../images/logo.svg'

export default function Footer (){
        return (
            <footer>
                <div className="company-social">
                    <img src={banklogo} className="blogo" alt="bank-log"/>
                    <div className="socials">
                        <img src={facebook} className="soc" alt="facebook"/>
                        <img src={youtube} className="soc"alt="youtube"/>
                        <img src={twitter}className="soc" alt="twitter"/>
                        <img src={pinterest}className="soc" alt="pinterest"/>
                        <img src={ig} className="soc" alt="instagram"/>
                    </div>
                </div>
                <div className="webpages">
                    <div className="ACB">
                        <ul className="footer-pages">
                         <li>About Us</li>
                         <li>Contact</li>
                         <li>Blog</li>
                        </ul>
                    </div>
                    <div className="CSR">
                        <ul>
                         <li>Careers</li>
                         <li>Support</li>
                         <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>
                <div className="invite-copyright">
                    <button className="btn">Request Invite</button>
                    <p className="copyright">Easybank. All Rights Reserved</p>
                </div>
            </footer>
        )
}