class Tree{
    constructor(x,y){
      var options = {isStatic : true}

      this.body1 = Bodies.rectangle(x-110,y-40,20,100,options);
      World.add(world,this.body1);
      this.body2 = Bodies.rectangle(x+110,y-40,20,100,options);
      World.add(world,this.body2);
      this.body3 = Bodies.rectangle(x,y,200,20,options);
      World.add(world,this.body3);

      this.image = loadImage("Plucking mangoes/tree.png");      
    }
    display(){
      var pos = this.body3.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,200,200);
    }
}