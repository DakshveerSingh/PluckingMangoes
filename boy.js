class Boy{
    constructor(x,y,width,height){
        var options = {
            'isStatic' : false,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.3
        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width = width;
    this.height = height;
    //this.image = loadImage("image.png");
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(x,y,width,height);
    }
}