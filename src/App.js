import { useState } from 'react';

import Board from "./Board";
import Dice from './Dice';

function App() {

  const [numbers, setNumbers]=useState([-1, -1, -1, -1, -1 ])
  const [numberOfThrows, setNumberOfThrows] = useState(0)

  function addDice() {
    setNumbers(n => {
      let new_n = [...n]
      new_n.push(-1)
      return new_n;
    })
  }

  function removeDice(index) {
    setNumbers(n => {
      let new_n = [...n]
      new_n.splice(index, 1);
      return new_n;
    })
  }

  function throwOneDice(diceNumber){ 
    setNumbers(n => {
      let new_n = [...n]
      new_n[diceNumber] = Math.floor(Math.random() * 6)+1;
      return new_n;
    })
  }

  function throwAllDices() {
    for (var i = 0; i < numbers.length; i++) {
      throwOneDice(i);
    }
    setNumberOfThrows((prev) => {return prev+1})
  }

  return (
    <div className="App">
      <button onClick={throwAllDices}> Throw Dices </button>
      <button onClick={addDice}> Add Dice </button>
      <button onClick={removeDice}> Remove Dice </button>
      <h2>Antall kast: {numberOfThrows}</h2>

      <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} className="DiceBoard">
      {
        numbers.map((number, index) => <Dice number={number} setNumber={() => throwOneDice(index)} key={index} index={index}/>)
      }
      </div>
      <Board addDice={addDice} removeDice={removeDice}/>



    </div>
  );
}

export default App;
