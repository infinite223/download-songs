import React from 'react'
import Card from './Card.js'
const Cards = ({ dataItems,Songs }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center",
            }
        }>
            {dataItems.map((item,i) => (
            <Card Songs={Songs} icon="+" key={item.id.videoId} number={i+1} item={item}></Card>
        ))}
        </div>
     )
    }

export default Cards