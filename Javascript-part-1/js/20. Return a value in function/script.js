function add(a, b) {

    let sum = a + b;
    return sum;
}

let check = add(5, 6);

document.write("check");

//  we cannot use multiple returns in function only we use multiple returns in comparision

function compare(c, d) {
    if (c > d) {
        return 1;
    }
    else {
        return 0;
    }
}

document.write(compare(4, 3));