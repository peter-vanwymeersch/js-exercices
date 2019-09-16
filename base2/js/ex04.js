let montableau = [-2, 1, 4];

function additionne(x) {
    return x + 2;
}
function affiche() {
    alert('Résultat de additionne() appliqué à l\'élément 1 est '+additionne(montableau[0]));
    alert('Résultat de additionne() appliqué au dernier élément est '+additionne(montableau[montableau.length - 1]));
}
