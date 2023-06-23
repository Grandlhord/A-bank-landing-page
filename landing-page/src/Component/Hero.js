import React from "react";
import bg from '../images/bg-intro-desktop.svg'

import bg2 from '../images/image-mockups.png'

export default function Hero(){
    return(
        <section className="hero">
            <div className="hero-text">
                <h3 className="text">
                    Next generation digital banking
                </h3>
                <p className="passage">
                    Take your financial life online. Your Easybank
                    account will be a one-stop-shop for spending,saving,
                    budgeting, investing and much more
                </p>
                <button className="btn">Request Invite</button>
            </div>
                <div className="hero-img">
                    <img src={bg} className="background-hero" alt="hero-background" />
                    <img src= {bg2} className="hero-image" alt="hero-image" />
                </div>
            
        </section>
    )
}