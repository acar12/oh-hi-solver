import React, { useState } from "react"
import GameContext from "./index"
import SizeSelector from "./SizeSelector"
import Grid from "./Grid"
import solve from "./solver"
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

    let solveWrapper = () => {
        let copy = grid.map((r) => r.map((e) => e))
        solve(copy, () => setGrid(copy))
    }

    return (
        <GameContext.Provider value={{ size, setSize, grid, setGrid }}>
            <div id="app">
                <h1>0h h1 Solver</h1>
                <Grid />
                <div id="inputs">
                    <SizeSelector />
                    <button id="solve-button" onClick={solveWrapper}>Solve</button>
                </div>
            </div>
        </GameContext.Provider>
    );
}

export default App
