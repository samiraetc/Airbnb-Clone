import React from 'react'
import './Guests.css';

import addGuests from '../../assets/images/icons/add-icon.png';
import removeGuests from '../../assets/images/icons/remove-icon.png';
function Guests() {
    return (
        <div className="guests">
            
            
            <div className="guests__info">

            <div className="guests__case">
                
                <div className="info">
                    <h1>Adultos</h1>
                    <p>13 anos ou mais</p>
                </div>
                <div className="buttons">
                    <button aria-label="remove guests"><img src={removeGuests} alt=""/></button>
                    <p>0</p>
                    <button aria-label="add guests"><img src={addGuests} alt=""/></button>
                </div>

            </div>

            <div className="guests__case">

                 <div className="info">
                    <h1>Crianças </h1>
                    <p>Idade 2 - 12</p>
                 </div>
                
                <div className="buttons">
                    <button aria-label="remove guests"><img src={removeGuests} alt=""/></button>
                    <p>0</p>
                    <button aria-label="add guests"><img src={addGuests} alt=""/></button>
                </div>
            </div>

            <div className="guests__case">
                <div className="info">
                    <h1>Bebês </h1>
                    <p>Menor de 2</p>
                </div>
                
                <div className="buttons">
                    <button aria-label="remove guests"><img src={removeGuests} alt=""/></button>
                    <p>0</p>
                    <button aria-label="add guests"><img src={addGuests} alt=""/></button>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Guests
