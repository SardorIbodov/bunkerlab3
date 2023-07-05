//! Number
// console.log("12");
// console.log(Number("12"));
// console.log(Number("1a2"));
// console.log(Number("1.2"));
//! Number.parseFloat()
// console.log(Number.parseFloat("1.342"));
// console.log(Number.parseFloat("1.34a2"));
//! Number.parseInt()
// console.log(Number.parseInt("1.322"));
// console.log(Number.parseInt("1.3a2a2"));
// console.log(Number.parseInt("a1a.3a2a2"));
//! parseFloat()
// console.log(parseFloat("1.3a2"));
//! parseInt()
// console.log(parseInt("1.323a4"));

//! Number with _
// const million = 1_000_000;
// console.log(million);
// console.log(million + 1);
// console.log(million - 1);
// console.log(million * 2);
// console.log(million / 2);
// const strMillion = "1_000_000";
// console.log(+"1");
// console.log(+strMillion);
// console.log(strMillion + 1);

//! Number with e
// const million = 1_000_000;
// const emillion = 1e6;
// console.log(million === emillion);
// const num = 23e3;
// console.log(num);
// console.log(100000000000000000000000000000000000000000000000000);

//! Issue => (10 => 2)
// console.log(0.2 + 0.1);
// console.log(0.2 + 0.2);
// console.log(0.2 + 0.5);
// console.log(0.3 + 0.5);

//! num.toFixed()
// console.log(0.1 + 0.2);
// console.log(+(0.1 + 0.2).toFixed(3));
// console.log((1.1999 + 0.2).toFixed(3));
// console.log((1.1999 + 0.2).toFixed(4));

//! num.toPrecision()
// console.log(0.1 + 0.2);
// console.log((0.1 + 0.2).toPrecision(3));
// console.log((11.111 + 1.222).toFixed(2));
// console.log((11.111 + 1.222).toPrecision(2));

//! eval()
// console.log(eval("0.3 + 0.2"));
// console.log(eval("0.3 - 0.2"));
// console.log(eval("0.3 / 0.2"));
// console.log(eval("0.3 * 0.2"));
// console.log(eval("(0.3 * 0.2) / 10"));

//! istalgan => 10
// console.log(parseInt(100, 2));
// console.log(parseInt(111, 2));
// console.log(parseInt(123, 8));
// console.log(parseInt("AB", 16));

//! 10 => istalgan (num.toString())
// const num = 123;
// console.log(num.toString(2));
// console.log(parseInt(+num.toString(2), 2));
// console.log(num.toString(8));
// console.log(num.toString(16));

//! isNaN()
// console.log(isNaN(NaN)); // true
// console.log(isNaN(12)); // false
// console.log(isNaN(true)); // false
// console.log(isNaN(false)); // false
// console.log(isNaN(undefined)); // true
// console.log(isNaN(null)); // false
// console.log(isNaN("webbrain")); // true
// console.log(isNaN({name: "webbrain"})); // true
// console.log(isNaN([1,2,3])); // true

//! Object.is() as "==="
// console.log(Object.is(undefined, null));
// console.log(Object.is(1, "1"));
// console.log(Object.is(1, 1));
// console.log({} === {});
// console.log(Object.is({}, {}));

//! Math
// console.log(Math.PI);
// console.log(Math.E);
//! ABS => modul
// console.log(Math.abs(-2));
// console.log(Math.abs(2));
//! Max
// console.log(Math.max(2,3,5));
//! Min
// console.log(Math.min(2,3,5));
//! sqrt
// console.log(Math.sqrt(2));
//! cbrt
// console.log(Math.cbrt(27));
//! pow(a, b)
// console.log(Math.pow(2, 5));
//! floor
// console.log(Math.floor(2.99));
// console.log(Math.floor(-2.99));
//! ceil
// console.log(Math.ceil(2.99));
// console.log(Math.ceil(-2.99));
//! trunc
// console.log(Math.trunc(2.99));
// console.log(Math.trunc(-2.99));
// console.log(Math.trunc(2.01));
// console.log(Math.trunc(-2.01));
//! round
// console.log(Math.round(2.99)); // 3
// console.log(Math.round(-2.99)); // -3
// console.log(Math.round(2.01)); // 2
// console.log(Math.round(-2.01)); // -2
// console.log(Math.round(-2.49)); // -2
// console.log(Math.round(2.49)); // 2
// console.log(Math.round(2.51)); // 3
// console.log(Math.round(-2.51)); // -3

//! sign
// console.log(Math.sign(-12));
// console.log(Math.sign(12));
// console.log(Math.sign("12"));
// console.log(Math.sign("-12"));
// console.log(Math.sign("ab"));
// console.log(Math.sign("-ab"));
// console.log(Math.sign(0));
// console.log(Math.sign(-0));

//! Math.random() [0, 1)
// console.log(Math.random());

//! 0 - 10
// console.log(parseInt(Math.random() * 11));

//! a-b

//! Math 8ta

//! Qaychi qog'oz
// 1 => "Qaychi"
// 2 => "Qog'oz"
// 3 => "Tosh"
// const userInput = 1;
// function gameStone(userInput) {
//   const desc = {
//     1: "Qaychi",
//     2: "Qog'oz",
//     3: "Tosh",
//   };
//   const randomNumber = parseInt(Math.random() * 3) + 1;
//   if (userInput === randomNumber) {
//     return `Siz ${desc[userInput]} vs Kompyuter ${desc[randomNumber]} => Durang`;
//   } else if (
//     (userInput === 1 && randomNumber === 3) ||
//     (userInput === 2 && randomNumber === 1) ||
//     (userInput === 3 && randomNumber === 2)
//   ) {
//     return `Siz ${desc[userInput]} vs Kompyuter ${desc[randomNumber]} => Siz yutqazdingiz`;
//   } else
//     return `Siz ${desc[userInput]} vs Kompyuter ${desc[randomNumber]} => Siz yutdingiz`;
// }
// console.log(gameStone(userInput));


