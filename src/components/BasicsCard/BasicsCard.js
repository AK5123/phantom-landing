import React from "react";
import './styles.scss';
import { ReactComponent as  ArrowRight} from '../../assets/arrow-right.svg'
import { ReactComponent as  Waves} from '../../assets/waves.svg'


const BasicsCard = ({title, subtitle, desc, isPurple}) => {
    return <div className={isPurple? "purple-container" : "card-container"}>
        <div className="content">
            <p>{title}</p>
            <h3>{subtitle}</h3>
            <p>{desc}</p>
        </div>
        <div className="learn-container">
            <h4>Learn more</h4>
            <ArrowRight />
        </div>
        <div className="waves-container">
            <Waves /> 
        </div>
    </div>
}

export default BasicsCard;