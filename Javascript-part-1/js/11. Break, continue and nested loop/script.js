
for (let counter = 1; counter <= 10; counter++) {

    if (counter == 5) {
        break;
    }
    document.write(counter);
    document.write('<br>')
}



for (let counter = 1; counter <= 10; counter++) {

    if (counter == 4) {
        continue;
    }
    document.write(counter);
    document.write('<br>')
}

// nested loop

for (let counter = 1; counter <= 10; counter++) {


    document.write(counter);
    document.write('<br>');

    for (let counter2 = 1; counter2 < 3; counter2++) {
        document.write("tech_code");
        document.write('<br>')

    }
}
