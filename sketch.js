var dim, current;
var res = 50;
var grid = [], stack = [];

function setup() {
    createCanvas(600, 600);
    dim = floor(min(width, height) / res);

    for (var j = 0; j < dim; j++) {
        for (var i = 0; i < dim; i++) {
            var cell = new Cell(i, j);
            grid.push(cell);
        }
    }

    frameRate(5);
    current = grid[0];
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }

    current.visited = true;

    let next = current.getAdjacent();
    if (next) {
        next.visited = true;
        current.del(next);
        current = next;
    } else {
        noLoop();
    }
}

function index(i, j) {
    if (i < 0 || j < 0 || i > dim - 1 || j > dim - 1) {
      return -1;
    }
    return i + j * dim;
}