$(document).ready(function() {


    let aDeviner = 0;
    let colorSelect = '';
    let backColor = 'rgba(0, 0, 0, 0) linear-gradient(rgb(94, 92, 92), rgb(31, 30, 30)) repeat scroll 0% 0% / auto padding-box border-box';
    let reponse = document.getElementById("reponse");
    // je vais cacher le bouton "valider" et il n'apparaitra que lorsque les 4 jetons auront été choisis (ca me permet d'empecher le joueur de cliquer plusieur fois sur "valider", l'empechant ainsi de sauter des lignes)
    $('#bouton').hide();
    let comptClick = 0;

    let repArray = donneRep()
    console.log(repArray);

    let tempArray = $('.aDevJetons');
    let jetonsArray = [];
    // Je fais un array des div .aDevJetons (les div ou on place nos jetons) 

    let prochainIndice = $($('.prems')[0]).parent()[0];


    for (let index = 9; index >= 0; index--) {
        jetonsArray.push(tempArray[index]);
    }

    for (let index = 0; index < 10; index++) {
        let jetonArray = jetonsArray[index].getElementsByClassName("aDevJeton");
        for (let i = 0; i < 4; i++) {
            $(jetonArray[i]).attr('id', `g-${index}-${i}`);
        }
        // suite concernant la class actif (1er com ligne50) je fais un mic mac en creant une Id afin de pouvoir ajouter la classe ".actif" a div precedente
    }


    console.log(prochainIndice)

    let aDevArray = [
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1],
        [-1, -1, -1, -1]
    ];

    $('#bouton').click(function() {
        $('.actif').removeClass('actif');
        let noteArray = note();
        gagnant(noteArray);
        let indices = trouverIndices();
        positionJetons(noteArray, indices)
        aDeviner++;
        for (let index = 0; index < 4; index++) {
            $(`#g-${aDeviner}-${index}`).addClass('actif');
            // et j'ajoute enfin la classe ".actif  a la div qui suivra
        }
        $('#bouton').hide();
        // je cache le bouton une fois que l'on a appuyé dessus 
    });

    $('.selection').click(function() {
        // quand on clique: 
        $('.selecteur').css('background-color', 'rgb(31, 30, 30)');
        let jeton = ($(this).parent())[0];
        // la couleur de fond de tous les .selecteur deviennent gris 
        colorSelect = $(this).css('background-color');
        $(jeton).css('background-color', colorSelect);
        // la couleur du fond du parent de "jeton" (qui est toujours .selecteur) prend la couleur selectionnée 
    });

    $('.aDevJeton').click(function() {
        if ($(this).hasClass('actif')) {
            // a noter que la classe ".actif" est lié  à div ".aDevJeton". ".actif" n'est mis seulement qu'a la derniere div ".adeJetons" (le parent de ".aDevJeton" est ".aDevJetons") afin de ne mettre des jetons QUE sur la div ".aDevJetons" la plus basse. MAintenant il va falloir faire en sorte que la class ".actif" se déplace vers le haut (plus haut) (vers la ligne 13)
            let nombre = parseInt($(this).css('border'));
            nombre = nombre + 1;
            if (nombre === 1) {
                $(this).css('background', 'none');
                // Je suis obligé de virer le fond que j'ai mis en css, sinon il me fait ch... 
                $(this).css('background-color', colorSelect);
                // et donc je place la couleur cliquée sur le receptacle desiré 
                $(this).css('border', '2px solid white');
                let coord = $(this).attr('id');
                MAJaDevArray(colorSelect, coord);
                comptClick++;
                if (comptClick === 4) {
                    $('#bouton').show();
                    comptClick = 0;
                    // le bouton n'apparaitra que lorsque les 4jetons seront choisis 
                }
            } else {
                $(this).css('background', backColor);
                $(this).css('border', '1px solid white');
                // si je reclique ca revient normal 
                // MAJaDevArray(colorSelect, coord);
                comptClick--;
                // je diminue le compteur de clicks afin d'eviter que le bouton n'apparaissent lorsque l'on annule un choix de jeton 

            }
        }
    }); // la couleur cliquée est "deplacée" sur les cases du jeu 



    function donneRep() {
        let array = [];
        // manque d'imagination.
        for (let index = 0; index < 4; index++) {
            array.push(Math.floor(Math.random() * 6));

        }
        return array
    }

    function MAJaDevArray(col, xy) {
        let array = xy.split('-')
        let x = array[1];
        let y = array[2];
        aDevArray[x][y] = couleurPour(col);
    }

    function couleurPour(col) {
        if (col === 'rgb(0, 128, 0)') return 0;
        if (col === 'rgb(255, 255, 0)') return 1;
        if (col === 'rgb(255, 0, 0)') return 2;
        if (col === 'rgb(0, 0, 0)') return 3;
        if (col === 'rgb(255, 255, 255)') return 4;
        if (col === 'rgb(255, 165, 0)') return 5;
    }

    function note() {
        let notaArray = []
        let aRRay = [];
        for (let index = 0; index < 4; index++) {
            aRRay.push(repArray[index]);
        }



        // jeton noir
        for (let index = 0; index < 4; index++) {
            if (aDevArray[aDeviner][index] === aRRay[index]) {
                notaArray.push('jetonNoir');
                aRRay[index] = -1;
                aDevArray[aDeviner][index] = -2;
            }
        }




        // jeton blanc 
        for (let index = 0; index < 4; index++) {
            for (let i = 0; i < 4; i++) {
                if (aDevArray[aDeviner][index] === aRRay[i]) {
                    notaArray.push('jetonBlanc');
                    aRRay[i] = -1;
                    aDevArray[aDeviner][index] = -2;

                }
            }
        }
        return notaArray;
    }


    // pour passer des indices de la premiere ligne (en partant du bas), aux indices de la seconde ligne 

    function trouverIndices() {
        let indiceActif = prochainIndice.getElementsByClassName("indiceJetons")[0];
        prochainIndice = $(prochainIndice).prev()[0];
        return indiceActif;
    }

    function positionJetons(array, box) {
        let jetonRay = box.getElementsByClassName("indiceJeton");
        console.log(jetonRay);
        for (let index = 0; index < array.length; index++) {
            $(jetonRay[index]).addClass(`${array[index]}`);
        }
        $('.jetonBlanc').css('background', 'none').css('background-color', 'white');
        $('.jetonNoir').css('background', 'none').css('background-color', 'black');
    }


    function gagnant(array) {
        console.log(array);
        let arrayString = array.join();
        if (arrayString === "jetonNoir,jetonNoir,jetonNoir,jetonNoir") {
            console.log('u win')
            reponse.innerHTML = `<h3 id="winner" >You win!</h3>`
        }
    }
});