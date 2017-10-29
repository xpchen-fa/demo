function showPic(whichpic){
    // 图片切换不成功，就返回true，打开链接
    if(!document.getElementById("placeholder")){
        return true;
    } 
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName !== "IMG"){
        return true;
    }
    placeholder.setAttribute("src",source);
    // 图片切换成功，即使description没有刷新，也要返回false，取消事件默认行为
    if(!document.getElementById("description")){
        return false;
    }
    var text = whichpic.getAttribute("title")?whichpic.getAttribute("title"):"";
    var description = document.getElementById("description");
    if(description.firstChild.nodeType === 3){
        description.firstChild.nodeValue = text;
    }
    return false;
}
function countBodyChildren(){
    var body_element = document.getElementsByTagName("body")[0];
    alert (body_element.childNodes.length);
}
function popUp(url){
    window.open(url,"popup","width=300,height=480");
}

function prepareGallery(){
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var gallery = document.getElementById("imagegallery");
    var links = document.getElementsByTagName("a");
    for(var i = 0; i<links.length; i++){
        links[i].onclick = function(){
            showPic(this);
            return false;
        }
    }
}
window.onload = prepareGallery;