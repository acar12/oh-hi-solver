import { useContext } from "react"
import GameContext from "./index"

let GridButton = ({row, col, value }) => {
    const { grid, setGrid } = useContext(GameContext)
    const incrementValue = () => {
        let temp = grid.map((r) => r.map((e) => e))
        temp[row][col] = (value + 1) % 3
        setGrid(temp)
    }

    return (
        <button className="grid-button" value={value} onClick={incrementValue} />
    )
}

export default GridButton
