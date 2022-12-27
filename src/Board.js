import { useState } from 'react';
import Dice from './Dice';
import background from "./img/wood-pattern.png";


const boardStyle = {
    backgroundColor: "#521a00",
    height: "200px",
    maxWidth: "1000px",
    borderRadius: "20px",
    margin: "50px",
    backgroundImage: `url(${background})`
}

function Board({ removeDice }) {
    const [numbers, setNumbers] = useState([])
    return (
        <>
            <div
                onDragOver={e => { e.preventDefault(); }}
                onDrop={e => {
                    const index = parseInt(e.dataTransfer.getData("diceIndex"))
                    const number = parseInt(e.dataTransfer.getData("diceNumber"))
                    removeDice(index)
                    setNumbers((prev) => {
                        let newNumbers = [...prev]
                        newNumbers.push(number)
                        return newNumbers;
                    })
                }}
                style={boardStyle}
            >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }} className="DiceBoard">
                    {
                        numbers.map((number, index) => <Dice number={number} setNumber={() => { }} key={index} index={index} />)
                    }
                </div>
                
            </div>
            <h3 style={{textAlign: "center"}}>Sum: {numbers.reduce((a, b) => a + b, 0)}</h3>
        </>

    )

}
export default Board; 