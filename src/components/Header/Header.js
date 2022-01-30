import React from "react";
import './header.scss';
import { ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
    return <div className="header-container">
        <Logo />
        <div className="nav-tabs">
            <p className="white">Buy</p>
            <p className="white">Bond</p>
            <p className="white">Stake</p>
            <p className="white">Learn</p>
        </div>
        <div className="enter-app-container">
            <p className="white">En</p>
            <div className="button-container purp-card">
                <p className="white16">
                    Enter app
                </p>
            </div>
        </div>
    </div>
}

export default Header;