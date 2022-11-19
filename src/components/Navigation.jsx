import React from "react";
import logo from '../assets/logo.png'

function Navigation() {
    return (
        <section id="nav">

            <nav>
                <div className="logo">
                    <img src={logo} alt="" className="logo__img" />
                </div>
                <ul className="nav__links">
                    <li className="nav__link nav__hover--effect"><a href="/">Home</a></li>
                    <li className="nav__link nav__hover--effect"><a href="#highlights">About Us</a></li>
                    <li className="nav__link nav__link--anchor"><a href="/">Sign up</a></li>
                </ul>
            </nav>
        </section>

    )
}

export default Navigation