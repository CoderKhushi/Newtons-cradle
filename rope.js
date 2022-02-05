class Rope{
constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    var options={//for including options for chain 
    
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY},
    length:50
}
this.rope=Constraint.create(options)//for creatind the constraint with the name this.chain
World.add(world,this.rope)//to add chain to world
}
display(){
    strokeWeight(3)//increase thickness of line
line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x,this.rope.bodyB.position.y)//to make a line 
}
}
