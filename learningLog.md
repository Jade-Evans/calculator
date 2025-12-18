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