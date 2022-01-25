import { useEffect } from 'react';
import '../styles/card.css';




const Card = ({ cardNumber, title }) => {
    return (
        <div className={`card-main-div card-${cardNumber}`}>
            <div className="data-title">
                <span>{title}</span>
            </div>
            <div className="info-container death-info">
                
            </div>
        </div>
    )
}

export default Card;