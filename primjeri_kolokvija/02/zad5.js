// oktalni brojevi 7 znamenki znaci od 0-7 (neklj 7)
const octal = new RegExp(
    "^[0-7]{1,}$"
);

function jeOktalni(num){
    return octal.test(num);
}

console.log(`${jeOktalni('1234')} (true)`);
console.log(`${jeOktalni('5678')} (false)`);
console.log(`${jeOktalni('03456')} (true)`);