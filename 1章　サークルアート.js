function draw() {
    background(0,0,0,20);

    noStroke();
    fill(255, mouseX/4, mouseY/4);
    ellipse(mouseX, mouseY, 200);
    ellipse(mouseX + 100, mouseY - 110, 120);
    ellipse(mouseX - 100, mouseY - 110, 120);
}