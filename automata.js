class Automata {
    constructor(options) {
        this.grid = [];

        this.tickCount = 0;
        this.stepCount = 0;

        this.sideLength = 8;
        this.insetLength = 1;
    }

    //Initializes the canvas with random cells
    init(canvasWidth, canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        //Dynamically calculate the grid width and height
        this.width = Math.floor((canvasWidth - this.insetLength) / (this.sideLength + this.insetLength));
        this.height = Math.floor((canvasHeight - this.insetLength) / (this.sideLength + this.insetLength));
        
        this.loadRandomGrid();
        //this.loadDemoGrid();
        //this.grid = this.createEmptyGrid();
    }

    //Returns an empty grid
    createEmptyGrid() {
        let newGrid = [];
        for (let y = 0; y < this.height; y++) {
            let row = [];
            for (let x = 0; x < this.width; x++) {
                row.push(0);
            }
            newGrid.push(row);
        }

        return newGrid;
    }

    //Replaces the current grid with a grid of random cells. Each cell has a 50% chance of being alive or dead
    loadRandomGrid() {
        this.tickCount = 0;
        this.stepCount = 0;
        let newGrid = this.createEmptyGrid();
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                newGrid[y][x] = Number(Math.random() < 0.5);
            }
        }

        this.grid = newGrid;
    }

    loadAcornGrid() {
        this.tickCount = 0;
        this.stepCount = 0;
        this.grid = this.createEmptyGrid();
        this.addAcorn(Math.floor(this.height / 2), Math.floor(this.width / 2));
    }

    loadOcilatorGrid() {
        this.tickCount = 0;
        this.stepCount = 0;
        this.grid = this.createEmptyGrid();

        this.addAchimsp16(32, 8);
        this.addAforall(32, 30);
        this.addAverage(32, 55);
        this.addAirforce(32, 82);
        this.addAchimsp4(32, 105);
    }

    //Adds a blinker (row/column of 3 cells) to the current grid
    addBlinker(row, col, vert) {
        if (vert) {
            this.grid[row][col] = 1;
            this.grid[row + 1][col] = 1;
            this.grid[row + 2][col] = 1;
        } 
        
        else {
            this.grid[row][col] = 1;
            this.grid[row][col + 1] = 1;
            this.grid[row][col + 2] = 1;
        }
    }

    addAcorn(row, col) {
        this.grid[row][col] = 1;
        this.grid[row - 1][col - 2] = 1;
        this.grid[row + 1][col - 3] = 1;
        this.grid[row + 1][col - 2] = 1;
        this.grid[row + 1][col + 1] = 1;
        this.grid[row + 1][col + 2] = 1;
        this.grid[row + 1][col + 3] = 1;
    }

    addAchimsp16(row, col) {
        //Top left
        this.grid[row - 1][col - 4] = 1;
        this.grid[row - 1][col - 5] = 1;
        this.grid[row - 1][col - 6] = 1;
        this.grid[row - 2][col - 3] = 1;
        this.grid[row - 2][col - 6] = 1;
        this.grid[row - 3][col - 4] = 1;
        this.grid[row - 3][col - 5] = 1;
        this.grid[row - 4][col - 4] = 1;

        //Top right
        this.grid[row - 3][col + 2] = 1;
        this.grid[row - 4][col + 1] = 1;
        this.grid[row - 4][col + 3] = 1;
        this.grid[row - 4][col + 4] = 1;
        this.grid[row - 5][col + 1] = 1;
        this.grid[row - 5][col + 3] = 1;
        this.grid[row - 6][col + 1] = 1;
        this.grid[row - 6][col + 2] = 1;

        //Bottom left
        this.grid[row + 3][col - 2] = 1;
        this.grid[row + 4][col - 1] = 1;
        this.grid[row + 4][col - 3] = 1;
        this.grid[row + 4][col - 4] = 1;
        this.grid[row + 5][col - 1] = 1;
        this.grid[row + 5][col - 3] = 1;
        this.grid[row + 6][col - 1] = 1;
        this.grid[row + 6][col - 2] = 1;

        //Bottom right
        this.grid[row + 1][col + 4] = 1;
        this.grid[row + 1][col + 5] = 1;
        this.grid[row + 1][col + 6] = 1;
        this.grid[row + 2][col + 3] = 1;
        this.grid[row + 2][col + 6] = 1;
        this.grid[row + 3][col + 4] = 1;
        this.grid[row + 3][col + 5] = 1;
        this.grid[row + 4][col + 4] = 1;
    }

    addAforall(row, col) {
        //Top A
        this.grid[row - 2][col - 1] = 1;
        this.grid[row - 2][col + 2] = 1;
        this.grid[row - 3][col - 1] = 1;
        this.grid[row - 3][col] = 1;
        this.grid[row - 3][col + 1] = 1;
        this.grid[row - 3][col + 2] = 1;
        this.grid[row - 4][col - 1] = 1;
        this.grid[row - 4][col + 2] = 1;
        this.grid[row - 5][col] = 1;
        this.grid[row - 5][col + 1] = 1;

        //Bottom A
        this.grid[row + 1][col - 1] = 1;
        this.grid[row + 1][col + 2] = 1;
        this.grid[row + 2][col - 1] = 1;
        this.grid[row + 2][col] = 1;
        this.grid[row + 2][col + 1] = 1;
        this.grid[row + 2][col + 2] = 1;
        this.grid[row + 3][col - 1] = 1;
        this.grid[row + 3][col + 2] = 1;
        this.grid[row + 4][col] = 1;
        this.grid[row + 4][col + 1] = 1;

        //Left C
        this.grid[row - 2][col - 3] = 1;
        this.grid[row - 1][col - 4] = 1;
        this.grid[row][col - 4] = 1;
        this.grid[row + 1][col - 3] = 1;

        //Right C
        this.grid[row - 2][col + 4] = 1;
        this.grid[row - 1][col + 5] = 1;
        this.grid[row][col + 5] = 1;
        this.grid[row + 1][col + 4] = 1;
        
    }

    addAverage(row, col) {
        //Center E
        this.grid[row - 2][col + 1] = 1;
        this.grid[row - 2][col] = 1;
        this.grid[row - 2][col - 1] = 1;
        this.grid[row - 2][col - 2] = 1;
        this.grid[row - 1][col - 2] = 1;
        this.grid[row][col] = 1;
        this.grid[row][col - 1] = 1;
        this.grid[row][col - 2] = 1;
        this.grid[row + 1][col - 2] = 1;
        this.grid[row + 2][col + 1] = 1;
        this.grid[row + 2][col] = 1;
        this.grid[row + 2][col - 1] = 1;
        this.grid[row + 2][col - 2] = 1;

        //Left C
        this.grid[row - 3][col - 3] = 1;
        this.grid[row - 2][col - 4] = 1;
        this.grid[row - 1][col - 4] = 1;
        this.grid[row][col - 4] = 1;
        this.grid[row][col - 5] = 1;
        this.grid[row + 1][col - 4] = 1;
        this.grid[row + 2][col - 4] = 1;
        this.grid[row + 3][col - 3] = 1;

        //Right C
        this.grid[row - 5][col - 2] = 1;
        this.grid[row - 5][col - 1] = 1;
        this.grid[row - 4][col - 1] = 1;
        this.grid[row - 4][col] = 1;
        this.grid[row - 4][col + 1] = 1;
        this.grid[row - 3][col + 2] = 1;
        this.grid[row - 2][col + 3] = 1;
        this.grid[row - 1][col + 3] = 1;
        this.grid[row][col + 3] = 1;
        this.grid[row + 1][col + 3] = 1;
        this.grid[row + 2][col + 3] = 1;
        this.grid[row + 3][col + 2] = 1;
        this.grid[row + 4][col + 1] = 1;
        this.grid[row + 4][col] = 1;
        this.grid[row + 4][col - 1] = 1;
        this.grid[row + 5][col - 1] = 1;
        this.grid[row + 5][col - 2] = 1;

        //Right Point
        this.grid[row - 1][col + 6] = 1;
        this.grid[row][col + 5] = 1;
        this.grid[row][col + 7] = 1;
        this.grid[row + 1][col + 6] = 1;
    }

    addAirforce(row, col) {
        //Inner arrows
        this.grid[row - 1][col - 1] = 1;
        this.grid[row - 1][col] = 1;
        this.grid[row][col - 1] = 1;
        this.grid[row][col + 2] = 1;
        this.grid[row + 1][col + 1] = 1;
        this.grid[row + 1][col + 2] = 1;

        this.grid[row - 3][col - 1] = 1;
        this.grid[row - 3][col] = 1;
        this.grid[row - 3][col + 1] = 1;
        this.grid[row - 3][col + 2] = 1;
        this.grid[row - 3][col + 3] = 1;
        this.grid[row - 2][col + 4] = 1;
        this.grid[row - 1][col + 4] = 1;
        this.grid[row][col + 4] = 1;
        this.grid[row + 1][col + 4] = 1;
        this.grid[row + 2][col + 3] = 1;
        this.grid[row + 3][col + 2] = 1;
        this.grid[row + 3][col + 1] = 1;
        this.grid[row + 3][col] = 1;
        this.grid[row + 3][col - 1] = 1;
        this.grid[row + 3][col - 2] = 1;
        this.grid[row + 2][col - 3] = 1;
        this.grid[row + 1][col - 3] = 1;
        this.grid[row][col - 3] = 1;
        this.grid[row - 1][col - 3] = 1;
        this.grid[row - 2][col - 2] = 1;

        //Top point
        this.grid[row - 5][col + 1] = 1;
        this.grid[row - 6][col] = 1;
        this.grid[row - 6][col + 2] = 1;
        this.grid[row - 7][col + 1] = 1;

        //Right point
        this.grid[row - 1][col + 6] = 1;
        this.grid[row - 1][col + 7] = 1;
        this.grid[row - 2][col + 6] = 1;
        this.grid[row - 2][col + 7] = 1;

        //Bottom point
        this.grid[row + 5][col] = 1;
        this.grid[row + 6][col - 1] = 1;
        this.grid[row + 6][col + 1] = 1;
        this.grid[row + 7][col] = 1;

        //Left point
        this.grid[row + 1][col - 5] = 1;
        this.grid[row + 1][col - 6] = 1;
        this.grid[row + 2][col - 5] = 1;
        this.grid[row + 2][col - 6] = 1;
    }

    addAchimsp4(row, col) {
        //Right side
        this.grid[row][col + 1] = 1;
        this.grid[row][col + 3] = 1;
        this.grid[row - 1][col + 4] = 1;
        this.grid[row - 1][col + 5] = 1;
        this.grid[row - 2][col + 4] = 1;
        this.grid[row - 3][col + 4] = 1;
        this.grid[row - 4][col + 3] = 1;
        this.grid[row - 4][col + 2] = 1;
        this.grid[row - 3][col + 1] = 1;
        this.grid[row - 2][col + 1] = 1;
        this.grid[row - 2][col + 2] = 1;

        this.grid[row + 1][col + 4] = 1;
        this.grid[row + 1][col + 5] = 1;
        this.grid[row + 2][col + 4] = 1;
        this.grid[row + 3][col + 4] = 1;
        this.grid[row + 4][col + 3] = 1;
        this.grid[row + 4][col + 2] = 1;
        this.grid[row + 3][col + 1] = 1;
        this.grid[row + 2][col + 1] = 1;
        this.grid[row + 2][col + 2] = 1;

        //Left side
        this.grid[row][col - 1] = 1;
        this.grid[row][col - 3] = 1;
        this.grid[row - 1][col - 4] = 1;
        this.grid[row - 1][col - 5] = 1;
        this.grid[row - 2][col - 4] = 1;
        this.grid[row - 3][col - 4] = 1;
        this.grid[row - 4][col - 3] = 1;
        this.grid[row - 4][col - 2] = 1;
        this.grid[row - 3][col - 1] = 1;
        this.grid[row - 2][col - 1] = 1;
        this.grid[row - 2][col - 2] = 1;

        this.grid[row + 1][col - 4] = 1;
        this.grid[row + 1][col - 5] = 1;
        this.grid[row + 2][col - 4] = 1;
        this.grid[row + 3][col - 4] = 1;
        this.grid[row + 4][col - 3] = 1;
        this.grid[row + 4][col - 2] = 1;
        this.grid[row + 3][col - 1] = 1;
        this.grid[row + 2][col - 1] = 1;
        this.grid[row + 2][col - 2] = 1;
    }

    countNeighbors(row, col) {
        let neighbors = 0;
        for (let i = -1; i <= 1; i++) {
            for (let j = -1; j <= 1; j++) {
                let y = row + i;
                let x = col + j;
                
                //Skip this coordinate if it is out of bounds or is the given coordinate
                if (y < 0 || y >= this.height || x < 0 || x > this.width || (i == 0 && j == 0)) {
                    continue;
                }
                
                //Count the neighbor
                if (this.grid[y][x] > 0) {
                    neighbors++;
                }
            }
        }

        return neighbors;
    }

    update() {
        document.getElementById('steps').textContent = `Steps: ${this.stepCount}`;
        
        //Exit if the tick count hasnt reached the desired value
        if (this.tickCount++ % (30 - document.getElementById('speed').value + 1) != 0) {
            return;
        }

        this.stepCount++;
        
        //initialize a new grid
        let newGrid = this.createEmptyGrid();

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let liveNeighbors = this.countNeighbors(y, x);
                
                //Kill a cell due to under/over population
                if (this.grid[y][x] > 0 && liveNeighbors != 2 && liveNeighbors != 3) {
                    newGrid[y][x] = -1;
                }

                //Reproduce a dead cell if surounded by 3 neighbors
                else if (this.grid[y][x] <= 0 && liveNeighbors === 3) {
                    newGrid[y][x] = this.stepCount;
                }

                //Retain the cells previous state if it was alive
                else if (this.grid[y][x] > 0) {
                    newGrid[y][x] = this.grid[y][x];
                }

                //Fade the cell away if it was a killed cell
                else if (this.grid[y][x] < 0) {
                    newGrid[y][x] = this.grid[y][x] - 1;

                    //Stop fading away at some point, since we only fade from -1 to -25
                    if (newGrid[y][x] === -128) newGrid[y][x] = 0;
                }
            }
        }

        //Replace the existing grid with the new grid
        this.grid = newGrid;
    }

    draw(ctx, gameEngine) {
        ctx.fillStyle = "black"
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let fade = document.getElementById('fadeBox').checked;
                let rainbow = document.getElementById('rainbowBox').checked;
                
                if (this.grid[y][x] === 0) {
                    continue;
                }

                if (this.grid[y][x] > 0) {
                    if (rainbow) ctx.fillStyle = rainbowColor(this.grid[y][x]);
                    else ctx.fillStyle = "black";

                    this.drawCell(ctx, y, x);
                }
                
                else if (this.grid[y][x] < 0 && fade) {
                    ctx.fillStyle = fadeColor(this.grid[y][x]);
                    this.drawCell(ctx, y, x);
                }
            }
        }
    }

    drawCell(ctx, row, col) {
        ctx.fillRect(this.insetLength + (this.insetLength + this.sideLength) * col, this.insetLength + (this.insetLength + this.sideLength) * row, this.sideLength, this.sideLength) 
    }
}