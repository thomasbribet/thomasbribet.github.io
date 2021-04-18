// HIGHLIGHT CURRENT PAGE 

var highlight = function() {
    var navPage = document.querySelectorAll("nav .page");
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

// INCREMENTATION COMPETENCES 


var hoursOfPractice = function(langId, start, incrementInHours) { 
    var badge = document.getElementById(langId);
    var startDate = new Date(start);
    var currentDate = new Date();

    var interval = currentDate.getTime() - startDate.getTime();
    var intervalInHours = (interval/(3.6e+6)).toFixed(2); // number of hours since dateStart
    var intervalInWeeks = (intervalInHours/24)/7;

    var totalHours = Math.round(intervalInWeeks*incrementInHours) + " h"; // number of hours add each week since dateStart (estimation)

    if(totalHours<200) {
        badge.innerHTML = totalHours;
        badge.classList.add('bg-success');
    }
    else if(totalHours>200 && totalHours<5000) {
        badge.innerHTML = totalHours;
        badge.classList.add("bg-primary");
    }
    else if(totalHours>5000 && totalHours<10000) {
        badge.innerHTML = totalHours;
        badge.classList.add('bg-danger');
    }
    else if(totalHours>10000) {
        badge.innerHTML = totalHours;
        badge.classList.add('bg-dark');
    }
    else {
        badge.innerHTML = totalHours;
        badge.classList.add('bg-warning');

    console.log(badge);
}


