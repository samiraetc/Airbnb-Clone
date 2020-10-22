import React from 'react'
import { Button } from '@material-ui/core'

import './Search.css'
import SearchIcon from '@material-ui/icons/Search';
import Guests from '../Guests/Guests';
import SearchLocation from '../SearchLocation/SearchLocation';

function ChangeStateLocation() {
    var display = document.getElementById('searchlocation').style.display;
    if(display === "none")
        document.getElementById('searchlocation').style.display = 'block';
    else
        document.getElementById('searchlocation').style.display = 'none';
}

function ChangeStateGuests() {
    var display = document.getElementById('guests').style.display;
    if(display === "none")
        document.getElementById('guests').style.display = 'block';
    else
        document.getElementById('guests').style.display = 'none';
}



function Search () {   
    return (
        <div className="search">
                <div className="search__form">
                    <label className="search__label"> Localização
                        <input type="text" placeholder="Pra onde você vai?" onClick={ChangeStateLocation}/>

                        <div id="searchlocation" style={{ display: `none` }}>
                            <SearchLocation />
                        </div>
  
                    </label>

                    <label className="search__label"> Check-in
                        <input type="text" placeholder="Insira as datas"/>
                    </label>

                    <label className="search__label">Checkout
                        <input type="text" placeholder="Insira as datas"/>
                    </label>

                    <label className="search__label"  > Hóspedes 
                    <input type="text" placeholder="Insira o número..." onClick={ChangeStateGuests}/>  
                    <div id="guests" style={{ display: `none` }}>
                            <Guests />
                    </div>   
                    </label>
                    <Button><SearchIcon className="search__icon" /></Button>
                  
                </div>

               

            </div>
    )
}

export default Search
