// VARIABLES
const display = document.querySelector('#display')
const clear = document.querySelector('.clear');
const sign = document.querySelector('.sign');
const percent = document.querySelector('.percent');
const decimal = document.querySelector('.decimal');
const equals = document.querySelector('.equals');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
operandArray = [...operands];
operatorArray = [...operators];

// FUNCTIONS

// INPUTS

equals.addEventListener('click', () => {
    evaluate()
});

decimal.addEventListener('click', () => {
    dot()
});

percent.addEventListener('click', () => {
    percentage()
});

sign.addEventListener('click', () => {
    changeSign()
});

clear.addEventListener('click', () => {
    erase()
});

operatorArray.forEach((item) => {
    item.addEventListener('click', () => {
        operation(item.textContent);
    });
});

operandArray.forEach((item) => {
    item.addEventListener('click', () => {
        input(item.textContent);
    });
});

// OUTPUTS

function input(operand) {
    display.innerHTML = operand;
};

function operation(operator) {
    alert(operator);
};

function erase() {
    alert('erase');
};

function dot() {
    alert('decimal');
};

function changeSign() {
    alert('sign');
};

function percentage() {
    alert('percent');
};

function evaluate() {
    alert('eval');
};

// MAIN CODE
