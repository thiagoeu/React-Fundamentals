import "./App.css"
import {useState} from "react";

function App() {

  const [input, setInput] = useState("");

  const caputrarInput = (event) =>{
    setInput(event.target.value);
  }

  return (
    <div className="App">
      <input type = "text" onChange={caputrarInput}></input>
      {input}
    </div>
  );
}

export default App;
