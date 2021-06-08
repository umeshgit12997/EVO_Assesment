function openListNav() {
    document.getElementById("right-sidebar-content").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_div");
    var y = document.getElementById("create_div");
    var z = document.getElementById("Details_div");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    }
}
function editNav() {
    document.getElementById("right-sidebar-content").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_div");
    var y = document.getElementById("create_div");
    var z = document.getElementById("Details_div");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}
function editNavAppVers() {
    document.getElementById("right-sidebar-content").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_div");
    //var y = document.getElementById("create_div");
    //var z = document.getElementById("Details_div");
    if (x.style.display === "none") {
        x.style.display = "block";      
    }
}
function openListNav11() {
    document.getElementById("right-sidebar-content").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_div");
    //var y = document.getElementById("create_div");
    var z = document.getElementById("Details_div");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        //y.style.display = "none";
    }
}
function editNav11() {
    document.getElementById("right-sidebar-content").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_div");
    //var y = document.getElementById("create_div");
    var z = document.getElementById("Details_div");
    if (x.style.display === "none") {
        x.style.display = "block";
        //y.style.display = "none";
        z.style.display = "none";
    }
}


function openEQNav() {
    document.getElementById("right-sidebar-contentEQ").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_divEQ");
    var y = document.getElementById("create_divEQ");
    var z = document.getElementById("Details_divEQ");
    if (y.style.display === "none") {
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    }
}
function editEQNav() {
    document.getElementById("right-sidebar-contentEQ").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_divEQ");
    var y = document.getElementById("create_divEQ");
    var z = document.getElementById("Details_divEQ");
    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}
function ListEQNav() {
    document.getElementById("right-sidebar-contentEQ").style.width = "300px";
    document.getElementById("content-main").style.marginRight = "300px";
    var x = document.getElementById("edit_divEQ");
    var y = document.getElementById("create_divEQ");
    var z = document.getElementById("Details_divEQ");
    if (z.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";
    }
}
function closeEQNav() {
    document.getElementById("right-sidebar-contentEQ").style.width = "0";
    document.getElementById("content-main").style.marginRight = "0";
}

function BrowserValid() {

    var nAgt = navigator.userAgent;
    var browserName = navigator.appName;
    if (nAgt.indexOf("Chrome") != -1) {
        browserName = "Chrome";
        $(".browserchk").attr("type", "text");
        $(".browserchk").addClass("pwd");
        return browserName;
    }
    else {
        browserName = "Others";
        $(".browserchk").attr("type", "password");
        $(".browserchk").removeClass("pwd");
        return browserName;
    }
};