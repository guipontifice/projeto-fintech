import React from 'react'
import "./Card.css"

type Props = {}

const Card = (props: Props) => {
    return (
        <div className="card">
            <img
                src="https://unsplash.com/pt-br/fotografias/as-flores-de-cerejeira-florescem-vibrantemente-contra-um-ceu-azul-N_yJGWotRaE"
                alt="Image"
            />
            <div className="details">
                <h2>IT4USA</h2>
                <p>$110</p>
            </div>
            <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident!</div>
        </div>
    )
}

export default Card