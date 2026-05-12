let Count = document.getElementById("counter");
let num = 0;
Count.innerHTML = num;

function Increment(num1 = 0) {
    num1 = num++;
    Count.innerHTML = num1;
}

function Rest(num = 0) {
    Count.innerHTML = num;
}

function Decrement(num2 = 0) {
    num2 = num--;
    Count.innerHTML = num2;
}

// function Increment() {
//     num++;
//     Count.innerHTML = num;
// }

// function Reset() {
//     num = 0;
//     Count.innerHTML = num;
// }

// function Decrement() {
//     num--;
//     Count.innerHTML = num;
// }

