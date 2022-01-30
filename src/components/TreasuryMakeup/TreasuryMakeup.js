import React from "react";
import './treasury.scss'

const Allocation = ({value, allocatedTo, addSeparator}) => {
    return (<div className={"allocation-container "+(addSeparator?"separator":"")}>
        <h1>
            {value}
        </h1>
        <p className="allocated-to">{allocatedTo}</p>
    </div>);
}

const TreasuryMakeup = () => {
    return (<div className="makeup-container">
        <h3>Treasury Makeup</h3>
        <div className="allocations">
            <Allocation value={'50%'} allocatedTo={'Stable Assets'}/> 
            <Allocation value={'33%'} allocatedTo={'Accelerator'} addSeparator/> 
            <Allocation value={'17%'} allocatedTo={'Fantom Governance'}/> 
        </div>
    </div>);
}

export default TreasuryMakeup;