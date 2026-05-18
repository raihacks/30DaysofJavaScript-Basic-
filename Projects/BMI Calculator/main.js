function calculate() {
    let weight = 65;
    let height = 18;
    let BMI = weight / (height * height);
    console.log(BMI);
}
calculate();

function conditionals() {
    if (0 > age > 100) {
        console.log("Please enter vaild age between 0 to 100.");
    }
    if (0 > weight > 300) {
        console.log("Please enter vaild weight between 0 to 300 kgs.");
    }
    if (0 > height > 300) {
        console.log("Please enter vaild height between 0 to 300 cm.");
    }
}
