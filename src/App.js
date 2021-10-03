import { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';

function App() {

  const [resultAll, setResultsAll] = useState([]);
  const [resultLet, setResultsLet] = useState([]);
  const [resultNum, setResultsNum] = useState([]);



  const addResult = (userInput) => {
    if (/^[A-Za-zА-яа-я]*$/.test(userInput)) {
      const newItemLet = {
        id: Math.random().toString(36).substr(2, 9),
        result: userInput,

      }
      setResultsLet([...resultLet, newItemLet])
    } else if (/^[\d]*$/.test(userInput)) {
      const newItemNum = {
        id: Math.random().toString(36).substr(2, 9),
        result: userInput,

      }
      setResultsNum([...resultNum, newItemNum])
    } else if (/^[A-Za-zА-яа-я0-9]*$/.test(userInput)) {
      const newItemAll = {
        id: Math.random().toString(36).substr(2, 9),
        result: userInput,

      }
      setResultsAll([...resultAll, newItemAll])
      const arrCount = []
      for (var i of resultAll) {
        if (arrCount.indexOf(i) === -1) {
          arrCount.push(i)
        }
      }
      for (var x of arrCount) {
        let count = 0;
        for (i of resultAll) {
          if (i === x) { count++; }
        }
        resultAll.push(`${x} : ${count}`);
      }

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
                result={result}
                key={result.id}
              />
            )
          })}

        </div>
        <div className="grid__box grid__box_blue">
          {resultNum.map((result) => {
            return (
              <Result
                result={result}
                key={result.id}
              />
            )
          })}
        </div>
        <div className="grid__box grid__box_black">
          {resultAll.map((result) => {
            return (
              <Result
                result={result}
                key={result.id}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;