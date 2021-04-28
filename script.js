// FOOTER COPYRIGHT DATE

var copyDate = function() {
    var currentYear = new Date();
    document.getElementById('copyDate').innerHTML = currentYear.getFullYear();
}
copyDate();

////////////////////////////////////////////////////////////////////////

// DROPDOWN MENU (toutes pages)

var dropdown = function(btnMenu, hiddenMenu, classToToggle) {
    var btn = document.querySelector(btnMenu);
    var menu = document.querySelector(hiddenMenu);
    btn.addEventListener('click', () => {
        menu.classList.toggle(classToToggle);
    });
    menu.addEventListener('click', () => {
        menu.classList.toggle(classToToggle);
    })
};

// navbar 
dropdown('#dropdownMenuLogo', '#dropdownMenu div', 'visible');

// parcours
// dropdown('#detailsFormation', '#detailsFormation div');
dropdown('#xpPro', '#xpPro section', 'visible');

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

const planning = [
    {
      "Subject": "Accueil/Decouverte de la formation",
      "Start Date": "2/22/2021",
      "Start Time": "09:00 AM",
      "End Date": "2/22/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Internet et réseaux",
      "Start Date": "2/22/2021",
      "Start Time": "01:00 PM",
      "End Date": "2/22/2021",
      "End Time": "04:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Internet et réseaux",
      "Start Date": "2/23/2021",
      "Start Time": "09:00 AM",
      "End Date": "2/23/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Internet et réseaux",
      "Start Date": "2/23/2021",
      "Start Time": "01:00 PM",
      "End Date": "2/23/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "2/24/2021",
      "Start Time": "09:00 AM",
      "End Date": "2/24/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "2/24/2021",
      "Start Time": "01:00 PM",
      "End Date": "2/24/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "2/25/2021",
      "Start Time": "09:00 AM",
      "End Date": "2/25/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "GIT",
      "Start Date": "2/25/2021",
      "Start Time": "01:00 PM",
      "End Date": "2/25/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "2/26/2021",
      "Start Time": "09:00 AM",
      "End Date": "2/26/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "GIT",
      "Start Date": "2/26/2021",
      "Start Time": "01:00 PM",
      "End Date": "2/26/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/1/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/1/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/1/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/1/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "3/2/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/2/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/2/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/2/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/3/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/3/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/3/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/3/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/4/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/4/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/4/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/4/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/5/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/5/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/5/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/5/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGLAIS",
      "Start Date": "3/8/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/8/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/8/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/8/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/9/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/9/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/9/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/9/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/10/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/10/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "BDD Administration",
      "Start Date": "3/10/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/10/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/11/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/11/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/11/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/11/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/12/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/12/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/12/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/12/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/15/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/15/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/15/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/15/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/16/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/16/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "GIT",
      "Start Date": "3/16/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/16/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/17/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/17/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/17/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/17/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/18/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/18/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/18/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/18/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/19/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/19/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/19/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/19/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "3/22/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/22/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "GIT",
      "Start Date": "3/22/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/22/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/23/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/23/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/23/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/23/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/24/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/24/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Développement Web",
      "Start Date": "3/24/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/24/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/25/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/25/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "BDD Requêtes",
      "Start Date": "3/25/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/25/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "GIT",
      "Start Date": "3/26/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/26/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "3/26/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/26/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGLAIS",
      "Start Date": "3/29/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/29/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "3/29/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/29/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "3/30/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/30/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "3/30/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/30/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "3/31/2021",
      "Start Time": "09:00 AM",
      "End Date": "3/31/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "3/31/2021",
      "Start Time": "01:00 PM",
      "End Date": "3/31/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "4/1/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/1/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "4/1/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/1/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "4/2/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/2/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Conduite Projet",
      "Start Date": "4/2/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/2/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "4/6/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/6/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Architecture REST",
      "Start Date": "4/6/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/6/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/7/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/7/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/7/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/7/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/8/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/8/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/8/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/8/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/9/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/9/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/9/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/9/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/12/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/12/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/12/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/12/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/13/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/13/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "UML",
      "Start Date": "4/13/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/13/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/14/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/14/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/14/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/14/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "4/15/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/15/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "4/15/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/15/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Méthodes Agiles",
      "Start Date": "4/16/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/16/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "4/16/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/16/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "4/19/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/19/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGLAIS",
      "Start Date": "4/19/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/19/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "4/20/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/20/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "4/20/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/20/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "4/21/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/21/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "4/21/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/21/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Design et Interface",
      "Start Date": "4/22/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/22/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "PHP/SYMF",
      "Start Date": "4/22/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/22/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "4/23/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/23/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "4/23/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/23/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "4/26/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/26/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "4/26/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/26/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Design et Interface",
      "Start Date": "4/27/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/27/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Design et Interface",
      "Start Date": "4/27/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/27/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Design et Interface",
      "Start Date": "4/28/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/28/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Design et Interface",
      "Start Date": "4/28/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/28/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "PHP/SYMF",
      "Start Date": "4/29/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/29/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "PHP/SYMF",
      "Start Date": "4/29/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/29/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Veille Techno",
      "Start Date": "4/30/2021",
      "Start Time": "09:00 AM",
      "End Date": "4/30/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Veille Techno",
      "Start Date": "4/30/2021",
      "Start Time": "01:00 PM",
      "End Date": "4/30/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/3/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/3/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/3/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/3/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/4/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/4/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/4/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/4/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/5/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/5/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/5/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/5/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "TEST et bonnes pratiques",
      "Start Date": "5/6/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/6/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "5/6/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/6/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "PHP/SYMF",
      "Start Date": "5/7/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/7/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "PHP/SYMF",
      "Start Date": "5/7/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/7/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/10/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/10/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "ANGLAIS",
      "Start Date": "5/10/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/10/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/11/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/11/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/11/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/11/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/12/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/12/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/12/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/12/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/14/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/14/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "SYMF",
      "Start Date": "5/14/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/14/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Veille Techno",
      "Start Date": "5/17/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/17/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Veille Techno",
      "Start Date": "5/17/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/17/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/18/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/18/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/18/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/18/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/19/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/19/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/19/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/19/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "5/20/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/20/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/20/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/20/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/21/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/21/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/21/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/21/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/25/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/25/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "5/25/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/25/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "NODE JS",
      "Start Date": "5/26/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/26/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "5/26/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/26/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "5/27/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/27/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "ANGLAIS",
      "Start Date": "5/27/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/27/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "5/28/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/28/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "5/28/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/28/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "5/31/2021",
      "Start Time": "09:00 AM",
      "End Date": "5/31/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "TRE",
      "Start Date": "5/31/2021",
      "Start Time": "01:00 PM",
      "End Date": "5/31/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "6/1/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/1/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "6/1/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/1/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "6/2/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/2/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "ANGULAR",
      "Start Date": "6/2/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/2/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/3/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/3/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/3/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/3/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/4/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/4/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/4/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/4/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/7/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/7/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "IONIC",
      "Start Date": "6/7/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/7/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/8/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/8/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/8/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/8/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "6/9/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/9/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "6/9/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/9/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "6/10/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/10/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "6/10/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/10/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "6/11/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/11/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Interface Java FX/JDBC",
      "Start Date": "6/11/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/11/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "6/14/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/14/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "6/14/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/14/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "6/15/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/15/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Mise en production",
      "Start Date": "6/15/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/15/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "6/16/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/16/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "6/16/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/16/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/17/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/17/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/17/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/17/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/18/2021",
      "Start Time": "09:00 AM",
      "End Date": "6/18/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Sécurité applicative",
      "Start Date": "6/18/2021",
      "Start Time": "01:00 PM",
      "End Date": "6/18/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT L",
      "Location": "Libre",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "8/30/2021",
      "Start Time": "09:00 AM",
      "End Date": "8/30/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "8/30/2021",
      "Start Time": "01:00 PM",
      "End Date": "8/30/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "TUT S",
      "Location": "Site",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "8/31/2021",
      "Start Time": "09:00 AM",
      "End Date": "8/31/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "8/31/2021",
      "Start Time": "01:00 PM",
      "End Date": "8/31/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/1/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/1/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/1/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/1/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/2/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/2/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/2/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/2/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/3/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/3/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/3/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/3/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/6/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/6/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/6/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/6/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/7/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/7/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/7/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/7/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/8/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/8/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/8/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/8/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/9/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/9/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/9/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/9/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/10/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/10/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Préparation certification",
      "Start Date": "9/10/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/10/2021",
      "End Time": "05:00 PM",
      "All Day Event": false,
      "Description": "AF",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Certification",
      "Start Date": "9/13/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/13/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Certification",
      "Start Date": "9/13/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/13/2021",
      "End Time": "04:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Certification",
      "Start Date": "9/14/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/14/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Certification",
      "Start Date": "9/14/2021",
      "Start Time": "01:00 PM",
      "End Date": "9/14/2021",
      "End Time": "04:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    },
    {
      "Subject": "Certification",
      "Start Date": "9/15/2021",
      "Start Time": "09:00 AM",
      "End Date": "9/15/2021",
      "End Time": "12:00 PM",
      "All Day Event": false,
      "Description": "RGP",
      "Location": "-",
      "Private": true
    }
  ]

const longueurPlanning = planning.length;
var dureeTotale = []; // durée totale de chaque matière, en heures
var dureeToday = []; // durée totale de chaque matière jusqu'à la date du jour

var detailsFormation = function(nomCours) {
    for(let i=0; i<longueurPlanning; i++) { 

        if(planning[i].Subject === nomCours) {
            // durée de chaque cours
            var duration = planning[i]["End Time"].substring(0,2) - planning[i]["Start Time"].substring(0,2); 
            // on ajoute cette durée au tableau
            dureeTotale.push(duration); 

            console.log(planning[i]["End Date"].getTime());
            var today = new Date();
            console.log(today.getTime());
            if(planning[i]["End Date"] <= today) {
                dureeToday.push(duration);
                // console.log(dureeToday);
            }
        }
    }
    var total = 0;
    for(let j=0; j<dureeTotale.length; j++) {
        // on ajoute les durées du tableau entre elles
        total += dureeTotale[j];
    }
    // affichage du total d'heures pour la matière passée en paramètre
    console.log(total);

    var enCours = 0;
    for(let k=0; k<dureeToday.length; k++) {
        enCours += dureeToday[k];
    }
    // console.log(enCours);
}

detailsFormation("UML");

