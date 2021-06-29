import '../App.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function App() {
  const result = '0';
  return (
    <>
      <div className="App">
        <div className="content">
          <h1 className="title-app">Welcome To My Calculator</h1>
          <Display result={result} />
          <ButtonPanel />
        </div>
      </div>
    </>
  );
}

export default App;
