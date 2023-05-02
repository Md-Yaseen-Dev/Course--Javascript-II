// arguments object

function add(num1, num2) {

    // console.log(num1, num2);
}
add(2, 4, 5, 6,); // arguments passing more than one value and we can add how many numbers we want.

//  even through without parameters we can use argument and get the answers

function adds() {
    var sum1 = 0

    for (let j = 0; j < arguments.length; j++) {

        sum1 = sum1 + arguments[j];

    }
    console.log(sum1)


}

adds(10, 24, 730);

// function not doing anuything

function add2() {
    if (arguments.length == 0) {
        console.log("No parameter passed !");
    }
    else {
        let sum = 0;
        for (let k = 0; k < arguments.length; k++ ){

            console.log(arguments[k])
        }
    }
}
add2("yaseen", "roshan","irshad","waheed")