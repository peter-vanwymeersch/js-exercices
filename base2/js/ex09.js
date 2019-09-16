function testWhile() {
    let chaine;
    let position;
    let trouve;

    trouve = false;
    while (!trouve) {
        chaine = prompt('Saisir une chaîne de caractères contenant la lettre p');
        position = chaine.indexOf('p');
        if (position >= 0) {
            trouve = true;
        } else {

        }
    }
    alert('\"'+chaine+'\"');
}