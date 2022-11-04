/* Specific scripts for index.html */

/**** Dark mode ****/

let icon_dm = document.getElementById("icon_dm");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme", "light"); 
}

let localData = localStorage.getItem("theme");

if(localData == "light") {
    icon_dm.src = "images/moon.png";
    document.body.classList.remove("dark_theme");
}   else if (localData == "dark") {
    icon_dm.src = "images/sun.png";
    document.body.classList.add("dark_theme");
}

icon_dm.addEventListener ("click", function(){
    document.body.classList.toggle("dark_theme");
    if(document.body.classList.contains("dark_theme")){
        icon_dm.src = "images/sun.png";
        localStorage.setItem("theme", "dark");
    }   else {
        icon_dm.src = "images/moon.png";
        localStorage.setItem("theme", "light");
    }
});

/**** Welcome Text ****/

const heading = document.getElementById("text");

const text = "Procvičování cizích slov";

let idLetter = 1;

let delay = 150;
    
printText();

/**** Input Values ****/

const confirm = function(){
    let confirm_text = document.getElementById("confirm_text").textContent = "Slova se uložila, můžete přidat další";
}

/**** Practice result text ****/

const trueText = function(){
    
    practice_result.innerHTML = "<span class='true'>Správná odpověď</span>";

}

const falseText = function(){

    practice_result.innerHTML = "<span class='false'>Špatná odpověď</span>";

}