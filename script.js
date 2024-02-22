
// start
let number;
number = 0;
document.getElementById("num").textContent = number

// reset button
document.getElementById("re").onclick = function(){
    number = 0;
    document.getElementById("num").textContent = number
}

//incresse button
document.getElementById("in").onclick = function(){
    number = number + 1;
    document.getElementById("num").textContent = number
}

//decreasse button 
document.getElementById("de").onclick = function(){
    number = number - 1;
    document.getElementById("num").textContent = number
}


