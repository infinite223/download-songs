import React from 'react'
import Card from './Card.js'
const Cards = ({ dataItems }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            }
        }>
            {dataItems.map((item,i) => (
            <Card key={item.id.videoId} number={i+1} item={item}></Card>
        ))}
        </div>
     )
    }

export default Cards