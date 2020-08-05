//zet alle id's om in een variabele
const hamburger = document.getElementById("hamburger");
const colorMenu = document.getElementById("colormenu");
const menu = document.getElementById("menu");
const body = document.getElementById("body");

//zet de kleuren  om in een variabele
//const grey = document.getElementById("grey");
const red = document.getElementById("red");
const orange = document.getElementById("orange");
const purple = document.getElementById("purple");
const green = document.getElementById("green");
const home = document.getElementById("home");

// maak een click event en maak een toggle-menu
menu.addEventListener('click', showMenu);
function showMenu() {
    menu.classList.toggle("menu-open");
}

//maak een click event en verander de kleur
red.addEventListener('click', colorRed);
function colorRed() {
    if (body.className == 'background-grey' || 'background-orange' || 'backgroud-green' || 'background-purple') {
        body.className = 'background-red';
        document.write = "Y O U   C H O O S E D  R E D";
        console.log('red');
    }
}

orange.addEventListener('click', colorOrange);
function colorOrange() {
    if (body.className == 'background-grey' || 'background-red' || 'backgroud-green' || 'background-purple') {
        body.className = 'background-orange';
    }
}







