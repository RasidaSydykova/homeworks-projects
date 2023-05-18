import React, {useState} from 'react';
import Number from "./Number/Number";
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState({
    number: [5, 11, 16, 23, 32]
  });
    const changeNumbers = () => {
      let array = [];
      while(array.length < 5) {
        let range= Math.floor(Math.random() * (36 - 5) + 5);
        if(array.indexOf(range) === -1) array.push(range);
        let unique = true;
        for(let i = 5; i < 36; i++) {
          if(range === array[i]) {
            unique = false;
          } else if (!unique) {
            array.push(range);
          }
        }
      }

      array.sort((a, b) => a - b);
      setNumbers({number: array});
    };

  return (
    <div className="App">
      <div onClick={changeNumbers}>
        <button className="change-button">New numbers</button>
      </div>
      <Number number={numbers.number[0]}/>
      <Number number={numbers.number[1]}/>
      <Number number={numbers.number[2]}/>
      <Number number={numbers.number[3]}/>
      <Number number={numbers.number[4]}/>
    </div>
  );
};

export default App;
