var snake;
var rez = 60;
var food;
var w;
var h;
var gameState = "Play";
var colour = "green";
var colours=['blue','green','pink','purple','brown','teal','magenta','orange','peachpuff','grey','violet','turquoise','coral','olive'];

function setup() {
  createCanvas(600,600);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(4);
  snake = new Snake();
  foodLocation();
}

function draw() {
  scale(rez);
  background("black"); 

  if (snake.eat(food)) {
    foodLocation();
  }

  snake.update();
  snake.show();

  

  if (snake.GameOver()) {
    background(255, 0, 0);
    fill("black");
    text("GAME OVER",300,300);
    gameState="End";
    
    frameRate(0);
  }

  if(gameState==="Play"){
  noStroke();
  fill(colour);
  rect(food.x, food.y, 1, 1);
  }
}

function foodLocation() {
  var x = floor(random(w));
  var y = floor(random(h));
  food = createVector(x, y);
  colour=random(colours);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setPos(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setPos(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setPos(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setPos(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }
}