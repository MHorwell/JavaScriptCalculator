let numberOne = 0;
let numberTwo = 0;
let answer = 0;
let operator = "";


function setNumber(x){
    if (operator == ""){
        if (numberOne == 0){
            numberOne = x;
        } else {
            numberOne = "" + numberOne + x;
        }
        document.getElementById("output").innerHTML = numberOne;
        console.log(numberOne);
    }
    else {
        if (numberTwo == 0){
            numberTwo = x;
        } else {
            numberTwo = "" + numberTwo + x;
        }
    console.log(numberTwo);
    document.getElementById("output").innerHTML = numberTwo;
    }
    
}

function equals(x, y, z){
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    if (y == "+"){
        answer = +x + +z;
    }
    if (y == "-"){
        answer = +x - +z;
    }
    if (y == "*"){
        answer = +x * +z;
    }
    if (y == "/"){
        answer = +x / +z;
    }
    if (y == "^"){
        answer = Math.pow(x, z);
    }
    if (y == "√a"){
        answer = Math.pow(x, 1/z);
    }
    if (y == "!"){
        answer = 1;
        for (i = x; i > 1; i-1){
            answer = answer * i;
        }
    }
    console.log(answer);
    document.getElementById("output").innerHTML = answer;
    
}

function setOperator(y){
    operator = y;
    console.log(operator);
    document.getElementById("output").innerHTML = operator;
}
