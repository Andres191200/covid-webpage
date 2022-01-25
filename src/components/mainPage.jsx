import {useState as UseState, useEffect as UseEffect} from 'react';

import '../styles/mainPage.css';

import Card from './card.jsx';
import Card2 from './card2.jsx';

const calculateTotalCases = (vaccinatedCases, nonVaccinatedCases) => {
    return vaccinatedCases + nonVaccinatedCases;
}

const calculateRecoveredCases = (totalCases, totalDeaths) =>{
    return totalCases - totalDeaths;
}


const mainPage = () => {
    const [totalCases, setTotalCases] = UseState();
    const [totalDeaths, setTotalDeaths] = UseState(1277127);
    const [vaccinatedCases, setVaccinatedCases] = UseState(8255121);
    const [nonVaccinatedCases, setNonVaccinatedCases] = UseState(17288192);
    const [recoveredCases, setRecoveredCases] = UseState(7255281);

    UseEffect(() =>{
        setTotalCases(calculateTotalCases(vaccinatedCases,nonVaccinatedCases));     
        
    },[vaccinatedCases,nonVaccinatedCases])

    // setRecoveredCases(calculateRecoveredCases(totalCases, totalDeaths));    //THIS GIVES ERROR

    return (
        <div className="main-div">
            <div className="cards-container">
                <Card cardNumber={'1'} percentage={64} title={'World vaccinated people'} />
                <Card cardNumber={'2'} percentage={86} title={'Argentina vaccinated people'} />
                <Card2 cardNumber={'4'} title={'Deaths'} totalDeaths={totalDeaths}/>
                <div className="card-main-div card-3">
                    <div className="card-3-info">
                        <h1>Total cases: {totalCases}</h1>
                    </div>

                    <div className="vaccinated">
                        <div><p>Vaccinated: {vaccinatedCases}</p></div>
                        <div><p>Non vacc: {nonVaccinatedCases}</p></div>
                        <div><p>Recovered: {recoveredCases}</p></div>
                    </div>

                    <div className="recovered">
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default mainPage;