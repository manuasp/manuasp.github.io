const nomObjet = ['Des laxatifs', 'Une poire à lavement', 'Materiel de coloscopie', 'Prout', 'Des suppositoires'];
const imgObjet = ['laxatifs.png', 'poirelavement.png', 'matos.png', 'macron.png', 'suppositoires.png'];

let prixjoueur;
let prix;
let nbrealea;
let compteur;
let image = document.getElementById('objet');
let nom = document.getElementById('nom');
let reponse = document.getElementById('reponse');
let juste = document.getElementById('juste');
let bouton = document.getElementById('bouton');
let tentatives = document.getElementById('tentatives');

function generer(valeurMax) {
    return Math.floor(Math.random() * Math.floor(valeurMax));
}

prix = generer(100) + 1;
nbrealea = generer(5);

function afficherimg(valeur) {
    return `<img class="imgObjet" src="images/` + valeur + `">`;
}
image.innerHTML = afficherimg(imgObjet[nbrealea]);
nom.innerHTML = nomObjet[nbrealea];
compteur = 10;
tentatives.innerHTML = `<h2 id="nbre">` + compteur + `</h2>`;

function verifier() {
    prixjoueur = document.getElementById('prixjoueur').value;
    if (compteur == 0) {
        tentatives.innerHTML = `<h2 id="nbre">` + compteur + `</h2>`;
        reponse.innerHTML = `<p id = "lose" > <B> Echec </B></p >`;
        juste.innerHTML = `<h1>Le juste prix etait ` + prix + `euros</h2>`;
        bouton.disabled = true;
    } else {
        if (prixjoueur > prix) {
            reponse.innerHTML = `<p id="less"><b>-</b></p>`;
            compteur--;
            tentatives.innerHTML = `<h2 id="nbre">` + compteur + `</h2>`;
        }
        if (prixjoueur < prix) {
            reponse.innerHTML = `<p id="more"><b>+</b></p>`
            compteur--;
            tentatives.innerHTML = `<h2 id="nbre">` + compteur + `</h2>`;
        }
        if (prixjoueur == prix) {
            reponse.innerHTML = `<p id="yes"><b>Bien joué!</b></p>`
            tentatives.innerHTML = `<h2 id="nbre">` + compteur + `</h2>`;
            bouton.disabled = true;
        }
    }
}

bouton.addEventListener('click', verifier, false);