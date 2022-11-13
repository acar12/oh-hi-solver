let isValidSolution = (grid) => {
    for (let i1 = 0; i1 < grid.length - 1; i1++) {
        for (let i2 = i1 + 1; i2 < grid.length; i2++) {
            // unique rows
            if (grid[i1].every((e, i) => e === grid[i2][i]) && !grid[i1].some((e) => e === 0)) {
                return false
            }
            // unique columns
            let every = true
            let some = false
            for (let ri = 0; ri < grid.length; ri++) {
                if (grid[ri][i1] !== grid[ri][i2]) {
                    every = false
                }
                if (grid[ri][i1] === 0) {
                    some = true
                }
            }
            if (every && !some) {
                return false
            }
        }
    }
    // same amount of colors
    for (let i = 0; i < grid.length; i++) {
        // row
        let rowColors = [0, 0, 0]
        let colColors = [0, 0, 0]
        for (let j = 0; j < grid.length; j++) {
            rowColors[grid[i][j]]++
            colColors[grid[j][i]]++
        }
        if ((rowColors[0] === 0 && rowColors[1] !== rowColors[2]) || (colColors[0] === 0 && colColors[1] !== colColors[2])) {
            return false
        }
    }
    // 3 horizontal
    for (let row of grid) {
        for (let col = 0; col < grid.length - 4; col++) {
            if ((row[col] === row[col + 1] === row[col + 2]) && row[col] !== 0) {
                return false
            }
        }
    }
    // 3 vertical
    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid.length - 4; row++) {
            if ((grid[row][col] === grid[row + 1][col] === grid[row + 2][col]) && grid[row][col] !== 0) {
                return false
            }
        }
    }
    // default
    return true
}

let solve = (grid, cb) => {
    let current = [0, 0]

    while (grid[current[0]][current[1]] !== 0) {
        current[1]++
        if (current[1] === grid.length) {
            current[1] = 0
            current[0] += 1
        }
        if (current[0] >= grid.length) {
            let sol = isValidSolution(grid)
            if (sol) {
                cb(grid)
            }
            return sol
        }
    }

    for (let v = 1; v <= 2; v++) {
        grid[current[0]][current[1]] = v

        if (!isValidSolution(grid)) {
            grid[current[0]][current[1]] = 0
            continue
        }

        if (solve(grid, cb)) {
            return true
        } else {
            grid[current[0]][current[1]] = 0
        }
    }
}

export default solve
