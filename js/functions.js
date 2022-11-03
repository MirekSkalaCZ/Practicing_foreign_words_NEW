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

/* Generate the HTML structure that appears when the show words button is clicked */

const generateHTML = function(oneWord){
    const newDiv = document.createElement("div");
    const newSpan = document.createElement("span");
    const newSpan2 = document.createElement("span");
    const button = document.createElement("button");

    newSpan.textContent = oneWord.foreign;
    newDiv.appendChild(newSpan);

    newSpan2.textContent = oneWord.native;
    newDiv.appendChild(newSpan2);

    button.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
    newDiv.appendChild(button);

    return newDiv;
}