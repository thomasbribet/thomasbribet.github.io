// HIGHLIGHT CURRENT PAGE 

var highlight = function() {
    var navPage = document.querySelectorAll("nav a");
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

// DROPDOWN MENU 

var btn = document.querySelector('#dropdownMenuLogo');
var menu = document.querySelector('#dropdownMenu div');
btn.addEventListener('click', () => {
    menu.classList.toggle('visible');
});

////////////////////////////////////////////////////////////////////////
