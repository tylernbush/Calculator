
let operatorstring = '';
let inputstring = '';
let firststring = '';





function input(value) {
    inputstring +=  value
    document.querySelector('.display').value = inputstring

};


function operator(operator) {
    operatorstring = operator;
    firststring = document.querySelector('.display').value;
    inputstring = '';
};


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
            if (b === 0) result = null;
            result = divide(a,b);
            break;
        default:
            break;
    }
    inputString = '';
    firststring = '';
    operatorString = '';
    document.querySelector('.display').value = result;
};
