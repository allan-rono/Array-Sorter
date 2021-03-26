//Declare Constant Variables
const strings =         document.getElementById("strings");
const submitStrings =   document.getElementById("submitStrings");
const answerStrings =   document.getElementById("answerStrings");
const num =             document.getElementById("num");
const submitNum =       document.getElementById("submitNum");
const answerNum =       document.getElementById("answerNum");
const objects =         document.getElementById("objects");
const submitObjects =   document.getElementById("submitObjects");
const answerObjects =   document.getElementById("answerObjects");

//Function to sort Input from user
function sortStrings(){};
function sortNumbers(){};
function sortObjects(){};

//Event listeners
submitStrings.addEventListener("click",sortStrings);
submitNum.addEventListener("click", sortNumbers);
submitObjects.addEventListener("click", sortObjects);
