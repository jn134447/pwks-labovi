// // 1. Kreirajte proizvoljan numerički niz te koristeći se ugrađenim funkcijama za
// nizove napravite sljedeće zadatke:
//   dodaj element na početak niza
//   dodaj element na kraj niza
//   dodaj element na predzadnje mjesto niza
//   izbriši drugi element niza
//   izbriši zadnji element niza
//   izmijeni drugi element
//   zbroji sve elemente niza
//   ispiši sve elemente niza koristeći se FOR petljom

var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

a.unshift(99);
console.log(a);

a.push(98);
console.log(a);

a.splice(a.length - 1, 0, 97);
console.log(a);

a.splice(1, 1);
console.log(a);

a.pop();
console.log(a);

a.splice(1, 1, 96);
console.log(a);

let sum = 0;
a.forEach((value) => {
  sum += value;
});
console.log(sum);

for (let i = 0; i < a.length; i++) {
  const e = a[i];
  console.log(e);
}

// // 2. Kreiraj niz objekata koji predstavlja trgovinu s atributima: naziv_proizvoda,
// godina_proizvodnje, cijena, količina i popust. Ispiši nazive artikla koji imaju cijenu
// manju od 50 koristeći se funkcijom filter()

const stores = [
  {
    naziv_proizvoda: "Ime 1",
    godina_prozvodnje: 1991,
    cijena: 27,
    kolicina: 2,
    popust: 60,
  },
  {
    naziv_proizvoda: "Ime 2",
    godina_prozvodnje: 1993,
    cijena: 97,
    kolicina: 5,
    popust: 20,
  },
  {
    naziv_proizvoda: "Ime 3",
    godina_prozvodnje: 1995,
    cijena: 69,
    kolicina: 2,
    popust: 6,
  },
  {
    naziv_proizvoda: "Ime 4",
    godina_prozvodnje: 1997,
    cijena: 17,
    kolicina: 8,
    popust: 12,
  },
  {
    naziv_proizvoda: "Ime 5",
    godina_prozvodnje: 1999,
    cijena: 697,
    kolicina: 1,
    popust: 70,
  },
];

let under50 = stores.filter((value) => {
  return value.cijena < 50;
});

under50.forEach((value) => {
  console.log(value.naziv_proizvoda);
});

// // 3. U nizu trgovina iz prethodnog zadatka prebroj količinu artikala koristeći se
// funkcijom reduce()

const sumKolicina = stores.reduce(
  (accumulator, currentValue) => accumulator + currentValue.kolicina,
  0,
);
console.log("Kolicina: " + sumKolicina);

// // 4. U nizu trgovina ispiši nazive trgovina koristeći se funkcijom map().

stores.map((value) => {
  console.log(value.naziv_proizvoda);
});

// 5. Koristeći se arrow funkcijama i ternarnim operatorom (po potrebi) kreiraj
// funkciju koja:
//   provjerava je li broj pozitivan ili negativan, vraća true(1) ili false(0).
//   provjerava parnost broja, vraća „Pozitivan“ ili „Negativan“
//   računa kub broja
//   ispisuje poruku „Hello Wordl!“

function f1(n) {
  return n >= 0 ? true : false;
}
console.log(f1(6));
console.log(f1(-7));

function f2(n) {
  return n % 2 == 0 ? "Pozitivan" : "Negativan";
}
console.log(f2(6));
console.log(f2(7));

function f3(n) {
  return n * n;
}
console.log(f3(6));

function f4(n) {
  console.log("Hello Wordl!");
}
f4();
