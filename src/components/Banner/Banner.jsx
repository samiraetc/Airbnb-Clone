import React from 'react'
import './Banner.css'
import { Button } from '@material-ui/core'


function Banner() {
    return (
        
        <div className="banner">
            <div className="banner__info">
                <h1>Saia e dê asas à sua imaginação</h1>
                <p>Faça uma viagem diferente e descubra as maravilhas perto de você.</p>
                
                <Button variant="outlined">Explore os arredores</Button>
            </div>

           
        </div>
    )
}

export default Banner
