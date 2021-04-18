class Ground{
    constructor(x, y, w, h){
        this.width = w;
        this.height = h;
        this.x = x;
        this.y = y;
    }
    display(){
        grounds = createSprite(this.x, this.y, this.width, this.height);
        grounds.shapeColor = "Black";
    }
}