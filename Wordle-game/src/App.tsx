import Board from "./components/Board/Board";
// import { createContext, useState } from "react";
// import { boardDefault } from "./words";

// export const context = createContext([""][""]);
import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { boardColorDefault, boardDefault } from "./words";
const correctString = "QUERY";

const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [boardColor, setBoardColor] = useState(boardColorDefault);

  const [word, setWord] = useState({ rowIndex: 0, index: 0 });
  const handleKeyClick = (char: string) => {
    const isDelete = char === "Delete";
    const isEnter = char === "Enter";

    if (isDelete && word.index > 0) {
      const newBoard = [...board];
      newBoard[word.rowIndex][word.index - 1] = "";
      setWord({ ...word, index: word.index - 1 });
      setBoard(newBoard);
      return;
    }

    if (isEnter) {
      if (word.index === 5) {
        setWord({ ...word, rowIndex: word.rowIndex + 1, index: 0 });
        board[word.rowIndex].map((letter, index) => {
          if (letter == correctString[index]) {
            const newBoardColor = [...boardColor];
            newBoardColor[word.rowIndex][index] = "Green";
            setBoardColor(newBoardColor);
          } else if (correctString.includes(letter)) {
            const newBoardColor = [...boardColor];
            newBoardColor[word.rowIndex][index] = "Yellow";
            setBoardColor(newBoardColor);
          } else {
            const newBoardColor = [...boardColor];
            newBoardColor[word.rowIndex][index] = "Gray";
            setBoardColor(newBoardColor);
          }
        });
      } else {
        console.log("ERROR: Word is not complete");
        return;
      }
    }
    if (word.index < 5) {
      const newBoard = [...board];
      newBoard[word.rowIndex][word.index] = char;
      setWord({ ...word, index: word.index + 1 });
      setBoard(newBoard);
    }
  };

  return (
    <div className="app">
      <nav>wordle</nav>
      {/* <context.Provider value={{board, setBoard}}> */}
      <div className="game">
        <Board board={board} boardColor={boardColor} />
        <KeyBoard onClick={handleKeyClick}></KeyBoard>
      </div>

      {/* </context.Provider> */}
    </div>
  );
};

export default App;
