class Stone{
    constructor(x,y,radius){
        var options = {
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.3
        }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
    //this.image = loadImage("image.png");
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(x,y,radius);
    }
}