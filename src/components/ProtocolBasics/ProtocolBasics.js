import React from "react";
import BasicsCard from "../BasicsCard/BasicsCard";
import './styles.scss';

const ProtocolBasics = () => {
    return <div className="container">
        <h3 className="medium-f30">Protocol Basics</h3>
        <div className="cards-container">
            <BasicsCard 
                title={'BASICS'}
                subtitle={'Supply'}
                desc={'New PHM is minted through bonding temporarily as the protocol bootstrapsfunds for the treasury.'}
            />
            <BasicsCard 
                title={'BASICS'}
                subtitle={'Supply'}
                isPurple
                desc={'New PHM is minted through bonding temporarily as the protocol bootstrapsfunds for the treasury.'}
            />
            <BasicsCard 
                title={'BASICS'}
                subtitle={'Supply'}
                desc={'New PHM is minted through bonding temporarily as the protocol bootstrapsfunds for the treasury.'}
            />
        </div>
    </div>
}

export default ProtocolBasics;