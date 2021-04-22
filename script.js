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

var hoursOfPractice = function(langId, start, incrementInHours) { // incrementInHours = hours of practice add each week
    var badge = document.getElementById(langId);
    var startDate = new Date(start);
    var currentDate = new Date();

    var interval = currentDate.getTime() - startDate.getTime();
    var intervalInHours = (interval/(3.6e+6)).toFixed(2); // number of hours since dateStart
    var intervalInWeeks = (intervalInHours/24)/7;

    var totalHours = Math.round(intervalInWeeks*incrementInHours); // number of practice hours add each week since dateStart (estimation)
    badge.innerHTML = totalHours + " h";

    if(totalHours<200) { // débutant jusqu'à 200h
        badge.classList.add('bg-success');
    }
    else if(totalHours>200 && totalHours<5000) { // intermédiare jusqu'à 5.000h
        badge.classList.add('bg-primary')
    }
    else if(totalHours>5000 && totalHours<10000) { // confirmé jusqu'à 10.000h
        badge.classList.add('bg-danger')
    }
    else if(totalHours>10000) { // expert au-delà 10.000h
        badge.classList.add('bg-dark')
    }
   
}

hoursOfPractice('html', '2020/03/01', 6); 
hoursOfPractice('css', '2020/03/08', 6);
hoursOfPractice('js', '2021/03/01', 8);
hoursOfPractice('sql', '2020/04/01', 1);
hoursOfPractice('php', '2020/04/01', 0.5);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////:


