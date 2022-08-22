/*
Logica del negocio
 - Se ingresa de a un dato, cambia de x a 0 cada turno
 - gana el primero que ahce tateti
   - por fila
   - por columna
   - por diagonal
 - si se produce un empate se acaba el juego

Logica de la aplicacion
 - los datos se ingresan por consola
 - tengo que implementar un manejo de errores
   - solo se pueden ingresar de a 2 numeros
   - no puedo seleccionar una posicion ocupada
   - solo se pueden ingresar numeros
   - solo se pueden seleccionar nposiciones dentro de las dimensiones del tablero
*/
const board = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];
let turnoCruz = true;

const tateti = (data) => {
  const [x, y] = [
    ...data 
      .toString()
      .split(",")
      .map((str) => str * 1),
  ];

  if (checkError(board, x, y).error) {
    console.log(checkError(board, x, y).msg);
    return;
  }

  board[x][y] = turnoCruz ? "x" : "o";
  turnoCruz = !turnoCruz;

  showBoard(board);
  if (checkWin(board).win) {
    console.log("Ganaste: ", checkWin(board).player);
    process.exit(0);
  }
  if (checkDraw(board)) {
    console.log("Empataron");
    process.exit(0);
  }
};

const showBoard = (board) => {
  board.forEach((row) => {
    console.log(row);
  });
};

const checkRow = (row) => {
  return row.every((cell, i, arr) => {
    return cell == arr[0] && cell != "-";
  });
};

const checkColumn = (board, column) => {
  return board.every((row, i, arr) => {
    // return row[column] == 'x' || row[column] == 'o'
    const cell = row[column];
    return cell == arr[0][column] && cell != "-";
  });
};

const checkWin = (board) => {
  const winObj = {
    win: false,
    player: "-",
  };
  // row
  board.forEach((row) => {
    if (!checkRow(row)) return;
    winObj.win = true;
    winObj.player = row[0];
  });
  // column
  const columns = [0, 1, 2];
  columns.forEach((pos) => {
    if (!checkColumn(board, pos)) return;
    winObj.win = true;
    winObj.player = board[0][pos];
  });
  // cross
  if (board[1][1] == "-") return winObj;

  if (board[0][0] == board[1][1] && board[0][0] == board[2][2]) {
    winObj.win = true;
    winObj.player = board[0][0];
  }
  if (board[0][2] == board[1][1] && board[0][2] == board[2][0]) {
    winObj.win = true;
    winObj.player = board[2][0];
  }
  return winObj;
};

const checkDraw = (board) => {
  return !board.some((row) => {
    return row.some((cell) => cell == "-");
  });
};

const checkError = (board, x, y) => {
  // ingrese dos numeros
  if ((!x && x !== 0) || (!y && y !== 0))
    return { error: true, msg: "tenes que ingresar dos numeros" };

  // que este dentro de las dimensiones
  if (x < 0 || y < 0)
    return { error: true, msg: "Ingrese una posicion valida" };

  if (x > board.length || y > board.length)
    return { error: true, msg: "Ingrese una posicion valida" };

  // no ocupe un lugar lleno
  if (board[x][y] != "-")
    return { error: true, msg: "El lugar ya esta ocupado" };

  return {
    error: false,
    msg: "El lugar ya esta ocupado",
  };
};

process.stdin.on("data", tateti);