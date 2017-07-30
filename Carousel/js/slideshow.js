var container=document.getElementsByClassName("container");
var list=document.getElementById("slideshow");
var pic = list.getElementsByTagName("li");
var Bar = document.getElementById("slidebar");
var bar = Bar.getElementsByTagName("li");
var time = 1000;
var index = prv=0;
var timer;
var n=pic.length;
    function show(){
         timer=setInterval(function(){
         index = index + 1 >= n ? index + 1 - n : index + 1;
         change();
       },time);
    }
    container[0].onmouseout=show;
    container[0].onmouseover=function(){
    	clearInterval(timer);
    }
    function change(){
       pic[prv].style.display="none";
       bar[prv].className="";
       pic[index].style.display="block";
       bar[index].className="on";
       prv=index;
    }
    for (var i = 0; i < bar.length; i++) {
        bar[i].index = i;
        bar[i].onmouseover = function() {
        	index=this.index;
        	change();
        }
    }
    show();
   

