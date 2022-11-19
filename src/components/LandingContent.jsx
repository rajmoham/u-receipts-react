import React from "react";
import landing_img from '../assets/landingimg.svg'

function LandingContent() {
    return (
        <section id="landing">
            <div className="container">
                <div className="row">
                    <div className="landing__container">
                        <div className="landing__text">
                            <h1 className="landing__title">Welcome to <span className="text-green">U-Receipts</span></h1>
                            <h2 className="landing_subtitle">The <span className="text-green">clean</span> alternative to paper receipts</h2>
                        </div>
                        <div className="landing__img--wrapper">
                            <img src={landing_img} alt="" className="landing__img"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingContent