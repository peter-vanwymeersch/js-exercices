// DOM - Exercice 1
//
alert("DOM - Exercice 1");
let elem1 = document.body;
console.log(elem1, '1');
elem1.classList.remove('bg-aqua');
elem1.classList.add('bg-olive');

let elem2 = document.getElementById("first-paragraph");
elem2.classList.remove("bg-lime", "gray");
elem2.classList.add("aqua");
console.log(elem2, '2');

let elem3 = document.getElementsByClassName("bg-silver");
for (var i = 0; i < elem3.length; i++) {
    elem3[i].classList.add('bg-teal');
    elem3[i].classList.remove('bg-silver');
}

let elem4 = document.getElementsByTagName("blockquote");
for (var i = 0; i < elem4.length; i++) {
    elem4[i].classList.add('bg-white');
 }

// DOM - Exercice 2
//
alert("DOM - Exercice 2");
let elem5 = document.querySelector('#my-table');
elem5.classList.add('bg-purple');

let elem6 = document.querySelectorAll('.container > p');
for (var i = 0; i < elem6.length; i++) {
    elem6[i].classList.add('shadow');
 }

// DOM - Exercice 3
//
alert("DOM - Exercice 3");
let elem7 = document.getElementsByTagName("pre");
for (var i = 0; i < elem7.length; i++) {
    elem7[i].style.color = 'blue';
    elem7[i].style.background = 'yellow';
    elem7[i].style.border = '3px solid red';
 }
 
 let elem8 = document.getElementsByTagName("h3");
 elem8[0].innerHTML = '<em>Itelic title ! yeah !</em>';

 let elem9 = document.getElementsByTagName("h2");
 elem9[0].innerText = '<strong>HTML doens\'t work !</strong>';

// DOM - Exercice 4
//
alert("DOM - Exercice 4");
let newLI = document.createElement('li');
let newText = document.createTextNode('Mon meilleur ami est <a href=\'http://www.google.com\'>Google</a>');
newLI.appendChild(newText);
let elem10 = document.getElementsByTagName("ul");
elem10[0].appendChild(newLI);
let elem11 = document.querySelectorAll('ul li')[0];
elem11.style.color = 'green';

// DOM - Exercice 5
//
alert("DOM - Exercice 5");
let elem12 = document.querySelector("ol"); 
let child = elem12.lastElementChild;  
while (child) { 
    elem12.removeChild(child); 
    child = elem12.lastElementChild; 
} 
let elem13 = ['Silent Teacher', 'Code Monkey', 'Code Combat'];
for (let i = 0; i < elem13.length; i++) {
    let newLI2 = document.createElement('li');
    let newText2 = document.createTextNode(elem13[i]);
    newLI2.appendChild(newText2);
    elem12.appendChild(newLI2);
}
