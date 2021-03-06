import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.js'
import {getData} from './components/DataApi/DataApi'

import MySongs from './components/MySongs/MySongs.js'
function App() {  
  const [dataItems,setDataItems] = useState([]);
  const [mySongs,setMySongs] = useState([]);
  const [param, setParam] = useState()
  useEffect(()=>{
      getData(param?param:"see")
      .then((data)=>
      setDataItems(data)    
    )    
  },[param])

  const AddSong = (item) =>{
    var found = mySongs.find(function (element) {
      return element === item;
    });
    if(found==undefined)setMySongs([...mySongs,item])
  }
  const DeleteSong = (item) =>{
    setMySongs(mySongs.filter((e)=>(e !== item)));                  
  }
  console.log(mySongs);
    return (
     <div>
       <div className="App">
       <MySongs mySongs={mySongs} deleteSong={DeleteSong} />
         <input placeholder='Search song' type="text" onChange={(q)=>setParam(q.target.value)}/>
         <Cards dataItems={dataItems} Songs={AddSong}/> 
         
       </div>
     </div> 
  );  
}

export default App;
