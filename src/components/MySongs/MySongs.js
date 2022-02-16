import React, { useState } from 'react'
import './MySongs.css'

const MySongs = () => {
  const [toggleSongs, setToggleSongs] = useState(false);
  return (
    <>
      <div className='mySongs' onClick={()=>setToggleSongs(true)}>My Songs</div>
      {toggleSongs&&
        <div className='mySongs_list'>Lista piosenek</div>
      }
    </>
  )
}


export default MySongs
