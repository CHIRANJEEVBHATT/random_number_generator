let x = 3.56;
let y =2;
let z;
// z = Math.round(x);
// z = Math.floor(x);zc
// Math.ceil(x);
// z=Math.pow(x,y);
// z = Math.sqrt(x);
// z = Math.sin(x);// same as cos tan
// z = Math.abs(x);
// z = Math.max(x,y);//same for min
// console.log(z);a
// let randomnum = Math.random();
// const min = 50;
// const max = 100;
// let randomnum = Math.floor(Math.random() * (max - min)) +min;

// console.log(randomnum);


// RANDOM NUMBER GENERATOR
const button = document.getElementById("button");
const mylabe1 = document.getElementById("label1");
const mylabe2 = document.getElementById("label2");
const mylabe3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomnum1;
let randomnum2;
let randomnum3;
button.onclick = function(){
    randomnum1 = Math.floor(Math.random()*max) + min;
    randomnum2 = Math.floor(Math.random()*max) + min;
    randomnum3 = Math.floor(Math.random()*max) + min;
    label1.textContent = randomnum1;
    label2.textContent = randomnum2;
    label3.textContent = randomnum3;
    
}
 