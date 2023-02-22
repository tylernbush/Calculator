
let operatorstring = '';
let inputstring = '';
let firststring = '';




//inputs number pressed into display field
function input(value) {
    inputstring +=  value
    document.querySelector('.display').value = inputstring

};


//takes operator pressed, saves it. Also saves first value and clears inputstring to clear field.
function operator(operator) {
    operatorstring = operator;
    firststring = document.querySelector('.display').value;
    inputstring = '';
};

//operations
function add(a,b) {
	return (a + b);
};

function subtract(a,b) {
	return (a-b);
};

function multiply(a,b) {
  return (a * b);
};

function divide(a,b) {
    return (a / b);
};

//
function clearfield() {
    inputstring = '';
    operatorstring = '';
    document.querySelector('.display').value = '';
};

function operation() {
    a = parseFloat(firststring);// initial value 
    b = parseFloat(inputstring);//current displayed value

    
    let result = 0;
    switch (operatorstring) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a,b);
            break;
        case '÷':
            if (b === 0) {   
                result = null;
            }
            else {
                result = divide(a,b); 
            }
            break;
        default:
            break;
    }
    inputString = '';
    firststring = '';
    operatorString = '';
    document.querySelector('.display').value = result;
};
