import React from 'react'
import './SearchLocation.css'

import Maps from '../../assets/images/icons/map.png'

function SearchLocation() {
    return (
        <div className="searchlocation">
            
            
        <div className="searchlocation__info">

        <div className="searchlocation__case">
            <div className="images">
                <img src={Maps} alt=""/>
            </div>

            <div className="searchlocation__city">
                <h1>Belo Horizonte - MG</h1>
            </div>

        </div>

        <div className="searchlocation__case">  
            <div className="images">
                    <img src={Maps} alt=""/>
                </div>
            <div className="searchlocation__city">
                <h1>Uberlandia - MG</h1>
            </div>
        </div>

        <div className="searchlocation__case">
            <div className="images">
                <img src={Maps} alt=""/>
            </div>  
            <div className="searchlocation__city">
                <h1>Poços de Caldas - MG</h1>
            </div>
        </div>

        <div className="searchlocation__case">
            <div className="images">
                <img src={Maps} alt=""/>
            </div>  
            <div className="searchlocation__city">
                <h1>Capinopolis - MG</h1>
            </div>
        </div>

        <div className="searchlocation__case">
            <div className="images">
                <img src={Maps} alt=""/>
            </div>  
            <div className="searchlocation__city">
                <h1>Ituiutaba - MG</h1>
            </div>
        </div>

      

        </div>
    </div>
    )
}

export default SearchLocation
