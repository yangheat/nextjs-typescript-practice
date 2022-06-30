import { useState } from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  const [count, setCount] = useState(0);
  const onPlusButtonClick = () => setCount(current => current+1);
  const onMinusButtonClick = () => setCount(current => current-1);
  
  return (
    <div>
      <NavBar />
      <h1>{count}</h1>
      <button onClick={onPlusButtonClick}>+</button>
      <button onClick={onMinusButtonClick}>-</button>
    </div>
  );
}