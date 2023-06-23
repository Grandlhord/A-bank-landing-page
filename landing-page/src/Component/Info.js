import React from "react";
import online from '../images/icon-online.svg'
import budgeting from '../images/icon-budgeting.svg'
import onboard from '../images/icon-onboarding.svg'
import api from '../images/icon-api.svg'

export default function Info (){
    return(
        <section className="info"> 
            <div className="question">
                <h2 className="heading">Why choose Easybank</h2>
                <p className="why">We leverage Open Banking to turn your bank account into your financial hub
                    Control your financies like never before
                </p>
            </div>
            <div className="info-block">
            <div className="information">
                <img src={online}  alt="online banking"/>
                <h5>Online Banking</h5>
                <p className="info-passage">Our modern web and mobile applications allow you to
                    keep track of your financies wherever you are in the 
                    world
                </p>
            </div> 
            <div className="information">
            <img src={budgeting}  alt="simple-budgeting"/>
                <h5>Simple budgeting</h5>
                <p className="info-passage">See exactly where your money goes each month. Receive notification
                    when you're close to hitting your limits
                </p>
            </div>
            <div className="information">
            <img src={onboard}  alt="fast onboarding"/>
                <h5>Fast Onbaording</h5>
                <p className="info-passage">We don't do branches. Open your account in minutes and start
                    taking control of your financies right away.
                </p>
            </div>
            <div className="information">
            <img src={api}  alt="open-api"/>
                <h5>Open API</h5>
                <p className="info-passage">Manage your savings, investments, pension, and much more from
                    one account. Tracking your money has never been easier
                </p>
            </div>
            </div>
           
        </section>

    )
}