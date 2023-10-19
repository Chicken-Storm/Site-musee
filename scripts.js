
window.onload = function() {
    var dateActuelle = new Date();
    var heureActuelle = dateActuelle.getHours();
    var minutesActuelles = dateActuelle.getMinutes();
    var jourActuel = dateActuelle.getDay();

    var estOuvert = false;

    // Vérifier si aujourd'hui n'est pas dimanche
    if (jourActuel !== 0) {
        // Vérifier les horaires du matin
        if ((heureActuelle >= 10 && heureActuelle < 12) || 
            // Vérifier les horaires de l'après-midi
            (heureActuelle >= 14 && (heureActuelle < 17 || (heureActuelle == 17 && minutesActuelles <= 30)))) {
            estOuvert = true;
        }
    }

    var etatOuvertureElement = document.getElementById('etatOuverture');

    if (estOuvert) {
        etatOuvertureElement.innerHTML = '<img src="images/cercle_vert_en_ligne.png" alt="Cercle en Vert pour indiquer si le musée est ouvert ou non"> Ouvert en ce moment';
    } else {
        etatOuvertureElement.innerHTML = '<img src="images/cercle_rouge.png" alt="Cercle en Rouge pour indiquer que le musée est fermé"> Le musée est fermé';
    }
}

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("image");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 6000); 
}