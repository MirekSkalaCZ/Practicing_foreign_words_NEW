/* Main scripts for all html files */

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

    /* Add values into the array from inputs */
    getWords.push({
        id: uuidv4(),
        foreign: foreign_word.value,
        native: native_word.value,
    })

    saveWords(getWords);

    /* Confirm Text and Timer */
    confirm();
    setTimeout(function(){
        confirm_text.textContent = "";
    }, 1500);

    /* Reset values from inputs */
    foreign_word.value = "";
    native_word.value = "";

    /* Input focus after submit */
    foreign_word.focus();

});


/**** First Practice ****/

var my_storage = localStorage.getItem("practice");

var my_storage_JSON = JSON.parse(my_storage);

/* Object Length */

let object_length = my_storage_JSON.length;

/* Randomize Function */

let btn_randomize = document.getElementById("randomize_btn");

let random_foreign = document.getElementById("random_foreign_word");

let random_native = document.getElementById("random_native_word");

/* Result text + second practice */

let practice_result = document.getElementById("practice_result");

let practice_form = document.getElementById("practice_form");

let native_word_practice = document.getElementById("native_word_practice");

/* Score */

var round_count = 0;

var score = 0;

var percents = 0;

btn_randomize.addEventListener("click", function(){
    /* Add round value + 1 */
    round_count++;
    /* Reset values */
    random_foreign.innerText = "";
    random_native.innerText = "";
    practice_result.innerHTML = "";
    native_word_practice.value = "";
    /* Generate Random Number */
    var random_number = Math.ceil((Math.random() * object_length) - 1);   
    /* Show random word from array */
    random_foreign.innerText = my_storage_JSON[random_number].foreign;
    random_native.innerText = my_storage_JSON[random_number].native;

    /**** Second Practice ****/
    practice_form.addEventListener("submit", function(e){

        e.preventDefault();

        if(native_word_practice.value == my_storage_JSON[random_number].native){
            trueText();
            score++;
        }   else {
            falseText();
        }

        document.getElementById("round_count").innerText = round_count;

        document.getElementById("score").innerText = score;

        percents = score * 100 / round_count;
        let rounded = percents.toFixed(1);

        document.getElementById("percents").innerText = rounded;
            
        });  
});

/* Add words from JSON to page */

let show_list = document.getElementById("show_list");

show_list.addEventListener("click", function(){

    var my_storage = localStorage.getItem("practice");

    var my_storage_JSON = JSON.parse(my_storage);

    my_storage_JSON.forEach(function(oneWord){
        const oneWordHTML = generateHTML(oneWord);
        document.getElementById("list").appendChild(oneWordHTML);
    });
});



