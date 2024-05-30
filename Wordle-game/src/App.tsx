import Board from "./components/Board/Board";
import { useState } from "react";
import "./App.css";
import KeyBoard from "./components/KeyBoard/KeyBoard";
import { boardColorDefault, boardDefault } from "./words";
const correctString = "QUERY";
const maxWordLength = 5;
const App = () => {
  //The matrix for showing the result of the user input
  const [board, setBoard] = useState(boardDefault);
  //The matrix to color each box in the board
  const [boardColor, setBoardColor] = useState(boardColorDefault);
  const [word, setWord] = useState({ rowIndex: 0, index: 0 });

  const updateBoardAt = (row: number, col: number, value: string) => {
    const updatedBoard = [...board];
    updatedBoard[row][col] = value;
    setBoard(updatedBoard);
  };

  const updateBoardColorAt = (row: number, col: number, color: string) => {
    const updatedBoardColor = [...boardColor];
    updatedBoardColor[row][col] = color;
    setBoardColor(updatedBoardColor);
  };
  const [emptyError, setEmptyError] = useState<[string, number]>(["", -1]);

  const deleteClicked = () => {
    if (word.index > 0) {
      updateBoardAt(word.rowIndex, word.index - 1, "");
      setWord((prevWord) => ({ ...prevWord, index: prevWord.index - 1 }));
    }
  };

  const enterClicked = () => {
    if (board[word.rowIndex].join("") === correctString) alert("You Won!");
    if (word.index === maxWordLength) {
      setWord((prevWord) => ({
        ...prevWord,
        rowIndex: prevWord.rowIndex + 1,
        index: 0,
      }));
      board[word.rowIndex].forEach((letter, index) => {
        const color =
          letter === correctString[index]
            ? "Green"
            : correctString.includes(letter)
            ? "Yellow"
            : "Gray";
        updateBoardColorAt(word.rowIndex, index, color);
      });
    } else {
      setEmptyError(["error", word.rowIndex]);
      alert("Word is not complete");
    }
  };

  const handleKeyClick = (char: string) => {
    setEmptyError(["", -1]);
    if (char === "Delete") {
      deleteClicked();
    } else if (char === "Enter") {
      enterClicked();
    } else if (word.index < maxWordLength) {
      updateBoardAt(word.rowIndex, word.index, char);
      setWord((prevWord) => ({ ...prevWord, index: prevWord.index + 1 }));
    }
  };

  return (
    <div className="App">
      <nav>wordle</nav>
      <div className="game">
        <Board board={board} boardColor={boardColor} error={emptyError} />
        <KeyBoard onClick={handleKeyClick}></KeyBoard>
      </div>
    </div>
  );
};

export default App;
