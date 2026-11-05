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
function test(nom = 'justin') {
    let titi = 'toto';
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
h1.addEventListener('click', function () {
    console.log(this);
    console.log(h1.innerHTML);
    console.log(h1.innerText);
    this.classList.toggle('toto');
    console.log(this.classList);

});

/* fonctions */

function aire(r) {
    r = parseFloat(r);
    /*return Math.PI*(Math.pow(r, 2));*/
    if (parseFloat(r)) {
        return Math.PI * (r ** 2);
    } else {
        return 'la valeur doit être un nombre';
    }
}

console.log(aire(3));
console.log(aire('toto'));

/* const tab = Array('12', 25, 'toto');*/
const tab = [12, 25, 35];
console.log(tab);
console.table(tab);
const tab2d = [
    [23, 45, 56],
    [24, 46, 57],
    [25, 47, 58],
    [26, 48, 59]
];
console.log(tab2d);
console.table(tab2d);

tab.push(42);
/* [26, 48, 59].push(70) */
tab2d[3].push(70);

console.log(tab2d);
console.table(tab2d);

console.log('ajout donnée hors champ');


console.log(tab);

/* parcourir des objets itérables */

/* for */
for (let i = 0; i < tab.length; i = i + 1) {
    console.log(tab[i]);
}

for (let i = 0; i < tab2d.length; i = i + 1) {
    /* console.log(tab2d[i]); */
    for (let j = 0; j < tab2d[i].length; j = j + 1) {
        console.log(`${j} - ${i} : ${tab2d[i][j]}`);
    }
}

/*  tab2d[6].push(24);  */

/* for of */
console.log('for of tab');
for (value of tab) {
    console.log(`value : ${value}`);
}

for (value of tab2d) {
    for (value2 of value) {
        console.log(`value : ${value2}`);
    }
}

/* for in */
console.log('for in tab');
for (index in tab) {
    console.log(`index : ${index}, value : ${tab[index]}`);
}

console.log('for in tab2d');
for (index in tab2d) {
    for(index2 in tab2d[index]){
        console.log(`index2 : ${index2}, value : ${tab2d[index][index2]}`);
    }
}
/*
function tabEvol(tab, place, donnee){
    if(tab.length < place){

    }else{
        tab[place-1] = donnee;
    }
}
*/

tab.map(function(value, index, table){
    console.log(value, index, table);
    if(value >=20){
        table[index] = parseFloat(value*1.2);
    }
});
/*

function addition(...valeurs){...}
 addition(12, 23, 152)
 [12, 23, 152]
 valeur.push()
*/
tab.push(12, 23, 152);

/* créer  un tableau et copier tout ou partie des valeurs d'un autre tableau : slice */
const tab2 = tab.slice();
console.log(tab2);
const tabPart = tab2.slice(1, 4);
console.log(tabPart);

console.log(tab);

/* .pop() */
const lastVal = tab.pop();
console.log(lastVal, tab);

/* .shift() */
const firstVal = tab.shift();
console.log(firstVal, tab);

/* .splice() */
const listVal = tab.splice(1, 3);
console.log(listVal, tab);

tab.splice(0, 0, lastVal, firstVal);
console.log(tab);
console.log(tab2);

/* déstructuration */

/* avec les tableaux */

tab01 = [12, 42, 35, 85, 29];
/*
inserrer chacune des valeurs du tableau dans des variables nommée de a à z
const a = tab01[0];
const b = tab01[1];
....
*/
const [a, b, c, d, e] = tab01;
console.log(`a : ${a}, b : ${b}, c : ${c}, d : ${d}, e : ${e}`);
const [f, , h, i, j] = tab01;
console.log(`f : ${f}, h : ${h}, i : ${i}, j : ${j}`);
let [k, l, m = 101, n, o = 45, p = 25] = tab01;
console.log(`k : ${k}, l : ${l}, m : ${m}, n : ${n}, o : ${o}, p : ${p}`);

/* échanger les valeurs des variable n01 et n02 */
let n01 = 45;
let n02 = 56;
console.log(`n01 : ${n01}, n02 : ${n02}`);
/*
let tmp = n01;
n01 = n02;
n02 = tmp;
*/
[n01, n02] = [n02, n01];

console.log(`n01 : ${n01}, n02 : ${n02}`);

/* avec les tableaux */
/* les objets */
/* les objets litéraux */

const objLit = {
    lastName: 'Sno',
    firstName: 'Jon',
    job: 'Nightwatch',
    knowledge: (prenom = 'you', nom = 'Moron')=>{
        return `You kno nothing ${prenom} ${nom}`;
    }
};

console.log(objLit);
console.log(objLit.lastName);
console.log(objLit.firstName);
console.log(objLit.job);
console.log(objLit.knowledge);
console.log(objLit.knowledge());
console.log(objLit.knowledge(objLit.lastName, objLit.firstName));

/* destructuration d'objet */
const perso1 = {
    nom: 'LeCanard',
    prenom: 'Herbert',
    coupSpecial: ()=>{
        return 'Pichenette'
    }
};

const perso2 = {
    nom: 'LeDragon',
    prenom: 'Marvin',
    coupSpecial: ()=>{
        return 'Tong Deum !'
    }
};

console.log(perso1.coupSpecial());
console.log(perso2.coupSpecial());

[perso1.coupSpecial, perso2.coupSpecial] = [perso2.coupSpecial, perso1.coupSpecial];

console.log(perso1.coupSpecial());
console.log(perso2.coupSpecial());