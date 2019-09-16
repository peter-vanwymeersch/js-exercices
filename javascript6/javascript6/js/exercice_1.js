let langages;
let nombres;
let reseaux_sociaux_chaine = 'Facebook,Twitter,Google +,Viadeo,LinkedIn';
let reseaux_sociaux;
let langages_chaine;

function appel() {
    alert(CreationTableauLangages());
    alert(CreationTableauNombres());
    //alert(RemplacementElement(langages));
    alert(AjoutElementLangages(langages));
    alert(AjoutElementNombres(nombres));
    alert(SuppressionPremierElement(langages));
    alert(SuppressionDernierElement(langages));
    alert(ConversionChaineTableau(reseaux_sociaux_chaine));
    //alert(ConversionTableauChaine(langages));
    alert(TriTableau(reseaux_sociaux));
    alert(InversionTableau(langages));
}

function CreationTableauLangages() {
    langages = ["Html","CSS","Java","PHP"];
    return langages;
}

function CreationTableauNombres() {
    nombres = [0,1,2,3,4,5];
    return nombres;
}

function RemplacementElement(langages) {
    langages[2]="Javascript";
    return langages;
}

function AjoutElementLangages(langages) {
    langages.push("Ruby", "Python");
    return langages;
}

function AjoutElementNombres(nombres) {
    nombres.unshift('-2');
    nombres.unshift('-1');
    return nombres;
}

function SuppressionPremierElement(langages) {
    langages.shift();
    return langages;
}

function SuppressionDernierElement(langages) {
    langages.pop();
    return langages;
}

function ConversionChaineTableau(reseaux_sociaux_chaine) {
    reseaux_sociaux = reseaux_sociaux_chaine.split(',');
    return reseaux_sociaux;
}

function ConversionTableauChaine(langages) {
    langages_chaine = langages.join();
    return langages_chaine;
}

function TriTableau(reseaux_sociaux) {
    reseaux_sociaux = reseaux_sociaux.sort();
    return reseaux_sociaux;
}

function InversionTableau(langages) {
    langages.reverse();
    return langages;
}