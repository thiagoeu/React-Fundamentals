import styles from "./App.module.css";
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  const acrescimo = () =>{
    setCount(count+1);
  }
  const diminuir = () =>{
    setCount(count-1);
  }
  
  return (
    <div className={styles.App}>
      {count}
      <button onClick={acrescimo}>Somar</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
}

export default App;
