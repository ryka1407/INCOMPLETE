class Player{
    contructor (x,y)
    {
        var options = 
        {
            'restitution':0.8,
            'friction': 1.0,
            'density':1.0
                }
        this.x = x;
        this.y = y;
        this.width = 20;
        this.body = Bodies.rectangle(x,y,20,50,options)
        this.height = 50;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world,this.body)
            }
    display(){
        imageMode(CENTER);
        rect (this.x,this.y,20,50);
    
    }
}