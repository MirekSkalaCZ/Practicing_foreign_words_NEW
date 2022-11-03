/* Specific scripts for index.html */

/**** Welcome Text ****/

const heading = document.getElementById("text");

const text = "Procvičování cizích slov";

let idLetter = 1;

let delay = 150;
    
printText();

/**** Input Values ****/

const czechConfirm = function(){
let confirm_text = document.getElementById("confirm_text").textContent ="Slova se uložila, můžete přidat další";
}