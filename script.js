const calculatorBody = document.querySelector("#calculatorBody");
const screen = document.querySelector("#screen");
const operatorButtonsContainer = document.querySelector("#operatorButtons");
const operatorButtons = document.querySelectorAll("#operatorButtons button");
const operatorButtonsArr = Array.from(operatorButtons);
const numbersContainer = document.querySelector("#numbersContainer");
const numberButtons = document.querySelectorAll("#numbersContainer button");
const numberButtonsArr = Array.from(numberButtons);
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const operators = "+-X%";
let screenString = "";

//NUMBERS/OPERATORS APPEAR ON SCREEN WHEN CLICKED//      
numberButtonsArr.forEach(button=>{
    button.addEventListener("click",()=>{
        screen.value += button.textContent;
        screenString += button.textContent;
        console.log(`${screenString}: screenString`);
    })
});
operatorButtonsArr.forEach(button=>{ 
    button.addEventListener("click",()=>{
        let prevButton = screenString [screenString.length -1];
        if(!operators.includes(prevButton)){
             screenString += button.textContent;
             screen.value += button.textContent;
        }
    })
});
//CLEAR BUTTON CLEARS CONTENT ON SCREEN WHEN CLICKED//          
clearButton.addEventListener("click",()=>{
    screen.value = "";
    screenString = "";
});