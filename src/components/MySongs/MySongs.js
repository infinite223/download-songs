import React, { useState } from 'react'
import './MySongs.css'
import Card from '../Card';
const MySongs = ({ mySongs, deleteSong }) => {
  const [toggleSongs, setToggleSongs] = useState(false);
  return (
    <>
      <div className='mySongs' onClick={()=>setToggleSongs(true)}>My Songs</div>
      {toggleSongs&&
        <div className='mySongs_list'>
          <div className='mySongs_list_title'>
            <h2>Lista dodanych piosenek...</h2>
            <text onClick={()=>setToggleSongs(false)}>Close</text>
          </div>
          <div className='mySongs_list_songs'>
            {mySongs.map((item,i) => (
              <Card addSong={deleteSong} key={item.id.videoId} number={i+1} item={item}></Card>
            ))}
           </div>
        </div>
      }
    </>
  )
}


export default MySongs
