import React from 'react'
import './HomeCard.css'

const HomeCard = ({src, title, description,}) => {
    return (
        <div className="homecard">
                <img src={src} alt=""/>
                <div className="homecard__info">
                    <h2>{title}</h2>
                     <p> {description}</p>
                </div>
        </div>
    )
}

export default HomeCard
