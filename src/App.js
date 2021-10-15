import { useState } from 'react';
import InputForm from './InputForm';
import Result from './Result';

function App() {

  const [resultAll, setResultsAll] = useState([]);
  const [resultLet, setResultsLet] = useState([]);
  const [resultNum, setResultsNum] = useState([]);

  let resultLetOut = {};
  let resultNumOut = {};
  let resultAllOut = {};


  const addResult = (userInput) => {

    const countFunction = (res, setResult) => {

      const newItem = userInput;

      setResult([...res, newItem])
    }

    if (/^[A-Za-zА-ЯЁа-яё]*$/.test(userInput)) {

      countFunction(resultLet, setResultsLet);

    } else if (/^[\d]*$/.test(userInput)) {

      countFunction(resultNum, setResultsNum);

    } else if (/^[\w\W]*$/.test(userInput)) {

      countFunction(resultAll, setResultsAll);

    }
  }

  const outPut = (res, result) => {

    for (var i = 0; i < res.length; ++i) {
      var a = res[i];
      if (result[a] !== undefined) {
        ++result[a];
      }
      else { result[a] = 1; }
    }
    let z = [];
    for (var keys in result) {
      z.push(keys + ":" + result[keys]);

    }
    console.log(z);
    return z.map((item) => {
      return (<Result
        results={item}
        key={Math.random().toString(36).substr(2, 9)}
      />);
    })
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

          {outPut(resultLet, resultLetOut)}

        </div>
        <div className="grid__box grid__box_blue">

          {outPut(resultNum, resultNumOut)}
        </div>
        <div className="grid__box grid__box_black">

          {outPut(resultAll, resultAllOut)}

        </div>
      </div>
    </div>
  );
}

export default App;