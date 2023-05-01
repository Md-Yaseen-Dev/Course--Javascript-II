//  functions to interact with the user: alert, prompt, and confirm

/*
1. alert() - shows a message

2. Prompt() -  shows a message input text. It returns the text ok or cancel button.  Esc is clicked, null


3. confirm() - shows a message, confirm with "ok" or "cancel". It returns true for  ok and false for cancel/Esc

*/

//  Note:- All these pause script execution and don't allow the vistior to interact with the rest of the page until the window has been dismissed.

// alert("Welcome to alert box !");

let age = prompt("Enter the age ");

if (age != null) {
    document.write(`Your age is ${age}`);
}
else {
    document.write("Age Field was Blank")
}
confirm("Are you sure you want to go for it !");
if (age > 20) {

    alert("Your are teen now")
} else {
    alert("Your are not teen")
}