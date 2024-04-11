import React from 'react';
import './index.scss';

function App() {
  const [count, setCount] = React.useState(1);

  const onClickPlus = () => {
    setCount(count + 1);
  }
  const onClickMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
        <button onClick={onClickMinus} className="minus">- Минус</button>
      </div>
    </div>
  );
}

export default App;
