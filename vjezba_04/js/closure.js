// // 1. Kreirati niz koji će sadržavati deset slučajno generiranih brojeva u
// intervalu od 100 do 200, zaokruženih na najbliži cijeli broj. Sortirati
// elemente niza od manjeg prema većem funkcijom sort(). Obratiti
// pozornost kod sortiranja numeričkih i tekstualnih elemenata.

{
  let arr = [];
  for (let i = 0; i < 10; i++) {
    let x = Math.floor(Math.random() * 200) + 100;
    arr.push(Number(x));
  }
  arr.sort();
  console.log(arr);
}

// // 2. Omogućiti unos brojeva dok se ne unese 0. Zbrojiti parne i neparne
// brojeve koristeći se closure funkcijom arrow zapisa. Zabranjeno je
// koristiti nizove.

{
  let x = 1;
  let even = 0;
  let odd = 0;
  while ((x = Number(prompt("Unesi broj"))) != 0) {
    // prompt() only works in browsers
    const sumX = () => {
      const isXEven = () => {
        return x % 2 == 0 ? true : false;
      };
      if (isXEven()) {
        return even + x;
      } else {
        return odd + x;
      }
    };
    sumX();
  }
  console.log("Even: ", even);
  console.log("Odd: ", odd);
}

// // 3. Kreirati closure funkciju koja vraća poruku „Programirati nije teško“.

{
  const saveStr = function (str) {
    const getStr = function () {
      return str;
    };
    return getStr;
  };
  const progNijeTes = saveStr("Programirati nije teško");

  console.log(progNijeTes());
}

// // 4. Prepiši programski k𝑜̂d i objasni što se događa.

{
  let sum = function (a) {
    return (b, c) => {
      return a * b * c;
    };
  };

  console.log(sum(10)(3, 12));
  // sum(10) is called returning anon function,
  // then that function gets called with (3, 12)
  // function currying, functional programming principle of passing multi args
}

// // 5. Korištenjem currying i arrow zapisa, omogućiti pozivanje funkcije s
// promjenjivim brojem argumenata u formatu (a)(b)(c)… koja bi trebala
// vratiti umnožak pozitivnih brojeva manjih od 20.

{
  let mulPos20 = (a) => {
    return (b) => {
      if (!b) {
        return a;
      }
      if (b < 20) {
        return mulPos20(a * b);
      } else {
        return mulPos20(a * 1);
      }
    };
  };

  console.log(mulPos20(1)(2)(3)());
}
