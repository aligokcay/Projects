const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

var displayValue = '0' ;
var firstValue = null;
var operator = null;
var waitingForSecondValue = false;


updateDisplay();

function updateDisplay() {
    display.value = displayValue; 
}

keys.addEventListener('click', function(e) {
    const element = e.target;
    if(!element.matches('button')) return;    // aşağıdaki kodları çalıştırmaz

    if(element.classList.contains('operator')){
        handleOperator(element.value);
        updateDisplay();
        return;
    }if(element.classList.contains('decimal')){
        inputDecimal();
        updateDisplay();
        return;
    }if(element.classList.contains('clear')){
        clear();
        updateDisplay();
        return;        
    }if(element.classList.contains('delete')){
        deleteLast();
        updateDisplay();
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(clickOperator){
    var value = parseFloat(displayValue);

    if(operator && waitingForSecondValue){
        operator = clickOperator;
        console.log(displayValue, firstValue, operator, waitingForSecondValue );
        return;
    }


    if(firstValue === null){
    firstValue = value;
    }else if(operator){
        const result = calculate(firstValue, operator, value);
        displayValue = `${parseFloat(result.toFixed(11))}`;
        firstValue = result;
    }

    waitingForSecondValue = true;
    operator = clickOperator;
    console.log(displayValue, firstValue, operator, waitingForSecondValue );
}

function calculate(first, operator, second){
    if(operator === '+'){
        return first + second;       
    }else if(operator === '-'){
        return first - second;
    }else if(operator === '*'){
        return first * second;
    }else if(operator === '/'){
        return first / second;
    }

    return second;  // eşittire basılma ihtimali.
}


function inputNumber(num){
    if(waitingForSecondValue){
        displayValue = num;
        waitingForSecondValue = false;
    }else{
    displayValue = (displayValue === '0') ? num : displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingForSecondValue );
    
} 

function inputDecimal(){
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clear(){
    displayValue = '0' ;
    console.clear();
    displayValue = '0' ;
    firstValue = null;
    operator = null;
    waitingForSecondValue = false;
}

function deleteLast(){
    displayValue = displayValue.substring(0,displayValue.length-1);
    console.log(displayValue, firstValue, operator, waitingForSecondValue);
}
