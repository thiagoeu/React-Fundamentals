import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [showText, setShowText] = useState(false)
  
  const hide = () =>{
    setShowText(!showText)
  }
  
  return (
    <div className={styles.App}>
      
      <button onClick={hide}>SHOW TEXT</button>
      
      {showText === true && <h1>SOU EU, MIZERAVEL</h1>}
      
    </div>
  );
}

export default App;
