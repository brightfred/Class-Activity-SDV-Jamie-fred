// Description: This file contains a grid for the game of life.
// It's a class that represents a grid with rows and columns.
// It has a method to print the grid.


class Grid {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.grid = this.createGrid();
    }

    createGrid() {
        const grid = new Array(this.rows);
        for (let i = 0; i < this.rows; i++) {
            grid[i] = new Array(this.cols).fill(0);
        }
        return grid;
    }

    printGrid() {
        for (let i = 0; i < this.rows; i++) {
            console.log(this.grid[i].join(' '));
        }
    }
}

// Example usage
const grid = new Grid(20, 20);
grid.printGrid();
