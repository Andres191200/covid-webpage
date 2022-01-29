import { useEffect, useState } from 'react';
import '../styles/card.css';

import Country from './country.jsx';

const countryRankingBasedOnDeaths = ([]) => {
    //SORT COUNTRIES
}

const calculateTotalDeaths = (totalDeaths, countries) => {
    countries.forEach(country => {
        totalDeaths += parseInt(country.deaths);
    })
    return totalDeaths;
}


const Card = ({ cardNumber, title, setTotalDeaths }) => {

    var totalDeaths = 0;

    const countries = [
        {
            name: 'Argentina',
            deaths: '1513'
        },
        {
            name: 'Spain',
            deaths: '1242'
        },
        {
            name: 'USA',
            deaths: '2194'
        },
        {
            name: 'Poland',
            deaths: '932'
        },
        {
            name: 'Russia',
            deaths: '2088'
        },
        {
            name: 'Brazil',
            deaths: '1558'
        },
    ]

    return (
        <div className={`card-main-div card-${cardNumber}`}>
            <div className="data-title">
                <span>{title}</span>
            </div>
            <div className="info-container death-info">
                <div className="total-deaths">
                    <span>Total deaths:
                        <h1>
                            {
                                calculateTotalDeaths(totalDeaths, countries)
                            }
                        </h1>
                    </span>
                </div>
                <div className="deaths-per-country">

                    {console.log('TOTAL ' + totalDeaths)}

                    <Country deaths={countries[0].deaths} name={countries[0].name} />
                    <Country deaths={countries[1].deaths} name={countries[1].name} />
                    <Country deaths={countries[2].deaths} name={countries[2].name} />             
                    <Country deaths={countries[3].deaths} name={countries[3].name} />
                    <Country deaths={countries[4].deaths} name={countries[4].name} />
                    <Country deaths={countries[5].deaths} name={countries[5].name} />
                    
                </div>
            </div>
        </div>
    )
}

export default Card;