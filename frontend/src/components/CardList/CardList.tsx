import React from 'react'
import Card from '../Card/Card'

interface Props {

 }

const CardList: React.FC<Props> = (props: Props)=> {
    return (
        <div>
            <Card companyName="Bradesco"ticker="BR4D" price={48.32} />
            <Card companyName="Itaú"ticker="IT4U" price={56.32} />
            <Card companyName="Itausa"ticker="IT4S4" price={32.21} />
        </div>
    )
}

export default CardList