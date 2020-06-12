function Bird() {
    this.y = 0;
    this.x = 40;

    this.img = loadImage('plus.svg', 0, 0);

    this.gravity = 0.6;
    this.lift = -10;
    this.velocity = 0;
    this.bounce = -22;


    this.show = function() {

        fill(255);
        ellipse(this.x, this.y, 25, 25);

        image(this.img, this.x -12.5, this.y - 12.5, 25, 25);
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.y += this.velocity;


        if (this.y> height) {
            this.y = height;
            this.velocity = -this.velocity/1.3;
        }
        if (this.y < 0) {
            this.y = 0;              
        }
    }
    this.up = function () {
        this.velocity += this.lift;
        this.y += this.velocity
    }
}
