var numOfDrums = document.querySelectorAll(".drum").length;
for (i = 0; i < numOfDrums; i++) {
    document.querySelector(".drum")[i].addEventListener("click", function (){
        alert("I got clicked");
    });
}






function add(num1, num2){
    return num1 + num2;
}


function multiply(num1, num2){
    return num1 * num2;
}

function calculator(num1, num2, operator){
    return operator(num1, num2);
}

calculator(2, 4, add);




