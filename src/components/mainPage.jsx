import '../styles/mainPage.css';

import Card from './card.jsx';
import Card2 from './card2.jsx';

const mainPage = () =>{
    return(
        <div className="main-div">
            <div className="cards-container">
                <Card cardNumber={'1'} percentage={64} title={'World vaccinated people'}/>
                <Card cardNumber={'2'} percentage={86} title={'Argentina vaccinated people'}/>
                <Card2 cardNumber={'4'} title={'Deaths'}/>
                <div className="card-main-div card-3">
                    <div className="card-3-info">
                        <h1>Total cases: 0</h1>
                    </div>

                    <div className="grid-div">
                        <div><p>Vaccinated: 0</p></div>
                        <div><p>Non vaccinated: 0</p></div> 
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default mainPage;