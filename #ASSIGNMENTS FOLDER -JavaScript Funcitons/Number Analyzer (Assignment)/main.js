// Number Analyzer

// HTML Elements
let numEl = document.getElementById('numInput');

// Add Event Listener
numEl.addEventListener('change', analyzeNumber);

// Event Function
function analyzeNumber() {
    // Get Number from Input Element
    let numInput = Number(numEl.value);

    // Analyze Number and display results
    document.getElementById('sign').innerHTML = getSign(numInput);
    document.getElementById('even-odd').innerHTML = evenOrOdd(numInput);
    document.getElementById('multiple').innerHTML = multipleOf10(numInput);


}


// Analyze Functions
//Function positive negative or zero
function getSign(num) {

    if (num > 0) {
        return "Pos";
    } else if (num < 0) {
        return "Neg";
    } else {
        return "Zero";
    }
}

//Function Odd or Even
function evenOrOdd(num2){

    if (num2 % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

//Function multiple of 10
function multipleOf10(num3){
     if (num3 % 10 == 0){
         return "True"
     }
     else{
         return "False"
     }
    }

