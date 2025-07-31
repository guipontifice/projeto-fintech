import React from 'react'
import "./Card.css"

interface Props {
    companyName: string;
    ticker: string;
    price: number

}

const Card = ({ companyName, ticker, price }: Props) => {
    return (
        <div className="card">
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