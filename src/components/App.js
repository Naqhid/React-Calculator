import React from 'react';
import { calculate } from '../logic/calculate';
import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick = buttonValue => {
    const values = this.state;
    this.setState(calculate(values, buttonValue));
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <>
        <div className="App">
          <div className="content">
            <h1 className="title-app">Naqhid Calculator</h1>
            <Display total={total} operation={operation} next={next} />
            <ButtonPanel clickHandler={this.handleClick} />
          </div>
        </div>
      </>
    );
  }
}

export default App;
