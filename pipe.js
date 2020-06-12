function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 70;
    this.speed = 4;
    this.highlight = false;

    this.hits = function(bird) {
        if (bird.y < this.top || bird.y > height - this.bottom) {
            if (bird.x > this.x && bird.x < this.x + this.w) {
                this.highlight = true;
                return true;
            }
        } 

        return false;
        
    }

    this.show = function() {
       
        if (this.hightlight) {
            fill(0, 0, 255);  
        } else {
            fill(0, 255, 0);        
        }
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom)
    }

    this.update = function() {
        this.x -= this.speed;
    }
}