class Snake {
    constructor() {                         
        this.body = [];
      this.body[0] = createVector(floor(w/4), floor(h/4));
      this.xdirection = 0;
      this.ydirection = 0;
      this.length = 0;
    }
    
    setPos(x, y) {
        this.xdirection = x;
      this.ydirection = y;
    }
    
    update() {
        var head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xdirection;
      head.y += this.ydirection;
      this.body.push(head);
    }
    
    grow() {
        var head = this.body[this.body.length-1].copy();
      this.length++;
      this.body.push(head);
    }
    
    GameOver() {
        var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
      for(var i = 0; i < this.body.length-1; i++) {
          var part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
      }
      return false;
    }
    
    eat(pos) {
        var x = this.body[this.body.length-1].x;
        var y = this.body[this.body.length-1].y;
        if(x == pos.x && y == pos.y) {
          this.grow();
          return true;
        }
        return false;
      }
      
      show() {
          for(var i = 0; i < this.body.length; i++) {
            fill(random(50,255));
          noStroke();
          rect(this.body[i].x, this.body[i].y, 1, 1)
        }
      }
    
    }