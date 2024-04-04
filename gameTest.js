class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = new Array(this.rows);
        for (let i = 0; i < this.rows; i++) {
            grid[i] = new Array(this.cols).fill(0).map(() => Math.random() < 0.1 ? 1 : 0);
        }
        return grid;
    }

    // Other methods for the Game of Life logic

    // Example method to print the grid
    printGrid() {
        for (let i = 0; i < this.rows; i++) {
            console.log(this.grid[i].join(' '));
        }
    }
}

// Example usage
const grid = new Grid(20, 20);
grid.printGrid();

