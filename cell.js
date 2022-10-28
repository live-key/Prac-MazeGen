class Cell {
    constructor(i, j, res) {
        this.i = i;
        this.j = j;
        this.walls = [1, 1, 1, 1];
        this.visited = false;
    }

    show() {
        var x = this.i * res;
        var y = this.j * res;
        stroke(255);
        if (this.walls[0]) {
            line(x, y, x + res, y);
        }
        if (this.walls[1]) {
            line(x + res, y, x + res, y + res);
        }
        if (this.walls[2]) {
            line(x + res, y + res, x, y + res);
        }
        if (this.walls[3]) {
            line(x, y + res, x, y);
        }

        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, res, res);
        }
    }

    getAdjacent() {
        let adj, adjList = [];

        for (let k = 1; k < 3; k++) {
            adj = grid[index( this.i + pow(-1,k) , this.j)]; 
            if (adj && !adj.visited) {
                adjList.push(adj);
            }
            adj = grid[index( this.i , this.j + pow(-1,k))];
            if (adj && !adj.visited) {
                adjList.push(adj);
            }
        }

        if (adjList.length > 0) {
            return random(adjList);
        }
        return undefined;
    }

    del(adj) {
        let xDiff = this.i - adj.i;
        let yDiff = this.j - adj.j;

        if (xDiff == 1) {
            this.walls[3] = 0;
            adj.walls[1] = 0;
        } else if (xDiff == -1) {
            this.walls[1] = 0;
            adj.walls[3] = 0;
        }

        if (yDiff == 1) {
            this.walls[0] = 0;
            adj.walls[2] = 0;
        } else if (yDiff == -1) {
            this.walls[2] = 0;
            adj.walls[0] = 0;
        }
    }
}