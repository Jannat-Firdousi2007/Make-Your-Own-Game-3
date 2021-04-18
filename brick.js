class Brick{
    constructor(x, y, w, h, v){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.v = v;
    }
    display(){
        //rectMode(CENTER);
        var brickObj = createSprite(this.x, this.y, this.width, this.height);
        brickObj.shapeColor = "grey";
        //brickObj.velocityX = this.v;
        //brickObj.bounceOff(door);
        //brickObj.bounceOff(edges[3]);
        player.collide(brickObj);
    }
}