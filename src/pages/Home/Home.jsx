import React from 'react'
import './Home.css';

import Banner from '../../components/Banner/Banner';
import HomeCard from '../../components/HomeCard/HomeCard';

import Card from '../../assets/images/card1.png'
import Card1 from '../../assets/images/card2.png'
import Card2 from '../../assets/images/card3.png'

function Home() {
    return (
        <div className="home">
        <Banner /> 
        <div className="home__cards" >
        <HomeCard 
        src={Card}
        title={"Experiências online"}
        description={"Atividades únicas que podemos fazer juntos, lideradas por um mundo de anfitriões"} />
        <HomeCard 
        src={Card1}
        title={"Acomodações únicas"}
        description={"Espaços que são mais do que apenas um lugar para dormir."}/>
        <HomeCard 
        src={Card2}
        title={"Casas inteiras"}
        description={"Lugares privativos e confortáveis com espaço para os amigos ou familia."}/>
        </div>
        
        </div>
    )
}

export default Home
