// HIGHLIGHT CURRENT PAGE 

var highlight = function() {
    var navPage = document.querySelectorAll(".navbar a");
    var currentLocation = location.hash.substring(1);
    for(let i = 0; i<navPage.length; i++) {
        if(navPage[i].innerHTML === currentLocation.toUpperCase()) {
            navPage[i].id = "activeNavPage";
        } else {
            navPage[i].id = "";
        }
    }
}

window.addEventListener("hashchange", highlight);

////////////////////////////////////////////////////////////////////////

