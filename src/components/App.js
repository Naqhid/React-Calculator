import { useState } from 'react';
import { calculate } from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const [total, setTotal] = useState('0');
  const [operation, setOperation] = useState('');
  const [next, setNext] = useState('');
  const updateDisplay = (buttonValue) => {
    const nValues = calculate({ total, operation, next }, buttonValue);
    setTotal(nValues.total);
    setOperation(nValues.operation);
    setNext(nValues.next);
  };

  return (
    <>
      <div className="App">
        <div className="content">
          <h1 className="title-app">Naqhid Calculator</h1>
          <Display total={total} operation={operation} next={next} />
          <ButtonPanel updateDisplay={updateDisplay} />
        </div>
      </div>
    </>
  );
}

export default App;
