var gridresize = function(){
    var gw = $(".grid").width();
    $(".grid").css("height", gw + "px");
    var gvw = gw * 1.3;
    $(".grid.vertical").css("height", gvw + "px");
    var gtw = $(".gridthirds").width();
    $(".gridthirds").css("height", gtw + "px");
    var gvh = gw * 0.66;
    $(".grid.horizontal").css("height", gvh + "px");
  }

var darkmode = function(){
    $("body").toggleClass("dark");
    $("#nav").toggleClass("darknav");
    $("#centercontainer").toggleClass("darkcenter");
    if (sessionStorage.dark == undefined || sessionStorage.dark == "0") {
        $("#darkindicator").html("Enable Dark Mode");
    }
    else {
        $("#darkindicator").html("Disable Dark Mode");
    }
}
            
$(document).ready(function(){
    gridresize();
    if (sessionStorage.dark != undefined){
        if (sessionStorage.dark == "1"){
            darkmode();
        }
    }
    else {
        var now = new Date();
        if (now.getHours() >= 18 || now.getHours() <= 6){
            sessionStorage.dark = "1";
            darkmode();
        }
    }
    $(".grid").on("touchstart", function(){
            $(".filterlayer", this).fadeIn();
            $(".title", this).fadeIn();
    })
    $(".gridthirds").on("touchstart", function(){
            $(".filterlayer", this).fadeIn();
            $(".title", this).fadeIn();
    })
    $("#linkedin").on("click", function(){
        window.open("https://linkedin.com/in/kai-vincent", "_blank");
    })
    $("#instagram").on("click", function(){
        window.open("https://www.instagram.com/kaimvincent/", "_blank");
    })
    if (window.matchMedia("(hover: none)").matches) {
        $(".engsublink").css({
            "display": "block",
            "position": "static",
            "opacity": "1"
        })
        $("#nav a").slice(1).css("color", "white");
        $("#darkindicator").css("color", "white");
    }
    $("#darkindicator").on("click", function(){
        if (sessionStorage.dark == undefined || sessionStorage.dark == "0") {
        sessionStorage.dark = "1";
        }
        else {
            sessionStorage.dark = "0";
        }
        darkmode();
    });
})

$(window).resize(function(){
    gridresize();
})