class Block{
    constructor(x, y, w, h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    display(){
        //rectMode(CENTER);
        var blockObj = createSprite(this.x, this.y, this.width, this.height);
        blockObj.shapeColor = "black";
        player.collide(blockObj);
    }
}