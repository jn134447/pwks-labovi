// console.log("hello world");

// // 1. Napisanu funkciju ocjena(k1, k2, sem) zapiši kao:
// -arrow funkciju s pozivom ocjena_arrow(50, 80, 80),
// -currying funkciju s pozivom ocjena_currying(50)(80)(80).

function ocjena(k1, k2, sem) {
  //𝑂𝑐𝑗𝑒𝑛𝑎(%) = 0,42*kol1 + 0,42*kol2 + 0,16*semi
  return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
}

const ocjena_arrow = (k1, k2, sem) => {
  //   return ocjena(k1, k2, sem);
  return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
};

function ocjena_currying(k1) {
  return (k2) => {
    return (sem) => {
      return k1 * 0.42 + k2 * 0.42 + sem * 0.16;
    };
  };
}

console.log(`ocjena(): Postotak ostvaren na kolegiju ${ocjena(50, 80, 80)}`);
console.log(
  `ocjena_arrow(): Postotak ostvaren na kolegiju ${ocjena_arrow(50, 80, 80)}`,
);
console.log(
  `ocjena_currying(): Postotak ostvaren na kolegiju ${ocjena_currying(50)(80)(80)}`,
);

// // 2. Napisati zasebno arrow i currying funkciju koja će ispisivati poruku o
// ostvarenom rezultatu iz ispita iz određenog kolegija.
// Prva vrijednost koja se šalje funkciji je naziv kolegija, druga ostvareni broj
// bodova, a treća ukupan broj bodova.
// Primjer poziva funkcije rezultat je rezultat("PWKS")(25)(35), a primjer ispisa
// pozvane funkcije „Iz kolegija PWKS ostvarili ste 71.43% „. Koristiti metodu
// toFixed objekta Number za zaokruživanje rezultata na dva decimalna mjesta.

function rezultat(name) {
  return (cur) => {
    return (max) => {
      const percentage_str = Number((cur / max) * 100).toFixed(2);
      console.log(`Iz kolegija ${name} ostvarili ste ${percentage_str}%`);
    };
  };
}
rezultat("PWKS")(25)(35);

// // 3. Napisati currying funkciju koja množi brojeve sa zadnjom parnom znamenkom.
// Za funkciju s pozivom mnozi(2)(5)(13)(10)(14)(177)(4)(0)() ispisuje se rezultat
// 1120

function mnozi(a) {
  let accum = 1;
  if ((a % 10) % 2 == 0 && a != 0) {
    accum *= a;
  }
  return (b) => {
    if (b === undefined) {
      return accum;
    } else if ((b % 10) % 2 == 0 && b != 0) {
      return mnozi(accum * b);
    } else {
      return mnozi(accum * 1);
    }
  };
}

console.log(`mnozi: ${mnozi(2)(5)(13)(10)(14)(177)(4)(0)()}`);

// Zadaci – objektno orijentirani JS

// // 4. Kreiraj konstruktor Kolegij s atributima (property) godina, semestar, kol1,
// kol2, ocjena_rez i dvije metode ocjena() i info().
// Funkcija ocjena() ispisuje postotak riješenosti => kol1*0.5 + kol2*0.5.
// Funkcija info() ispisuje poruku „Student na predmetu PWKS, {godina}. godina,
// {semestar}. semestar, ostvario je {ocjena_rez}%“.
// Kreirati dva objekta i postaviti vrijednosti pomoću konstruktora. Pozvati
// funkcije ocjena() i info() u oba objekta.

class Kolegij {
  godina; // num
  semestar; // num | str
  kol1; // num
  kol2; // num
  ocjena_rez; // num

  constructor(godina, semestar, kol1, kol2, ocjena_rez) {
    this.godina = godina;
    this.semestar = semestar;
    this.kol1 = kol1;
    this.kol2 = kol2;
    this.ocjena_rez = ocjena_rez;
  }

  ocjena() {
    return this.kol1 * 0.5 + this.kol2 * 0.5;
  }
  info() {
    console.log(
      `Student na predmetu PWKS, ${this.godina}. godina, ${this.semestar}. semestar, ostvario je ${this.ocjena_rez}%`,
    );
  }
}

const kolegij1 = new Kolegij(1, 1, 67, 67, 100);
const kolegij2 = new Kolegij(2, "IV", 100, 20, 67);

console.log(`kolegij1.ocjena(): ${kolegij1.ocjena()}`);
kolegij1.info();

console.log(`kolegij2.ocjena(): ${kolegij2.ocjena()}`);
kolegij2.info();

// // 5. U prethodnom zadatku drugo kreiranom objektu dodati atribut ime, prezime i
// status. Ispisati poruku „Student {ime} {prezime} ima {formula}%“.

kolegij2.ime = "Aaaaa";
kolegij2.prezime = "Bbbbbbbb";
kolegij2.status = "Cccccccc";

//  ?? formula ??
console.log(
  `Student ${kolegij2.ime} ${kolegij2.prezime} ima ${kolegij2.ocjena()}%`,
);

// // 6. U prethodnom zadatku izbriši dodane atribute ime, prezime i status.

delete kolegij2.ime;
delete kolegij2.prezime;
delete kolegij2.status;

console.log(
  `Student ${kolegij2.ime} ${kolegij2.prezime} ima ${kolegij2.ocjena()}%`,
);
