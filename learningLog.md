** Problem #1 **
The click event listener  for my numberButtons to add content to the screen was not responding. 

TroubleShooting:
- Checked for any typos/ # instead of . etc. - NONE FOUND
- Loaded page with live server to check console in DevTools - no messages/obvious issues but nothing responding when I tried clicking the buttons. 
- Used the console to check the type of numberButtons - realised it was a NodeList, not array - so used Array.from() methods on operatorButtons and NumberButtons to create arrays and updated the eventListener. 
- This still didn't return anything; I typed the numberButtons into the console and it returned empty nodelist. 
- Eventually used copilot - flagged that my script tag was in the <head> and not <body> of my HTML - adjusted and eventListener worked as planned. 

TAKEAWAYS:
- Make sure script tag is in the correct place( bottom of body NOT head!)
- querySelectorAll returns NODELISTS not ARRAYS - Use Array.from() to convert if required. 
- if no errors are showing in the devTools console, you can still get some clues by just typing variable names and seeing what information is shown - aka type, if its an empty Array etc.

** Problem #2 **:
 I wanted to create a screenString variable to track the screen input behind the scenes, but realised this wasn't updating as I'd hoped i.e. duplicating what was being shown on the screen.value.  
TroubleShooting:
- I added console.log(screenString) and pressed different buttons on the calculator browser to see what console output I got. If I pressed the "1" button more than once, for example, I would get "111" so I knew my original code wasn't updating correctly:
//INITIAL INCORRECT CODE//      
numberButtonsArr.forEach(button=>{
    button.addEventListener("click",()=>{
        screen.value += button.textContent;
        screenString += screen.value;
        console.log(`${screenString}: screenString`);
    })
});
- I used some trial nd error, adding and removing the += to various parts of the code but eventually realised all I really wanted was my console output to replicate the screen.value output, so I should have been adding button.textContent (not screen.value)to the screenString each time. I updated and this worked. 
//CORRECTED CODE//      
numberButtonsArr.forEach(button=>{
    button.addEventListener("click",()=>{
        screen.value += button.textContent;
        screenString += button.textContent;
        console.log(`${screenString}: screenString`);
    })
});

TAKEAWAYS:
- Clear console.logging in devTools and some trial and error is sometimes all that is needed to analyse where the problem lies. 

** Problem #3 **:
I wanted to create a way of inhibiting the user pressing two operator buttons in a row.
- I initially tried introducing a conditional statement to determine what would happen if the screenString included one of the operators (+-X-). 
However,  this wasn't exactly the right logic as it inhibits the user using more than one operator throughout the entire calculation. What I actually wanted to do was make sure that another operator wasn't pressed if the previous pressed button was also an operator. I created a variable for the prevButton pressed for comparison instead. 

TAKEAWAYS:
- I would have benefited from pseudocode and planning the logic element here to realise what I actually wanted my code to achieve. 
- Console.log was again very helpful in deciphering where issues were arising; particularly to do with ordering of events and understanding scope. 
