import React, { useState } from "react"
import GameContext from "./index"
import SizeSelector from "./SizeSelector"
import Grid from "./Grid"
import "./App.css"

let App = () => {
    const [size, setSize] = useState(4)
    const [grid, setGrid] = useState([])

    if (grid.length !== size) {
        let temp = []
        for (let i = 0; i < size; i++) {
            temp.push(Array.from(Array(size), () => 0))
        }
        setGrid(temp)
    }

    return (
        <GameContext.Provider value={{ size, setSize, grid, setGrid }}>
            <div id="app">
                <h1>0h h1 Solver</h1>
                <Grid />
                <div id="inputs">
                    <SizeSelector />
                    <button id="solve-button">Solve</button>
                </div>
            </div>
        </GameContext.Provider>
    );
}

export default App
