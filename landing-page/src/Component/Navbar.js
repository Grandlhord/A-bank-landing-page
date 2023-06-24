import React from "react";
import logo from '../images/logo.svg'

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} className="name-logo" alt="bank-logo" />
            <ul className="nav-list">
                <li className="nav-li"><a href="">Home</a></li>
                <li className="nav-li"><a href="">About</a></li>
                <li className="nav-li"><a href="">Contact</a></li>
                <li className="nav-li"><a href="">Blog</a></li>
                <li className="nav-li"><a href="">Careers</a></li>
            </ul>
            <button className="btn">Request Invite</button>
        </nav>
    )
}