// HIGHLIGHT CURRENT PAGE 

var highlight = function() {
    var navPage = document.querySelectorAll("#classicMenu div a");
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

var dropdown = function(btnMenu, hiddenMenu) {
    var btn = document.querySelector(btnMenu);
    var menu = document.querySelector(hiddenMenu);
    btn.addEventListener('click', () => {
        menu.classList.toggle('visible');
    });
};
// navbar 
dropdown('#dropdownMenuLogo', '#dropdownMenu div');
// profil 
dropdown('#creatif', '#creatif div');
dropdown('#adapt', '#adapt div');
dropdown('#rigueur', '#rigueur div');

////////////////////////////////////////////////////////////////////////
