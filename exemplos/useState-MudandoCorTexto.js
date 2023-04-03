import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [cor, setCor] = useState("black");
  

  return (
    <div className={styles.App}>
     
      <button onClick={() =>{
        setCor(cor === "black" ? "red" : "black");
      }}>BUTTON</button>
      <h1 style={{color: cor }}>Olá mundo!</h1>

    </div>
  );
}

export default App;
