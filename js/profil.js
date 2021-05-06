// INCREMENTATION COMPETENCES (page profil)

var hoursOfPractice = function (langId, start, incrementInHours) { // incrementInHours = hours of practice add each week
    var badgeHours = document.getElementById(`${langId}`);
    var startDate = new Date(start);
    var currentDate = new Date();
  
    var interval = currentDate.getTime() - startDate.getTime();
    var intervalInHours = (interval / (3.6e+6)).toFixed(2); // number of hours since dateStart
    var intervalInWeeks = (intervalInHours / 24) / 7;
  
    var totalHours = Math.round(intervalInWeeks * incrementInHours); // number of practice hours add each week since dateStart (estimation)
    badgeHours.innerHTML = `${totalHours}h`;
  
    if (totalHours < 50) { // débutant jusqu'à 50h
      badgeHours.classList.add('bg-success');
    }
    else if (totalHours > 50 && totalHours < 100) { // intermédiare jusqu'à 100h
      badgeHours.classList.add('bg-primary')
    }
    else if (totalHours > 100 && totalHours < 300) { // à l'aise jusqu'à 300h
      badgeHours.classList.add('bg-warning', 'text-dark')
    }
    else if (totalHours > 300 && totalHours < 1000) { // confirmé jusqu'à 1000h
      badgeHours.classList.add('bg-danger')
    }
    else if (totalHours > 1000) { // expert au-delà 1000h
      badgeHours.classList.add('bg-dark')
    }
  
  }
  hoursOfPractice('html', '2020/03/01', 6)
  hoursOfPractice('css', '2020/03/08', 6);
  hoursOfPractice('js', '2021/02/01', 8);
  hoursOfPractice('sql', '2020/04/01', 1.5);
  hoursOfPractice('php', '2020/04/01', 0.5);
  hoursOfPractice('java', '2020/11/01', 2.5)