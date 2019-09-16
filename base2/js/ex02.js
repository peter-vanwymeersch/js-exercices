let surface = 0;
function surfaceCercle() {
    let rayon = prompt("Le rayon du cercle?");
    surface = Math.pow(parseInt(rayon, 10), 2) * Math.PI;
    return surface;
}
function afficheSurface() {
    document.getElementById("surface").innerHTML = surface;
}
