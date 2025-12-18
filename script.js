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
const backButton = document.querySelector("#back");
const operators = "+-X%";

const calculate = function(){
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

    //BACK BUTTON DELETES PREVIOUS BUTTON ON SCREEN//
    backButton.addEventListener("click", ()=>{
        let screenStringArr = screenString.split("").slice(0,-1);
        screenString = screenStringArr.join("");
        console.log(screenString);
        screen.value = screen.value.split("").slice(0,-1).join("");
        
    });
    //CLEAR BUTTON CLEARS CONTENT ON SCREEN WHEN CLICKED//          
    clearButton.addEventListener("click",()=>{
        screen.value = "";
        screenString = "";
    });

    //CREATE VARIABLES FOR NUM 1, OPERATOR AND NUM 2:
    //1 split the sum:
    equalsButton.addEventListener("click",()=>{
        let screenStringArr = screenString.split(" ");
        let n1 = Number(screenStringArr[0]);
        let op = screenStringArr[1];
        let n2 = Number(screenStringArr[2]);
        console.log(`${n1} = firstNumber;${op} = operator; ${n2} = secondNumber`);
        let answer = "";
        switch(op){
            case "+":
                answer = n1 + n2;
            case "-":
                answer = n1 - n2;
            case "X":
                answer = n1*n2;
            case "%":
                answer = n1/n2;
        }

    })

};
calculate();