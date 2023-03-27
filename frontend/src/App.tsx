import React from 'react';
import './App.css';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}> Go! </button>
      <br></br>
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <GoButton blahClick={() => setCount(count + 1)} />
      <AmountOfGo num={count} />
    </div>
  );
}

export default App;
