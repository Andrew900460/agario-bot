var AiInterface=function(move,split,shoot){
	this.move=move;
	this.split=split;
	this.shoot=shoot;
}

AiInterface.prototype={
	tick:function(organisms,myOrganisms,score){},
	move:function(x,y){},
	split:function(){},
	shoot:function(){},
	draw:function(ctx){}
}
