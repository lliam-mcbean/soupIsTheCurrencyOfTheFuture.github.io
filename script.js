



function setup() { 
    createCanvas(windowWidth, windowHeight, WEBGL);
} 

function draw() { 
background(220);
rectMode(CENTER);
fill(0, 0, 255);
translate(mouseX - width/2, mouseY - height/2);
rotateY(frameCount * 0.01);
rotateX(frameCount * 0.01);
rotateZ(frameCount * 0.01);
box(150, 150, 150);

}