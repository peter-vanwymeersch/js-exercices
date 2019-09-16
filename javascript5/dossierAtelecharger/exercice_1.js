function appel() {   
        //alert(tailleString('Ce texte à une certaine taille'));
        //alert(remplaceECar('Ce texte à une certaine taille'));
        //alert(concatString('Le javascript est ', 'super'));
        //alert(afficherCar5('Ces exercices sont super!'));
        //alert(afficher9Car('Je dirait même qu\'ils sont excellent'));
        //alert(majusculeString('Un autre excellent exercice'));
        //alert(minusculeString('Celui ci aussi!'));
        //alert(SupprEspaceString(' Rome ne s\'est pas construite en un jour '));
        //alert(IsString('Est ce une chaine de caractères ?'));
        //alert(IsString(4));
        //alert(AfficherExtensionString('images/photo01.jpg'));
        //alert(NombreEspaceString('Sire ouvrez on en a gros!'));
        //alert(InverseString('Après demain, à partir d\'aujourd\'hui?'));
        //alert(calculPuissance(2, 3));
        //alert(valeurAbsolue(-5));
        //alert(valeurAbsolueArray([-5,-50,-25,-568]));
        //alert(sufaceCercle(5));
        //alert(hypothenuse(5, 8));
        alert(calculIMC(65, 1.75));
    }

function tailleString(chaineCar) {
    return chaineCar.length;
}

function remplaceECar(chaineCar) {
    return chaineCar.replace("e", " ");
}

function concatString(chaineCar1, chaineCar2) {
    return chaineCar1.concat(chaineCar2);
}

function afficherCar5(chaineCar) {
    return chaineCar.charAt(4);
}

function afficher9Car(chaineCar) {
    return chaineCar.substring(0, 8);
}

function majusculeString(chaineCar) {
    return chaineCar.toUpperCase();
}

function minusculeString(chaineCar) {
    return chaineCar.toLowerCase();
}

function SupprEspaceString(chaineCar) {
    return chaineCar.trim();
}

function IsString(chaineCar) {
    let isStr = false;
    if (typeof chaineCar === 'string') {
        isStr = true;
    }
    return isStr;
}

function AfficherExtensionString(chaineCar) {
    let pos;
    pos = chaineCar.lastIndexOf('.');
    return chaineCar.slice(pos + 1, chaineCar.length);
}

function NombreEspaceString(chaineCar) {
    let cpt = 0;
    for (i = 0; i < chaineCar.length; i++) {
        if (chaineCar.charAt(i) === ' ') {
            cpt++;
        }
    }
    return cpt;
}

function InverseString(chaineCar) {
    return chaineCar.split("").reverse().join("");
}

function calculPuissance(arg1, arg2) {
    return Math.pow(arg1, arg2);
}

function valeurAbsolue(nbre) {
    return Math.abs(nbre);
}

function valeurAbsolueArray(monTab) {
    let monTabAbs = [];
    for (i = 0; i < monTab.length; i++) {
        monTabAbs[i] = Math.abs(monTab[i]);
    }
    return monTabAbs;
}

function sufaceCercle(rayon) {
    return Math.ceil(Math.PI * Math.pow(rayon, 2));
}

function hypothenuse(largeur, longueur) {
    return Math.sqrt(Math.pow(largeur, 2) + Math.pow(longueur, 2));
}

function calculIMC(poids, taille) {
    let imc;
    imc = poids / Math.pow(taille, 2);
    return imc.toFixed(2);
}




