// Grid Demo
// Dan Schellenberg
// Oct 22, 2024

let grid = [[1, 0, 1, 0],
            [0, 0, 1, 1],
            [1, 1, 1, 0],
            [0, 1, 1, 0]];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * 50, y * 50, 50);
    }
  }
}