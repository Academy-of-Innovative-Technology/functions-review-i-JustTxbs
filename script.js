// ===== FUNCTIONS WITH NO PARAMETERS ===== //

function sayHello (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "Hello Aiden! Welcome to JavasScript functions review!"
}


function showDate (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "Today's date is 10/29/25"
}

function getMotive (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "You never had a prime because you're still growing"
}

function showRep (){

    let output1 = document.querySelector("#output1")
    output1.innerHTML = "Steph Curry"
}


// ===== FUNCTIONS WITH PARAMETERS ===== //


function doMath (a, b){
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `The sum of ${a} + ${b} = ${a + b}`;
}

function greet (name){
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `Greetings ${name}!`;
}

function area (a, b){
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `The area of the rectangle is ${a} * ${b} = ${a * b}`;
}

function favColor (color){
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `My favorite color is ${color}!`;
}

function temp (a, b, c, d){
    let output2 = document.querySelector("#output2")
    output2.innerHTML = `(${a} x ${b}/${c}) + ${d} = ${a * b / c + d} `;
}




// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayHelloBtn").addEventListener("click", function() {
    sayHello();
});

document.querySelector(".showDateBtn").addEventListener("click", function() {
    showDate();
});

document.querySelector(".getMotiveBtn").addEventListener("click", function() {
    getMotive();
});

document.querySelector(".showRepBtn").addEventListener("click", function() {
    showRep();
});

document.querySelector(".mathBtn").addEventListener("click", function() {
    doMath(5, 7);
});

document.querySelector(".greetBtn").addEventListener("click", function() {
    greet("Alex");
});

document.querySelector(".calcBtn").addEventListener("click", function() {
    area(10, 6);
});

document.querySelector(".colorBtn").addEventListener("click", function() {
    favColor("Purple");
});

document.querySelector(".tempBtn").addEventListener("click", function() {
    temp(25, 9, 5, 32);
});