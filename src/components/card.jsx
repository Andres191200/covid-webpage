import { useEffect } from 'react';
import '../styles/card.css';




const Card = ({ cardNumber, percentage }) => {

    (function() {
        window.onload = function() {
        var totalProgress, progress;
            const circles = document.querySelectorAll('.progress');
            for(var i = 0; i < circles.length; i++) {
                totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
                progress = circles[i].parentElement.getAttribute('data-percent');
    
                circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;
          
            }
        }
    })();

    return (
        <div className={`card-main-div card-${cardNumber}`}>

            <div class="progressdiv" data-percent={percentage}>
                <svg class="progress" width="178" height="178" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <circle r="80" cx="89" cy="89" fill="transparent" stroke-dasharray="502.4" stroke-dashoffset="0" ></circle>
                    <circle class="bar" r="80" cx="89" cy="89" fill="transparent" stroke-dasharray="502.4" stroke-dashoffset="0"></circle>
                </svg></div>


        </div>
    )
}

export default Card;