function faireChoix() {
    let choix;

    choix = prompt('Choisir entre 1, 2 et 3');
    switch (choix) {
        case '1':
            alert('1. Merci');
            break;
        case '2':
            alert('2. Bonjour');
            break;
        case '3':
            alert('3. Au revoir');
            break;
        default:
            alert('Pardon, que voulez-vous?');
      }
}