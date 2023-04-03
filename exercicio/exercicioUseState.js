import "./App.css"
import {useState} from "react";

function App() {
  const [countNumber, setCountNumber] = useState(0);

  return (
    <div className= "App" >
      <button 
      onClick={()=>{
        setCountNumber(countNumber+1)
      }}> somar </button>

      <button onClick={()=>{
        setCountNumber(countNumber-1)
      }}> 
      diminuir </button>
      
      <button onClick={()=>{
        setCountNumber(0)
      }}> Set to 0 </button>
      
      {countNumber}


    </div>
  );
}

export default App;
