/* Resuable functions */

/* A function that retrieves data from localStorage */

const getInputWords = function(){

    /* Checking if data are in localStorage */

   const practice_array = localStorage.getItem("practice");

   if(practice_array !== null){
        return JSON.parse(practice_array);
   }    else {
        return [];
   }

}

/* Saving the name to localStorage */

const saveWords = function(oneWord){

    localStorage.setItem("practice", JSON.stringify(oneWord));

}

/* Generate the HTML structure that appears when the show words button is clicked + Remove Btn */

const generateHTML = function(oneWord){

    const newDiv = document.createElement("tr");
    const newSpan = document.createElement("td");
    const newSpan2 = document.createElement("td");
    const button = document.createElement("td");

    newSpan.textContent = oneWord.foreign;
    newDiv.appendChild(newSpan);

    newSpan2.innerHTML = oneWord.native;
    newDiv.appendChild(newSpan2);

    button.innerHTML = "<i class='fa-solid fa-trash-can rmv_btn'></i>";
    newDiv.appendChild(button);

    /* Remove Btn */

    button.addEventListener("click", function(){
        removeWord(oneWord.id);
        saveWords(getWords);
        updateList();
    });

    return newDiv;
}

/* Remove words from JSON */

const removeWord = function(id){

    const index = getWords.findIndex(function(wordCheck){
        return wordCheck.id === id; 
    })

    if(index > -1){
        getWords.splice(index, 1);
    }
}

/* After remove - list update */

const updateList = function(){

    document.getElementById("list").innerHTML = "<tr><th>Cizí slovo</th><th>České slovo</th></tr>";

    let new_data = getInputWords();

    new_data.forEach(function(oneWord){
        const current_list = generateHTML(oneWord);
        document.getElementById("list").appendChild(current_list);
    })
}

