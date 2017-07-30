//JS实现滑索导航
var list=document.getElementById("list");
var menu = list.getElementsByTagName("li");
var content=document.getElementById("content");
var con=content.getElementsByTagName("div");
var current=document.getElementsByClassName("current");
var triangle=document.getElementsByClassName("triangle");
for (var i = 0; i < menu.length; i++) {
        menu[i].index = i;
        menu[i].onmouseover = function() {
            current[0].style.left=8+this.index*16.7+'%';
            triangle[0].style.left=7.4+this.index*16.7+'%';
            triangle[1].style.left=7.4+this.index*16.7+'%';
            show(this.index);
        }
    }
function show(a) {
        index = a;
        for (var j = 0; j < menu.length; j++) {
            con[j].style.display = "none";
        }
          con[index].style.display = "block";
    }
