function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initate() {
    var style1 = document.getElementById("first-button-more");
     var style1 = document.getElementById("first-button-less");

    style1.onclick = swapStyleSheet("internalviewmore.css");
    style1.onclick = swapStyleSheet("internalstyle.css");
}