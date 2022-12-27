import Dice from './Dice';
import background from "./img/wood-pattern.png";


const boardStyle = {
    backgroundColor: "#521a00",
    minHeight: "200px",
    maxWidth: "1000px",
    borderRadius: "20px",
    marginLeft: "50px",
    marginRight: "50px",
    backgroundImage: `url(${background})`
}

function Board({ boardNumbers, addNumberToBoard, removeNumberFromBoard }) {
    return (
        <div style={{margin: "auto", maxWidth: "100vh"}}>
            <div
                onDragOver={e => { e.preventDefault(); }}
                onDrop={e => {
                    const index = parseInt(e.dataTransfer.getData("diceIndex"))
                    const number = e.dataTransfer.getData("diceNumber") !== "null" ? parseInt(e.dataTransfer.getData("diceNumber")) : null
                    addNumberToBoard(index, number)
                }}
                style={boardStyle}
            >
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", justifyItems: "center"}} className="DiceBoard">
                    {
                        boardNumbers.map((number, index) => <Dice number={number} moveDice={() => {removeNumberFromBoard(index, number) }} key={index} index={index} />)
                    }
                </div>
                
            </div>
            <h3 style={{textAlign: "center"}}>Sum: {boardNumbers.reduce((a, b) => a + b, 0)}</h3>
        </div>

    )

}
export default Board; 