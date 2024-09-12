const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
const userSelect = document.getElementById("userSelect");

function appendToDisplay(input){
    userSelect.value += input;
}

function clearDisplay(){
    display.value = "";
    userSelect.value = "";
}

function calculate(){
    try{
    display.value = eval(userSelect.value);
    }
    catch(error){
        userSelect.value = "Error"
    }
}