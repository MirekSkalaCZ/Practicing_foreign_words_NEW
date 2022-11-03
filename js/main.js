/* Main scripts for all html files */

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

function printText(){
    heading.innerText = text.slice(0,idLetter)
    
    idLetter++;
    
    if(idLetter > text.length){
        idLetter = 1;
    }
    
    setTimeout(printText, delay);

}

/**** Toggle Windows ****/

let windows = document.querySelectorAll(".window");

for(let i = 1; i <= 3; i++){
    let btn = document.getElementById("btn" + i);

    let window = document.getElementById("window" + i);

    btn.onclick = function(){
        deleteActiveClass();
        window.classList.add("active");
    }

    function deleteActiveClass(){
        windows.forEach(function(allWindows){
            allWindows.classList.remove("active");
        });
    }
}

/**** Input Values ****/

let getWords = getInputWords();

let insert_form = document.getElementById("insert_form");

insert_form.addEventListener("submit", function(e){

    e.preventDefault();

    getWords.push({
        id: uuidv4(),
        foreign: foreign_word.value,
        native: native_word.value,
    })

    saveWords(getWords);

    /* Confirm Text and Timer */
    czechConfirm();
    setTimeout(function(){
        confirm_text.textContent = "";
    }, 1500);

    /* Reset values from inputs */
    foreign_word.value = "";
    native_word.value = "";

});