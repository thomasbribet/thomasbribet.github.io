// DROPDOWN MENU (toutes pages)

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

// parcours
dropdown('#detailsFormation', '#detailsFormation div');
dropdown('#formations', '#formations div');

////////////////////////////////////////////////////////////////////////

// ROUTEUR (toutes les pages)

var router = function() {
    var currentLocation = window.location.hash.substring(1);
    var pageContent = document.querySelectorAll(`div.pageContent`);
    if(currentLocation === "") {
        currentLocation = "profil";
    }
    for(let i=0; i<pageContent.length; i++){
        if(pageContent[i].id !== currentLocation) {
            pageContent[i].classList.add('hide');
        } else {
            pageContent[i].classList.remove('hide');
        }
    }
} 

////////////////////////////////////////////////////////////////////////

// HIGHLIGHT CURRENT PAGE (toutes pages)

var highlight = function() {
    var navPage = document.querySelectorAll("nav .page");
    var currentLocation = location.hash.substring(1);
    if(currentLocation === "") {
        currentLocation = "profil";
    }
    for(let i = 0; i<navPage.length; i++) {
        if(navPage[i].innerHTML === currentLocation.toUpperCase()) {
            navPage[i].id = "activeNavPage";
            router();
        } else {
            navPage[i].id = "";
        }
    }
}
highlight();
window.addEventListener("hashchange", highlight);

////////////////////////////////////////////////////////////////////////

// INCREMENTATION COMPETENCES (page profil)

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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESS BAR FORMATION (page parcours)

var progressFormation = function() {
    var endDate = new Date("2021/09/15"); // Fin formation
    var startDate = new Date("2021/02/22"); // Début formation
    var currentDate = new Date();
    
    var total = startDate.getTime() - endDate.getTime();
    var current = startDate.getTime() - currentDate.getTime();
    var percentageProgress = Math.round((current/total)*100);
    var percentString = "width: " + percentageProgress.toString() + "%"; // conversion en String avant intégration dans "style"
    
    var progressBar = document.getElementById("progressFormation");
    progressBar.setAttribute("style", percentString);
}

progressFormation();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESS BAR DETAILS FORMATION (page parcours)

// var progressDetails = function() {

// }
