const fila1 = ["x", "x", "o"];
const fila2 = ["x", "o", "x"];
const fila3 = ["x", "o", "o"];

const arr = [fila1, fila2, fila3];

const tateti = (a, b, c) => {
  if (a === b && b === c) {
    return a;
  } else {
    return false;
  }
};

process.stdin.on("data", (data) => {
  const print = (val) => {
    console.log(val);
  };
  arr.forEach(print);

  arr.forEach((data) => {
    if (data.every((val) => val === "x")) {
      console.log("tateti de x");
      process.exit();
    } else if (data.every((val) => val === "o")) {
      console.log("tateti de o");
      process.exit();
    }
  });

  const diag1 = tateti(arr[0][0], arr[1][1], arr[2][2]);
  const diag2 = tateti(arr[0][2], arr[1][1], arr[2][0]);
  const colum1 = tateti(arr[0][0], arr[1][0], arr[2][0]);
  const colum2 = tateti(arr[0][1], arr[1][1], arr[2][1]);
  const colum3 = tateti(arr[0][2], arr[1][2], arr[2][2]);

  if (diag1) {
    console.log("tateti de", diag1);
    process.exit();
  } else if (diag2) {
    console.log("tateti de", diag2);
    process.exit();
  } else if (colum1) {
    console.log("tateti de", colum1);
    process.exit();
  } else if (colum2) {
    console.log("tateti de", colum2);
    process.exit();
  } else if (colum3) {
    console.log("tateti de", colum3);
    process.exit();
  }

  console.log(data.toString());
});

// arrlleno.forEach((data) => {
//   if (data.every((val) => val === "x")) {
//     console.log("tateti de x");

//   } else if (data.every((val) => val === "o")) {
//     console.log("tateti de o");
//   } else {
//     console.log("no tateti");
//   }
// });

// console.log(fila1.every((val) => val === "x"));

// // console.log(arrlleno);

// const suma = (a, b) => {
//   return a + b;
// };
// const resta = (a, b) => a - b;

// const calculadora = (operacion, a, b) => {
//   return operacion(a, b);
// };

// // console.log(calculadora(suma, 1, 2));
// // console.log(calculadora(resta, 1, 2));

// const print = (val) => {
//   console.log(val);
// };

// // [1, 2, 3].forEach(print);

// (() => {
//   console.log("hola");
// })();
