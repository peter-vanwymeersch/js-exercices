function somme() {
    let i;
    let nombre;
    let nbre;
    let laSomme;
    
    laSomme = 0;
    for (i = 1; i <= 3; i++) {
        nombre = prompt('Saisir un nombre');
        nbre = parseInt(nombre);
        laSomme = laSomme + nbre;
    }
    alert('La somme est '+laSomme);
}