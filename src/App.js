import React from 'react';
import './index.scss';

function App() {
  const [count, setCount] = React.useState(0);
  const onClickPlus = () => {
    setCount(count + 1)
  }

  const onClickMinus = () => {
    setCount(count - 1)
  }

  const onClickReset = () => {
    setCount(0)
  }



  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} onKeyDown={onClickMinus} className="minus">- Минус</button>
        <button onClick={onClickPlus} className="plus">Плюс +</button>
        <button onClick={onClickReset} className="reset">Сброс 0</button>
      </div>
    </div>
  );
}

export default App;
