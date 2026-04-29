// chess board is 8x8

const chess = new RegExp(
    "^[a-h][1-8]-[a-h][1-8]$", 'i'
)
function jePotez(str){
    return chess.test(str);
}

console.log(`${jePotez('A1-a2')} (true)`);
console.log(`${jePotez('h4h5')} (false)`);
console.log(`${jePotez('k9-A2')} (false)`);