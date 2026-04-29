//zadatak 2
console.log("zadatak 2");
let niz=[];
function parni(bool){
    return function(x,y){
        if(bool === true){
            for (let index = x; index <= y; index+=2) {
                console.log(index);
            }
        }
        else{
            for (let index = x+1; index <=y; index+=2) {
                console.log(index);
                
            }
        }
    }
    
}

const parniOdDo = parni(true);
parniOdDo(4,11); //izlaz: 4,6,8,10
const neparniOdDo = parni(false);
neparniOdDo(4,11); //izlaz: 5,7,9,11

//zadatak 3
console.log("zadatak 3");


//zadatak 4
console.log("zadatak 4");

class Osoba{
    #god_rodjenja;

    constructor(ime, prezime, godina){
        this.ime = ime;
        this.prezime = prezime;
        this.#god_rodjenja = godina;
    }

    pozdravi(){
        console.log("Ime i prezime nove osobe: " + this.ime + ' ' + this.prezime);
    }

    get getGodina(){
        return this.#god_rodjenja;
    }

    set setGodina(novaGodinaRodj){
        this.#god_rodjenja = novaGodinaRodj;
    }

    jeTeen = () => {
        let danas = new Date().getFullYear();
        if (danas - this.#god_rodjenja > 12 && danas - this.#god_rodjenja < 20) return true;
        else return false;
    }
}

const osobica1 = new Osoba('Toma', 'Tomic',2005)
osobica1.pozdravi();
const osobica2 = new Osoba('Antonia', 'Horvat')
osobica2.pozdravi();


//zadatak 5
console.log("zadatak 5");

function jeHexBoja(boja){
    const regex = /^[a-zA-Z0-9]{6,8}$/
    return regex.test(boja);
}

console.log(jeHexBoja('ab3411'));
console.log(jeHexBoja('123AB456'));
console.log(jeHexBoja(' 12XY34567'));