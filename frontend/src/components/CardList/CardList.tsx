import React from 'react'
import Card from '../Card/Card'

interface Props g { }

const CardList = (props: Props) => {
    return (
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default CardList