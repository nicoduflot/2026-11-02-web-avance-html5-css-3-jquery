// commentaire sur une ligne
/*commentaire en bloc*/
/* Déclarer des variables */
/* on  utilise let pour les variables qui vont évoluer */
let nom = 'Duflot';
console.log(nom);
nom = 'Decroix';
console.log(nom);

/* si l'élément ne change pas, on déclare une constante */

const page = window;
/*console.log(page);*/
function test(nom = 'justin'){
    let titi= 'toto';
    console.log(nom);
}

test();

/*  console.log(titi); // impossible, titi est dans la portée de la fonction, ,pas du script  */

const texte = 'c\'est aujourd\'hui';

console.log('bonjour ' + nom + ', bienvenue');
let facture = 120;
console.log(typeof facture);

console.log(facture, typeof facture);

/*facture = facture + '€';
console.log(facture, typeof facture);*/

/* interpolation de texte - literal template */
console.log(`
bonjour ${nom}, bienvenue. C'est aujourd'hui.
Votre facture est de ${facture + 10} €.
`);

const h1 = document.getElementById('rappels-javascript');
console.log(h1);
h1.addEventListener('click', function(){
    console.log(this);
    console.log(h1.innerHTML);
    console.log(h1.innerText);
    this.classList.toggle('toto');
    console.log(this.classList);
    
});

/* fonctions */

function aire(r){
    r = parseFloat(r);
    /*return Math.PI*(Math.pow(r, 2));*/
    if(parseFloat(r)){
        return Math.PI*(r**2);
    }else{
        return 'la valeur doit être un nombre';
    }
}

console.log(aire(3));
console.log(aire('toto'));
