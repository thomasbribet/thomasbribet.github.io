// DROPDOWN MENU

dropdown('#detailsFormationBtn', '#detailsFormation', "d-none");
dropdown('#xpPro', '#xpPro section', 'visible');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESS BARS DETAILS FORMATION (page parcours)

var detailsFormation = function (courseName, courseHtmlId) {

  fetch("/js/edt.json")
    .then((res) => {
      return res.json();
    }).then((data) => {
      var planning = data;
      var allDurations = []; // durée totale de chaque matière, en heures
      var untilNowDurations = []; // durée totale de chaque matière jusqu'à la date du jour
      
      for (let i = 0; i < planning.length; i++) {
        // liste des cours ----------------------------------
        // console.log(planning[i].Subject);
        // -------------------------------------------------- 
        if (planning[i].Subject === courseName) {
          // durée totale (en heures) de la matière passée en parametre
          var duration = planning[i]["End Time"].substring(0, 2) - planning[i]["Start Time"].substring(0, 2);
          allDurations.push(duration);

          // Nombre d'heures de cours jusqu'à aujourd'hui, pour la matière passée en paramètre
          var today = new Date();
          // conversion de la date du cours en ms
          var courseDate = Date.parse(planning[i]["End Date"]);
          if (courseDate <= today.getTime()) {
            untilNowDurations.push(duration);
          }
        }
        // total d'heures pour la matière passée en parametre
        var total = 0;
        for (let j = 0; j < allDurations.length; j++) {
          total += allDurations[j];
        }

        // nombre d'heures de la matère jusqu'à aujourd'hui
        var enCours = 0;
        for (let k = 0; k < untilNowDurations.length; k++) {
          enCours += untilNowDurations[k];
        }

        // arrondi de l'avancement (en pourcentage) de la matière
        var percent = Math.round((enCours / total) * 100);

        // intégration dans la page html
        var displayHours = document.querySelector(`#${courseHtmlId}`);
        displayHours.innerHTML = `${enCours}/${total}h`;
        var displayHoursInString = `width: ${percent.toString()}%;`;
        displayHours.setAttribute("style", `${displayHoursInString} background-color: #939597;`);

      }

      
    })
}

detailsFormation("UML", "uml");
detailsFormation("Conduite Projet", "conduiteProjet");
detailsFormation("Méthodes Agiles", "methodesAgiles");
detailsFormation("Mise en production", "miseEnProd");
detailsFormation("Design et Interface", "designInterface");
detailsFormation("Sécurité applicative", "secuAppli");

detailsFormation("Développement Web", "devWeb");
detailsFormation("BDD Administration", "bddAdm");
detailsFormation("BDD Requêtes", "bddReq");
detailsFormation("Architecture REST", "archiRest");
detailsFormation("GIT", "git");
detailsFormation("TEST et bonnes pratiques", "tests");
detailsFormation("NODE JS", "nodejs");

detailsFormation("Interface Java FX/JDBC", "javafx");
detailsFormation("SYMF", "symf");
detailsFormation("ANGULAR", "angular");
detailsFormation("IONIC", "ionic");


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PROGRESS BAR FORMATION (page parcours)

var progressFormation = function () {
  var endDate = new Date("2021/09/15"); // Fin formation
  var startDate = new Date("2021/02/22"); // Début formation
  var currentDate = new Date();

  var total = startDate.getTime() - endDate.getTime();
  var current = startDate.getTime() - currentDate.getTime();
  var percentageProgress = Math.round((current / total) * 100);

  var percentString = "width: " + percentageProgress.toString() + "%";
  var progressBar = document.getElementById("progressFormation");
  progressBar.setAttribute("style", percentString);
}

progressFormation();
