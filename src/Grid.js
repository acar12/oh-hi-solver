import { useContext } from "react"
import GameContext from "./index"
import GridButton from "./GridButton"

let Grid = () => {
    const { grid } = useContext(GameContext)

    return (
        <div id="table">
            {grid.map((r, i) => <div key={i}>{r.map((v, j) => <GridButton key={j} row={i} col={j} value={v} />)}</div>)}
        </div>
    )
}

export default Grid
