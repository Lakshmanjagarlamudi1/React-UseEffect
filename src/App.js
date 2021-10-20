import "./styles.css";
import { useState, useEffect } from "react";
import Button from "./Button";

export default function App() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(count >= 7 && count <= 10);
  }, [count]);

  const handlerOnIncreaseCount = () => {
    setCount(count + 1);
  };
  const handlerOnDecreaseCount = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="main">
      <h3>Count: {count}</h3>
      <h4>Make count to 7 to show the message</h4>
      <div className="button-container">
        <Button label="Increase Count" onPress={handlerOnIncreaseCount} />
        <Button label="Decrease Count" onPress={handlerOnDecreaseCount} />
      </div>
      {showMessage && <div>Hi, We're showing the message</div>}
    </div>
  );
}
