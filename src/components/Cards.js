import React from 'react'
import Card from './Card.js'
const Cards = ({ dataItems }) => {
    return (
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            }
        }>
            {dataItems.map((item) => (
            <Card key={item.id.videoId} item={item}></Card>
        ))}
        </div>
     )
    }

export default Cards