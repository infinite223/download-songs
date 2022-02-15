import { useState,useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.js'
import {getData} from './components/DataApi/DataApi'
import MySongs from './components/MySongs/MySongs.js'
function App() {  
  const [dataItems,setDataItems] = useState([]);
  const [param, setParam] = useState()
  useEffect(()=>{
      getData(param?param:"see")
      .then((data)=>
      setDataItems(data)    
    )    
  },[param])
  console.log(param)
  //lepszy search
    return (
     <div>
       <div className="App">
       <MySongs/>
         <input placeholder='Search' type="text" onChange={(q)=>setParam(q.target.value)}/>
        <Cards dataItems={dataItems}/> 
       </div>
     </div> 
  );  
}

export default App;
