// while loop check the condition and gives output

let counter = 1;

while (counter <= 10) {
    document.write('TechGun' + "<br>");
    counter++;
}

// write 1-100 even numbers and all of them

let evennum = 1;
let sum = 0;
while (evennum <= 100) {

    if (evennum % 2 == 0){
        sum = sum + evennum;
    }
    evennum++
}
document.write(sum);

//  for loop


for(let counter = 1 ; counter<=10 ; counter++){
    document.write("yes" +"</br>")
}
