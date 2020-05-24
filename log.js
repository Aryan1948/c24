class Log{
    constructor(x,y,width,height,angle){
        var options = {
            'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)
        World.add(world, this.body);
        
      }
       display(){
       push();
       var pos = this.body.position;
       var angle = this.body.angle;
       translate(pos.x,pos.y);
       rotate(angle);
       rectMode(CENTER);
       fill("brown")
       rect(0,0,this.width,this.height);
       pop();
       
       
    
       }
}