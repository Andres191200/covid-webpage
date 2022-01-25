import { useEffect } from 'react';
import '../styles/card.css';

import Country from './country.jsx';

const countryRankingBasedOnDeaths = ([]) =>{
    //SORT COUNTRIES
}


const Card = ({ cardNumber, title, totalDeaths }) => {
    return (
        <div className={`card-main-div card-${cardNumber}`}>
            <div className="data-title">
                <span>{title}</span>
            </div>
            <div className="info-container death-info">
                <div className="total-deaths">
                    <span>Total deaths: <h1>{totalDeaths}</h1></span>
                </div>
                <div className="deaths-per-country">
                    <Country deaths={141} name={'Argentina'}/>
                    <Country deaths={141} name={'Spain'}/>
                    <Country deaths={141} name={'USA'}/>
                    <Country deaths={141} name={'UK'}/>
                    <Country deaths={141} name={'Russia'}/>
                    <Country deaths={141} name={'Tunez'}/>
                    <Country deaths={141} name={'Denmark'}/>
                    <Country deaths={141} name={'Poland'}/>
                </div>
            </div>
        </div>
    )
}

export default Card;