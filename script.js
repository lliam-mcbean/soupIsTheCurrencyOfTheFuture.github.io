let bird;
let value = 0;
let pipes = [];

function setup() {
    createCanvas(window.innerWidth * 0.7, window.innerHeight);
    bird = new Bird();
    pipes.push(new Pipe());
} 

function draw() {
    background(0);
    bird.show();
    bird.update();

    if (frameCount % 75   === 0) {
        pipes.push(new Pipe());
    }

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
     
            pipes = [];
            clear();
            pipes.push(new Pipe());
            pipes.splice(1          ,1);
        }

        if (pipes[i].x < -50) {
            pipes.splice(i, 1);
        }
    }
}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}
function touchStarted() {
    if (value === 0) {
      bird.up();
    } else {
      value = 0;
    }
}