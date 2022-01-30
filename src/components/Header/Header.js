import React from "react";
import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
    return <div className="header-container">
        <Logo />
        <div className="nav-tabs">
            <h3>Buy</h3>
            <h3>Bond</h3>
            <h3>Stake</h3>
            <h3>Learn</h3>
        </div>
        <div className="enter-app-container">
            <h3>En</h3>
            <div className="button-container">
                <p className="button-text">
                    Enter app
                </p>
            </div>
        </div>
    </div>
}

export default Header;