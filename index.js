let a ='';//first num
let b = '';//second num
let sign = '';//operation sign
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

const out = document.querySelector('.calc-screen p');//output

function clearAll() {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

let plus = false;
function plusMinus() {
    if(plus) {
        a = a;
        out.textContent = a;
        plus = false;
        return;
    }
    a = -a;
    out.textContent = -a;
    plus = true;
}

function calculatePercent() {
    return out.textContent = a * b / 100;
}

document.querySelector('.ac').onclick = clearAll;
document.querySelector('.plus-minus').onclick = plusMinus;
document.querySelector('.percent').onclick = calculatePercent;

document.querySelector('.buttons').onclick = (e) => {
    if(!e.target.classList.contains('btn')) return;
    if(e.target.classList.contains('ac')) return;
    if(e.target.classList.contains('plus-minus')) return;
    if(e.target.classList.contains('percent')) return;
    

    out.textContent = '';

    const key = e.target.textContent;

    //0-9
    if(digit.includes(key)) {
        if(b === '' && sign === '') {
            a+= key;
            out.textContent = a;
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            b += key;
            out.textContent = b;
        }
    }
    //+-/*
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        return;
    }

    if(key === '=') {
        if(b === '') b=a;
        switch(sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case 'X':
                a = a * b;
                break;     
            case '/':
                if(b === '0') {
                    out.textContent = 'Error';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;    
        }
        finish = true;
        out.textContent = a;
    }
}