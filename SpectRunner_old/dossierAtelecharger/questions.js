/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */
var tailleString = function (texte) {
    return texte.length;
}
var remplaceECar = function (texte) {
    return texte.replace("e", " ");
}
var concatString = function (texte1, texte2) {
    return texte1.concat(texte2);
}
var afficherCar5 = function (texte) {
    return texte.charAt(4);
}
var afficher9Car = function (texte) {
    return texte.substring(0, 8);
}
var majusculeString = function (texte) {
    return texte.toUpperCase();
}
var minusculeString = function (texte) {
    return texte.toLowerCase();
}
var SupprEspaceString = function (texte) {
    return texte.trim();
}
var IsString = function (texte) {
    let isStr = false;
    if (typeof texte === 'string') {
        isStr = true;
    }
    return isStr;
}

var AfficherExtensionString = function (texte) {
    let pos;
    pos = texte.lastIndexOf('.');
    return texte.slice(pos + 1, texte.length);
}
var NombreEspaceString = function (texte) {
    let cpt = 0;
    for (i = 0; i < texte.length; i++) {
        if (texte.charAt(i) === ' ') {
            cpt++;
        }
    }
    return cpt;
}
var InverseString = function (texte) {
    return texte.split("").reverse().join("");
}

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
var calculPuissance = function (x, y) {
    return Math.pow(x, y);
}
var valeurAbsolue = function (nombre) {
    return Math.abs(nombre);
}
var valeurAbsolueArray = function (array) {
    let monTabAbs = [];
    for (i = 0; i < array.length; i++) {
        monTabAbs[i] = Math.abs(array[i]);
    }
    return monTabAbs;
}
var sufaceCercle = function (rayon) {
    return Math.ceil(Math.PI * Math.pow(rayon, 2));
}
var hypothenuse = function (ab, ac) {
    return Math.sqrt(Math.pow(ab, 2) + Math.pow(ac, 2));
}
var calculIMC = function (poids, taille) {
    let imc;
    imc = poids / Math.pow(taille, 2);
    return imc.toFixed(2);
}
