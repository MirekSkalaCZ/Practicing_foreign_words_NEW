/* Specific scripts for english_version.html */

/**** Welcome Text ****/

const heading = document.getElementById("text");

const text = "Practicing foreign words";

let idLetter = 1;

let delay = 150;

printText();

/**** Input Values ****/

const czechConfirm = function(){
    let confirm_text = document.getElementById("confirm_text").textContent = "The words have been saved, you can add more";
}