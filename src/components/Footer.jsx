import React from "react";

function Footer(){
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <ul className="footer__links">
                        <li className="footer__link"><a href="/">Home</a></li>
                        <li className="footer__link"><a href="#highlights">About Us</a></li>
                        <li className="footer__link"><a href="/">GitHub</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer