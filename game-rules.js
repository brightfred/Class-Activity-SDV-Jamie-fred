// Compute the next generation
function computeNextGeneration(grid) {
    const nextGen = grid.map((row, i) =>
      row.map((cell, j) => {
        const neighbors = countLiveNeighbors(grid, i, j);
        if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
          return 0; // Cell dies
        } else if (cell === 0 && neighbors === 3) {
          return 1; // Cell is born
        }
        return cell; // Cell remains unchanged
      })
    );
    return nextGen;
  }
  
  // Count live neighbors
  function countLiveNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const col = (x + i + cols) % cols;
        const row = (y + j + rows) % rows;
        sum += grid[col][row];
      }
    }
    sum -= grid[x][y]; // Exclude the cell itself
    return sum;
  }
  
