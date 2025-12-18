const calculatorBody = document.querySelector("#calculatorBody");
const screen = document.querySelector("#screen");
const operatorButtonsContainer = document.querySelector("#operatorButtons");
const operatorButtons = document.querySelectorAll("#operatorButtons button");
const operatorButtonsArr = Array.from(operatorButtons);
const numbersContainer = document.querySelector("#numbersContainer");
const numberButtons = document.querySelectorAll("#numbersContainer button");
const numberButtonsArr = Array.from(numberButtons);
const enterButton = document.querySelector("#enter");
const clearButton = document.querySelector("#clear");
       
 numberButtonsArr.forEach((button)=>{
    button.addEventListener("click",()=>{
        screen.value += button.textContent;
        console.log(button.textContent);
    })

 }
)           