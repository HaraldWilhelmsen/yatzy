import { useState } from 'react';

import Board from "./Board";
import Dice from './Dice';

function App() {

  const [diceNumbers, setDiceNumbers]=useState([null, null, null, null, null])
  const [boardNumbers, setBoardNumber] = useState([])
  const [numberOfThrows, setNumberOfThrows] = useState(0)

  function addDice(number) {
    setDiceNumbers(n => {
      let new_n = [...n]
      new_n.push(number)
      return new_n;
    })
  }

  function removeDice(index) {
    setDiceNumbers(n => {
      let new_n = [...n]
      new_n.splice(index, 1);
      return new_n;
    })
  }

  function removeBoardNumber(index) {
    setBoardNumber(n => {
      let new_n = [...n]
      new_n.splice(index, 1);
      return new_n;
    })
  }

  function addNumberToBoard(index, number) {
    removeDice(index)
    setBoardNumber(n => {
      const newN = [...n];
      newN.push(number);
      return newN;
    })
  }

  function removeNumberFromBoard(index, number) {
    removeBoardNumber(index)
    setDiceNumbers(n => {
      const newN = [...n];
      newN.push(number);
      return newN;
    })
  }


  function throwAllDices() {
    setDiceNumbers(n => {
      let new_n = [...n]
      for (var i = 0; i < diceNumbers.length; i++) {
        new_n[i] = Math.floor(Math.random() * 6)+1;
      }
      return new_n;
    })
    setNumberOfThrows((prev) => {
      return ((diceNumbers.length > 0) ? prev+1 : prev)})
  }

  // CHECK FOR YATZY:
  var hasYatzy = (diceNumbers.length + boardNumbers.length) > 1 && [...diceNumbers, ...boardNumbers].every(val => val !== null && val === (diceNumbers.length>0? diceNumbers[0] : boardNumbers[0]))

  return (
    <div className="App">
      {
        hasYatzy? <h1> YATZY !!!!!!</h1> : null
      }
      
      <button onClick={() => addDice(null)}> Add Dice </button>
      <button onClick={() => removeDice(diceNumbers.length-1)}> Remove Dice </button>
      <h2 style={{textAlign: "center"}}>Antall kast: {numberOfThrows}</h2>
      <div style={{widht: "100vh", display: "flex", justifyContent: "center"}}><button onClick={throwAllDices}> Throw Dices </button></div>

      {
        diceNumbers.length > 0 ? (
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}} 
            onDragOver={e => { e.preventDefault(); }}              
            onDrop={e => {
              const index = parseInt(e.dataTransfer.getData("diceIndex"))
              const number = e.dataTransfer.getData("diceNumber") !== "null" ? parseInt(e.dataTransfer.getData("diceNumber")) : null
              removeNumberFromBoard(index, number)
          }}>
          {
            diceNumbers.map((number, index) => <Dice number={number} moveDice={() => addNumberToBoard(index, number)} key={index} index={index}/>)
          }
          </div>
        )
        : (
        <div style={{height: "160px"}}></div>
        )

      }
      
      <Board boardNumbers={boardNumbers} addNumberToBoard={addNumberToBoard} removeNumberFromBoard={removeNumberFromBoard}/>



    </div>
  );
}

export default App;
