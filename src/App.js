import { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';

function App() {

  const [resultAll, setResultsAll] = useState([]);
  const [resultLet, setResultsLet] = useState([]);
  const [resultNum, setResultsNum] = useState([]);



  const addResult = (userInput) => {

    const countFunction = (res, setResult) => {
      let counter = 1;
      for (const i in res) {
        if (res[i].result === userInput) {
          counter++;
        }
      }
      const newItem = {
        result: userInput,
        count: counter
      }
      setResult([...res, newItem])
    }

    if (/^[A-Za-zА-яа-я]*$/.test(userInput)) {

      countFunction(resultLet, setResultsLet);

    } else if (/^[\d]*$/.test(userInput)) {

      countFunction(resultNum, setResultsNum);

    } else if (/^[A-Za-zА-яа-я0-9]*$/.test(userInput)) {

      countFunction(resultAll, setResultsAll);

    }
  }

  return (
    <div className="App">
      <header>
        <h1>Test</h1>
      </header>
      <div className="grid">
        <div className="grid__box grid__box_white">
          <InputForm addResult={addResult} />
        </div>
        <div className="grid__box grid__box_red">

          {resultLet.map((result) => {
            return (
              <Result
                results={result}
              />
            )
          })}

        </div>
        <div className="grid__box grid__box_blue">
          {resultNum.map((result) => {
            return (
              <Result
                results={result}
              />
            )
          })}
        </div>
        <div className="grid__box grid__box_black">
          {resultAll.map((result) => {
            return (
              <Result
                results={result}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;