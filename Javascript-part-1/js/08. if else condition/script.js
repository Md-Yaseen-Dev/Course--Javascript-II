// let age = 14;
// let hasVoterCard = 'No';

// if (age >= 14 && hasVoterCard == "Yes") {
//     alert("you can vote");
//     alert("hey");
// } else if (age >= 14 && hasVoterCard != "Yes") {
//     alert("Get Your voter id card")
// }

// else {
//     alert("you cannot vote!");
// }

// let age1 = 15;
// let hasVoterCard1 = "Yes"


// if (age1 >= 14) {

//     if (hasVoterCard1 == "Yes") {
//         alert("you can vote")
//     } else {
//         alert("Get your voter id card")
//     }

// }
// else {
//     alert("you cannot vote!");
// }


// let isLoggedin = 0; // if 0 login  if 1 logout


// if (isLoggedin == 0) {
//     document.write("Login")
// }
// else {
//     document.write("Logout")
// }

// ---------Ternary operator----------------------

let isLoggedin = 1;

let option = isLoggedin == 1 ? "logout" : "login";

document.write(option);


let user;
// user = "Moeen ali";

// alert(user);

// Nullish collison operator

alert(user ?? "Guest User" );