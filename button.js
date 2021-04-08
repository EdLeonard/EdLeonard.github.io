function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function viewmore1() {
    var style1 = document.getElementById("first-button-more");

    style1.onclick = swapStyleSheet("internalviewmore.css");
} 

function viewless1() {
        var style2 = document.getElementById("first-button-less");

        style2.onclick = swapStyleSheet("internalstyle.css");
}

function viewmore2() {
    var style1 = document.getElementById("second-button-more");

    style1.onclick = swapStyleSheet("internalviewmore.css");
} 

function viewless2() {
        var style2 = document.getElementById("second-button-less");

        style2.onclick = swapStyleSheet("internalstyle.css");
}
