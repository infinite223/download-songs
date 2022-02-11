import './App.css';
import Card from './components/Card.js'
import DataApi from './components/DataApi/DataApi'

function App() {
  const data = DataApi[0].items[0].snippet; 
  console.log(DataApi[0].items[0].snippet);
  return (
    <div className="App">
      <Card channelTitle={data.channelTitle}/>
    </div>
  );
}

export default App;
