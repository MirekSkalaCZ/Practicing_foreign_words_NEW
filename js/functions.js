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