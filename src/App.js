import { useState } from 'react';
import Dice from './dice';

function App() {
  const [numbers, setNumbers]=useState([1, 2, 3 ,4 ,5 ])

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
  }

  return (
    <div className="App">
      <button onClick={throwAllDices}> Throw Dices </button>
      <div style={{display: "flex", flexWrap: "wrap"}} className="DiceBoard">
        {Dice(numbers[0],()=>{throwOneDice(0)})}
        {Dice(numbers[1],()=>{throwOneDice(1)})}
        {Dice(numbers[2],()=>{throwOneDice(2)})}
        {Dice(numbers[3],()=>{throwOneDice(3)})}
        {Dice(numbers[4],()=>{throwOneDice(4)})}
      
      </div>

    </div>
  );
}

export default App;
