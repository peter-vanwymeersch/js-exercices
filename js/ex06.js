let tab = [-2, 1, 4];

function soustrait(x) {
    let resultat;
    resultat = x - 2;
    if (resultat >= 0) {
        return resultat;
    } else {
        return "Nombre négatif";
    }
}
function affiche() {
    alert('Résultat de soustraire() appliqué à l\'élément 1 est '+soustrait(tab[0]));
    alert('Résultat de soustraire() appliqué au dernier élément est '+soustrait(tab[tab.length - 1]));
}
