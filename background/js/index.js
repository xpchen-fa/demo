window.onload=function() {
	window.requestAnimationFrame = ( function(){
		return window.requestAnimFrame||
		window.webkitRequestAnimationFrame||
		window.mozRequestAnimationFrame||
		function(callback){
			window.setTimeout(callback,1000/60);
		};
	})();    

    var canvas=document.getElementById("canvas");
    var cxt =canvas.getContext("2d");//设置画笔
    var num = 200; //粒子初始数量
    var data=[];//存储粉点位置数据
    var w,h;
    var move={};//鼠标位置数据

    window.onresize=init;
    init();

    //设置屏幕与浏览器等宽高
    function init(){
    	data=[];
    	move=[];
    	w=canvas.width = window.innerWidth;
        h=canvas.height = window.innerHeight;
        //粉点的位置
        for(var i=0; i<num;i++){
            data[i]={x:Math.random()*w,y:Math.random()*h,cX:Math.random()*0.6-0.3,cY:Math.random()*0.6-0.3};
            Circle(data[i].x,data[i].y);
        }
    }
    //画点
    function Circle(x,y){
    	cxt.save();
    	cxt.fillStyle = "pink";
    	cxt.beginPath();
    	cxt.arc(x,y,0.5,Math.PI*2,false);
    	cxt.closePath();
    	cxt.fill();
    	cxt.restore();
    }
    //画线
    function line(x1,y1,x2,y2,isMove){
    	var color=cxt.createLinearGradient(x1,y1,x2,y2);
    	if(!isMove){
           color.addColorStop(0,"white");
    	   color.addColorStop(1,"pink");
    	}else{
           color.addColorStop(0,"white");
    	   color.addColorStop(1,"#bbffff");
    	}
        cxt.save();
    	cxt.strokeStyle = color;
    	cxt.beginPath();
    	cxt.moveTo(x1,y1);
    	cxt.lineTo(x2,y2);
    	cxt.stroke();
    	cxt.closePath();
    	cxt.fill();
    	cxt.restore();
    }
    
    //点运动以及点连线
    !function draw(){
    	cxt.clearRect(0,0,w,h);
    	for (var i=0; i<num;i++) {
    		data[i].x += data[i].cX;
    	    data[i].y += data[i].cY;
    	    //边界判断
    	    if(data[i].x>w||data[i].x<0) 
    	    	data[i].cX=-data[i].cX;
    	    if(data[i].y>h||data[i].y<0) 
    	    	data[i].cY=-data[i].cY;
    	    Circle(data[i].x,data[i].y);    

    	    //用勾股定理判断是否连线
    	    for (var j = i+1; j < num; j++) {
    	    	if((data[i].x-data[j].x)*(data[i].x-data[j].x)+(data[i].y-data[j].y)*(data[i].y-data[j].y)<=50*50){
    	    		//画线
                   line(data[i].x,data[i].y,data[j].x,data[j].y,false);
    	    	}
    	    	if(move.x){
    	    		if((data[i].x-move.x)*(data[i].x-move.x)+(data[i].y-move.y)*(data[i].y-move.y)<=100*100){
    	    		//画线
                   line(data[i].x,data[i].y,move.x,move.y,true);
    	    	    }
    	    	}
    	    }    
    	}	
    	window.requestAnimationFrame(draw);
    }();    

    //移入鼠标
    document.onmousemove=function(e){
    	//获取鼠标坐标
        move.x=e.clientX;
        move.y=e.clientY;
    }
}