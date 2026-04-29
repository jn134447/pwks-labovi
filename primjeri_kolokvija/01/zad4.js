class Osoba {
  ime;
  prezime;
  #god_rodenja;
  #god_mirovine = 65;

  pozdravi() {
    console.log(`Ime: ${this.ime}, Prezime: ${this.prezime}`);
  }
  constructor(ime, prezime, god_rodenja) {
    this.ime = ime;
    this.prezime = prezime;
    this.god_rodenja = god_rodenja;
  }

  get god_rodenja() {
    return this.#god_rodenja;
  }
  set god_rodenja(godina) {
    this.#god_rodenja = godina;
  }
  // arrow method?
  je_u_mirovini = () => {
    const date = new Date();
    return (date.getFullYear() - this.#god_rodenja) > this.#god_mirovine;
  }
}

const a = new Osoba("aaaaaaa", "bbbbbb bbbbb", 1991);
const b = new Osoba("ccccc", "dddddd", 1992);

a.pozdravi();
b.pozdravi();

a.god_rodenja = 1800;
console.log(`${b.god_rodenja}`);
console.log(`${a.je_u_mirovini()}, ${b.je_u_mirovini()}`);


