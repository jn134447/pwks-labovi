function Auto(year, hp, color) {
  var _distance = 0; // privatno

  function calcAdd(d) {
    return d * 0.01;
  }

  this.year = year;
  this.hp = hp;
  this.color = color;
  this.original_color = this.color;

  var _fuel = 50; // privatno, default

  this.drive = function (speed, time) {
    var d = speed * time;
    _distance += d;
    _fuel -= calcAdd(d);
    if (_fuel < 0) _fuel = 0;
  };
  this.getDistance = function () {
    return _distance;
  };
  this.changeColor = function (new_color) {
    this.color = new_color;
  };

  Object.defineProperty(this, "fuelLevel", {
    get: function () {
      return _fuel;
    },
    set: function (v) {
      if (typeof v === "number" && v >= 0) _fuel = v;
    },
  });
}

let A = new Auto(1991, 150, "White");
let B = new Auto(2017, 350, "Orange");

A.drive(60, 2);
A.changeColor("Black");

B.drive(120, 3.5);

console.log(A.getDistance(), A.fuelLevel);

console.log("A: Original: " + A.original_color + ", Color: " + A.color);
console.log("A: Distance: " + A.getDistance() + " " + A.fuelLevel);

console.log("B: Original: " + B.original_color + ", Color: " + B.color);
console.log("B: Distance: " + B.getDistance() + " " + B.fuelLevel);

console.log("\ndrugi dio:\n");

class Auto2 {
  #distance = 0; // privatno
  #fuel = 50; // privatno, default

  constructor(year, hp, color = "White") {
    this.year = year;
    this.hp = hp;
    this.color = color;
    this.original_color = color;
  }

  // privatna metoda
  #calcAdd(d) {
    return d * 0.01;
  }

  drive(speed, time) {
    const d = speed * time;
    this.#distance += d;
    this.#fuel -= this.#calcAdd(d);
    if (this.#fuel < 0) this.#fuel = 0;
  }

  getDistance() {
    return this.#distance;
  }

  getFuel() {
    return this.#fuel;
  }
  setFuel(v) {
    if (typeof v === "number" && v >= 0) this.#fuel = v;
  }

  changeColor(new_color) {
    this.color = new_color;
  }
}

// upotreba
const C = new Auto2(1991, 150, "White");
C.drive(200, 2);
C.changeColor("Green");
console.log("C: Original: " + C.original_color + ", Color: " + C.color);
console.log("C: Distance: " + C.getDistance() + " " + C.getFuel());
