function prepareSlideshow(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById("linklist")) return false;

    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","images/topics.jpg");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");
    slideshow.appendChild(preview);

    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = document.getElementsByTagName("a");

    links[0].onmouseover = function(){
        moveElement("preview",-160,0,10);
    }
    links[1].onmouseover = function(){
        moveElement("preview",-320,0,10);
    }
    links[2].onmouseover = function(){
        moveElement("preview",-480,0,10);
    }
}
addLoadEvent(prepareSlideshow);