class Calculator {
    constructor(last, current) {
        this.last = last
        this.current = current
        this.erase()
    }

    erase() {
        this.currentOperand = ''
        this.lastOperand = ''
        this.operation = undefined
    }
    
    del() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }
    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return;
        if (this.lastOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.lastOperand = this.currentOperand;
        this.currentOperand = '';
    }
    
    compute() {
        let computation
        const prev = parseFloat(this.lastOperand);
        const ongoing = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(ongoing)) return;
        switch (this.operation) {
            case '+':
                computation = prev + ongoing;
                break
            case '-':
                computation = prev - ongoing;
                break
            case '*':
                computation = prev * ongoing;
                break
            case '/':
                computation = prev / ongoing;
                break
            default: 
                return
        }
        this.currentOperand = computation;
        this.operation = undefined;
        this.lastOperand = '';
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
          integerDisplay = ''
        } else {
          integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
          return `${integerDisplay}.${decimalDigits}`
        } else {
          return integerDisplay
        }
    }

    updateDisplay() {
        this.current.innerText = 
            this.getDisplayNumber(this.currentOperand)
        if (this.operation != null) {
            this.last.innerText = `${this.getDisplayNumber(this.lastOperand)} ${this.operation}`
        } else {
            this.last.innerText = '';
        }
    }
};

// VARIABLES
const numberButtons = document.querySelectorAll('[data-num]');
const operationButtons = document.querySelectorAll('[data-op]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-del]');
const clear = document.querySelector('[data-clear]');
const last = document.querySelector('[data-last]');
const current = document.querySelector('[data-current]');

const calculator = new Calculator(last, current);

// FUNCTIONS

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

clear.addEventListener('click', button => {
    calculator.erase();
    calculator.updateDisplay();
});

deleteButton.addEventListener('click', button => {
    calculator.del();
    calculator.updateDisplay();
});


// MAIN CODE
  