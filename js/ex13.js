function calculIMC() {
    let taille;
    let poids;
    let indice;

    poids = prompt('Votre poids en kg');
    taille = prompt('Votre taille en mètre');

    indice = parseFloat(poids) / (parseFloat(taille) * parseFloat(taille));
    indice = parseFloat(indice).toFixed(2);
    alert('Votre IMC est de '+indice);

    if (indice < 16.5) {
        alert('Catégorie: dénutrition ou famine');
    } else if (indice >= 16.5 && indice < 18.5) {
        alert('Catégorie: maigreur');
    } else if (indice >= 18.5 && indice < 25) {
        alert('Catégorie: corpulence normale');
    } else if (indice >= 25 && indice < 30) {
        alert('Catégorie: surpoids');
    } else if (indice >= 30 && indice < 35) {
        alert('Catégorie: obésité modérée');
    } else if (indice >= 35 && indice < 40) {
        alert('Catégorie: obésité sévère');
    } else {
        alert('Catégorie: obésité morbide');
    }
}