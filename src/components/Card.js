import React,{useState, useEffect} from 'react'
import './Card.css'
import{ useSpring, animated } from '@react-spring/web'

const  Card = ({ item, number,Songs, icon }) => {   
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 400 },
  })    
          
  return (
    <>
      {item.snippet!==undefined&&
       <animated.div className='card' onClick={()=>(Songs(item),toggle(!state))}
       style={{   
        scale: x.to({
          range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
          output: [1,0.9, 0.8, 0.7, 0.9, 0.95, 1],
        }),
        opacity:x.to({
          range:[0,0.2,0.5,0.7,1],
          output:[1,0.5,0.2,0.5,1],          
        })
      }}
       >
          <div className='card_plus'>
            {icon}
          </div>
          <div className='card__number'>{number}</div>
          <h3 style={{marginTop:"-30px"}}>{item.snippet.channelTitle.length<10?item.snippet.channelTitle:`${item.snippet.channelTitle.substring(0, 15)}...`}</h3>
          <img className="secend_img" src={item.snippet.thumbnails.default.url}/>
          <p>{item.snippet.title.length<60?item.snippet.title:`${item.snippet.title.substring(0, 25)}...`}</p>
      </animated.div>
      }
    </>

  ) 
}     

export default Card