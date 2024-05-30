import Board from "./components/Board/Board";
import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { boardColorDefault, boardDefault } from "./words";
const correctString = "QUERY";

const App = () => {
  //The matrix for showing the result of the user input
  const [board, setBoard] = useState(boardDefault);
  //The matrix to color each box in the board
  const [boardColor, setBoardColor] = useState(boardColorDefault);
  const [word, setWord] = useState({ rowIndex: 0, index: 0 });

  const [emptyError, setEmptyError] = useState<[string, number]>(["", -1]);

  const deleteClicked = () => {
    if (word.index > 0) {
      const newBoard = [...board];
      newBoard[word.rowIndex][word.index - 1] = "";
      setWord({ ...word, index: word.index - 1 });
      setBoard(newBoard);
    }
  };

  const enterClicked = () => {
    if (word.index === 5) {
      if (board[word.rowIndex].join("") === correctString) alert("You Won!");
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
      setEmptyError(["error", word.rowIndex]);
    }
  };
  const handleKeyClick = (char: string) => {
    setEmptyError(["", -1]);
    const isDelete = char === "Delete";
    const isEnter = char === "Enter";
    if (isDelete) {
      deleteClicked();
    } else if (isEnter) {
      enterClicked();
    } else if (word.index < 5) {
      const newBoard = [...board];
      newBoard[word.rowIndex][word.index] = char;
      setWord({ ...word, index: word.index + 1 });
      setBoard(newBoard);
    }
  };

  return (
    <div className="app">
      <nav>wordle</nav>
      <div className="game">
        <Board board={board} boardColor={boardColor} error={emptyError} />
        <KeyBoard onClick={handleKeyClick}></KeyBoard>
      </div>
    </div>
  );
};

export default App;
