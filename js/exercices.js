function exercice_01() {
    var langue;
    //
    langue = "fr";
    window.alert("La langue est " + langue);
}
/*---------------------------------------------------------------------*/
function exercice_02() {
    var nom, prenom, ville;
    //
    nom = "Doe";
    prenom = "John";
    ville = "New-York";
    window.alert("Nom : " + nom + "\nPrénom : " + prenom + "\nVille : " + ville);
}
/*---------------------------------------------------------------------*/
function exercice_03() {
    var prenom;
    //
    prenom = window.prompt("Ton prénom ?");
    window.alert("Bonjour, " + prenom);
}
/*---------------------------------------------------------------------*/
function exercice_04() {
    var nom, prenom, ville;
    //
    nom = window.prompt("Ton nom ?");
    prenom = window.prompt("Ton prénom ?");
    ville = window.prompt("Ta ville ?");
    window.alert("Nom : " + nom + "\nPrénom : " + prenom + "\nVille : " + ville);
}
/*---------------------------------------------------------------------*/
function exercice_05() {
    var nbre1, nbre2, entier1, entier2, resultat;
    //
    nbre1 = window.prompt("Ton premier nombre à virgule ?");
    nbre2 = window.prompt("Ton deuxième nombre à virgule ?");
    entier1 = parseInt(nbre1);
    entier2 = parseInt(nbre2);
    resultat = entier1 * entier2;
    window.alert("Résultat de la multiplication des parties entières = " + resultat);
}
/*---------------------------------------------------------------------*/
function exercice_06() {
    var nbre1, nbre2, resultat;
    //
    nbre1 = window.prompt("Ton premier nombre à virgule ?");
    nbre2 = window.prompt("Ton deuxième nombre à virgule ?");
    resultat = nbre1 % nbre2;
    window.alert("Le reste de la division est " + resultat);
}
/*---------------------------------------------------------------------*/
function exercice_07() {
    var pointure, annee, resultat;
    //
    pointure = window.prompt("Ta pointure ?");
    annee = window.prompt("Ton année naissance ?");
    resultat = fct_07(pointure, annee);
    window.alert("Le resultat est " + resultat);
}
function fct_07(a, b) {
    return (((a * 2) + 5) * 50) - b + 1796;  
}
/*---------------------------------------------------------------------*/
function exercice_08(age) {
    /*const value = document.getElementById('age').value*/
    let txt;
    if (age > 18) {
        txt = "Vous êtes majeur";
    } else {
        txt = "Vous êtes mineur";
    }
    /*document.getElementById('resultat').textContent = txt;*/
    document.getElementById('resultat').innerHTML = txt;
}