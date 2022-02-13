import { useState,useEffect } from 'react';
import './App.css';
import Card from './components/Card.js'

function App() {  

    return (
    <div className="App">
      {Array(5).fill().map((x, i) => 
        <Card
          key={i}
          number={i}
        />    
      )}           
    </div>
  );  
}

export default App;
