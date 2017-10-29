function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(targetElement === parent.lastChild){
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

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

function prepaerPlaceholder(){
    if(!document.getElementById){
        return false;
    }
    if(!document.getElementsByTagName){
        return false;
    }
    if(!document.getElementById("imagegallery")){
        return false;
    }
    var placeholder = document.createElement("img");
    placeholder.setAttribute("id","placeholder");
    placeholder.setAttribute("src","images/placeholder.jpg");
    placeholder.setAttribute("alt","my image gallery");
    var description = document.createElement("p");
    description.setAttribute("id","description");
    var text = document.createTextNode("Choose a image");
    description.appendChild(text);
    var gallery = document.getElementById("imagegallery");
    insertAfter(placeholder,gallery);
    insertAfter(description,placeholder);
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

addLoadEvent(prepaerPlaceholder);
addLoadEvent(prepareGallery);