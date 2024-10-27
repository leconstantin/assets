import React, { useEffect } from "react";
import { useState } from "react";
// 0 1 2
// 3 4 5
// 6 7 8
function Square({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      className="ring-1 ring-zinc-300 bg-zinc-200 rounded-md p-10 h-20 w-20 text-3xl text-blue-500 font-semibold flex items-center justify-center"
    >
      {value}
    </button>
  );
}
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      } else {
      }
    }

    return null;
  }

  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;

    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }
  function handleRestart() {
    setSquares(Array(9).fill(""));
    setStatus("");
    setIsXTurn(true);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("This is a draw ! please restart");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);
  //   console.log(squares);
  return (
    <div className="flex flex-col gap-3 items-center justify-center h-screen">
      <div className="row flex gap-3">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row flex gap-3">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row flex gap-3">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="bg-blue-400 px-6 py-2 text-white font-bold text-lg rounded-md">
        {status}
      </h1>

      <button
        onClick={handleRestart}
        className="py-2 px-4 rounded-lg bg-blue-400 hover:bg-red-600 text-white font-bold"
      >
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;
