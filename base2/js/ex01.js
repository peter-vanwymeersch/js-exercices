function surfaceRectangle() {
    let surface = 0;
    let longueur = prompt("La longueur du rectangle?");
    let largeur = prompt("La largeur du retangle?");
    surface = parseInt(largeur, 10) * parseInt(longueur, 10);
    alert("La surface du rectangle est " + surface);
}

function periRectangle() {
    let peri = 0;
    let longueur = prompt("La longueur du rectangle?");
    let largeur = prompt("La largeur du retangle?");
    peri = (parseInt(longueur, 10) + parseInt(largeur, 10)) * 2;
    alert("Le périmètre du rectangle est "+peri);
}