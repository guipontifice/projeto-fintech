import React from 'react'
import "./Card.css"

interface Props  {
    companyName: string;
    ticker: string;
    price: number
    
}

const Card = ({ companyName, ticker, price}: Props) => {
    return (
        <div className="card">
            <img
                src="https://unsplash.com/pt-br/fotografias/as-flores-de-cerejeira-florescem-vibrantemente-contra-um-ceu-azul-N_yJGWotRaE"
                alt="Imagem aleatória"
            />
            <Card companyName="Bradesco"ticker="BR4D" price={48.32} />
            <Card companyName="Itaú"ticker="IT4U" price={56.32} />
            <Card companyName="Itausa"ticker="IT4S4" price={32.21} />
            <div className="details">
                <h2>{companyName}</h2>
                <p>{ticker}</p>
                <p>{price}</p>
            </div>
            <div className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, provident!</div>
        </div>
    )
}

export default Card