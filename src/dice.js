import React from "react";
const diceStyle = {
    backgroundColor: "#121212",
    height: "100px",
    width: "100px",
    borderRadius: "20px",
    margin: "30px 15px",
    color: "white",
    fontSize: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
}

function Dice({ number, moveDice, index }) {
    return (
        <div
            draggable={true}
            onDragStart={e => { e.dataTransfer.setData("diceIndex", index); e.dataTransfer.setData("diceNumber", number) }}
            onClick={moveDice}
            style={diceStyle}
        >
            {number}
        </div>
    )

}
export default Dice; 