function calculMoyenne() {
    let negatif;
    let nombre;
    let nbreEntier;
    let entier;
    let somme;
    let moyenne;
    let estNum;
    let tab = [];

    somme = 0;
    nbreEntier = 0;
    negatif = false;
        
    while (!negatif) {
        nombre = prompt('Entrer un nombre entier');
        estNum = !isNaN(nombre);
        if (estNum) {
            entier = parseInt(nombre);
            if (entier >= 0) {
                somme = somme + entier;
                nbreEntier = nbreEntier + 1
            } else {
                negatif = true;
                moyenne = somme / nbreEntier;
                alert('Le nombre de valeurs entrées est '+nbreEntier+' et la moyenne est '+moyenne);
            }
        } else {
            alert('Le nombre entré n\'est pas un nombre entier');
        }
    }
}