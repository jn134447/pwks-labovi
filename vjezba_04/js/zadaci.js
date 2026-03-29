/* test

alert("hello world")
console.log("first log")
*/

/* ##### zad 1

const zad1 = function () {
    const x = Number(prompt("x"));
    const y = Number(prompt("y"));
    const z = Number(prompt("z"));
    console.log((x + y + z) / 3.0);
};

zad1();
*/

/* ##### zad 2

const zad2 = function () {
    const a = Number(prompt("x"));
    const op = String(prompt("Unesi znak (+, -, /, *)"));
    const b = Number(prompt("y"));

    let ret = (oper) => {
        switch (oper) {
            case '+':   return a + b;
            case '-':   return a - b;
            case '*':   return a * b;
            case '/':   return a / b;
            default :   alert("Unesi pravilan znak");
        }
    };

    console.log(ret(op));
};

zad2();
*/


/* ##### zad 3

const num = 1254192518;
const zad3 = function () {
    const num_str = String(num);
    const first_digit = Number(num_str.at(0));
    
    console.log(first_digit);
    return first_digit;
};

zad3();
*/

/* ##### zad 4 

const zad4 = function () {
    const month = Number(prompt("Unesi mjesec"));
    switch (month) {
        case 1: case 2: case 3:
            alert("zima"); break;
        case 4: case 5: case 6:
            alert("proljece"); break;
        case 7: case 8: case 9:
            alert("ljeto"); break;
        case 10: case 11: case 12:
            alert("jesen"); break;
        default: 
            alert("Unesi pravilan mjesec (1-12)"); break;
    }
};

zad4();
*/

/* ##### zad 5 

const zad5 = function () {
    const n = Number(prompt("Unesi n"));
    const z = Number(prompt("Unesi z"));

    const n_str = String(n);
    let rep = 0;

    for (let i = 0; i < n_str.length ; i++) {
        const element = n_str[i];
        if(element == String(z)){
            rep++;
        }
    }

    alert(`U broju ${n} imamo ${rep} pojavljivanja broja ${z}.`);
};

zad5();
*/