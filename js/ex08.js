function jourDeLaSemaine() {
    let semaine = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let aujourdhui = new Date();

    alert(semaine[aujourdhui.getDay()]);
}