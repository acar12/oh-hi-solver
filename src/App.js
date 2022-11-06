import { useState } from "react";
import "./App.css"
import SizeSelector from "./SizeSelector"

let App = () => {
    const [size, setSize] = useState(4)
    const [grid, setGrid] = useState([])

    if (grid.length !== size) {
        let temp = [];
        for (let i = 0; i < size; i++) {
            temp.push(Array.from(Array(size), () => <button className="cell-button" value="0" />))
        }
        setGrid(temp)
    }

    return (
        <div id="app">
            <h1>0h h1 Solver</h1>
            <div id="table">
                {grid.map((r, i) => <div key={i}>{r}</div>)}
            </div>
            <div id="inputs">
                <SizeSelector size={size} setSize={setSize} />
                <button id="solve-button">Solve</button>
            </div>
        </div>
    );
}

export default App
