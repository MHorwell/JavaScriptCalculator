let numberOne = 0;
let numberTwo = 0;
let operator = "";

function setNumber(x){
    if (operator == ""){
        if (numberOne == 0){
            numberOne = x;
        } else {
            numberOne = "" + numberOne + x;
        }
    }
    else {
        if (numberTwo == 0){
            numberTwo = x;
        } else {
            numberTwo = "" + numberTwo + x;
        }
    }
    console.log(numberOne);
    console.log(numberTwo);
}

function equals(x, y, z){
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    if (y == "+"){
        return +x + +z;
    }
    if (y == "-"){
        return +x - +z;
    }
    if (y == "*"){
        return +x * +z;
    }
    if (y == "/"){
        return +x / +z;
    }
    if (y == "^"){
        return Math.pow(x, z);
    }
    if (y == "√a"){
        return Math.pow(x, 1/z);
    }
}

function setOperator(y){
    if (y == "+"){
        operator = "+";
    }
    if (y == "-"){
        operator = "-";
    }
    if (y == "*"){
        operator = "*";
    }
    if (y == "/"){
        operator = "/";
    }
    if (y == "^"){
        operator = "^";
    }
    if (y == "√a"){
        operator = "√a";
    }
    console.log(operator);
}
